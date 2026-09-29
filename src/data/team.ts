// Team member data
// This file imports team member data from JSON files in ./team/ directory
// To edit team members, add JSON files in src/data/team/ and import them here.
// Each member needs: name, title, imageUrl (a /Images/* path), linkedinUrl.
//
// No leadership has been supplied by the charity yet, so the team is empty and
// listed in `siteConfig.pending` (the Team section shows an "awaiting
// information" placeholder). Never fill it with the template's sample members:
// they are the supporting organization's own staff.

export type TeamMember = {
  name: string
  title: string
  imageUrl: string
  linkedinUrl: string
}

export const team: TeamMember[] = []

// `configuredTeam` is the subset with the required `name` populated — the Team
// section and its Header/Footer nav links key visibility off this list (see
// src/lib/section-visibility.ts) so they never render empty cards.
export const configuredTeam: TeamMember[] = team.filter(
  (member) => typeof member.name === 'string' && member.name.trim().length > 0
)
