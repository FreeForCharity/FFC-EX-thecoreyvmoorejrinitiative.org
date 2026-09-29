import { isPending } from '@/lib/site.config'
import { configuredTeam } from '@/data/team'

/**
 * The Team section and its #team nav links: shown when at least one member has
 * a populated name, or while the team is pending (the section then renders the
 * "awaiting information" placeholder instead of cards — see `PendingField`).
 */
export function teamSectionVisible(): boolean {
  return configuredTeam.length > 0 || isPending('team')
}
