import { team } from '@/data/team'
import { isPending } from '@/lib/site.config'
import { faqs } from '@/data/faqs'

// These validate the data contract a forking charity must follow when editing
// the JSON/TS under src/data/* — every item must carry the fields its component
// renders, so a malformed edit fails the suite instead of the live site.
describe('data modules', () => {
  describe('team', () => {
    it('is a non-empty array, or empty while the team is pending', () => {
      expect(Array.isArray(team)).toBe(true)
      if (isPending('team')) expect(team).toHaveLength(0)
      else expect(team.length).toBeGreaterThan(0)
    })
    it('every member has name, title, an /Images/ photo, and an http(s) LinkedIn URL', () => {
      for (const m of team) {
        expect(m.name).toBeTruthy()
        expect(m.title).toBeTruthy()
        expect(m.imageUrl).toMatch(/^\/Images\//)
        expect(m.linkedinUrl).toMatch(/^https?:\/\//)
      }
    })
  })

  describe('faqs', () => {
    it('is a non-empty array', () => {
      expect(Array.isArray(faqs)).toBe(true)
      expect(faqs.length).toBeGreaterThan(0)
    })
    it('every entry has a question and an answer', () => {
      for (const f of faqs) {
        expect(f.question).toBeTruthy()
        expect(f.answer).toBeTruthy()
      }
    })
  })
})
