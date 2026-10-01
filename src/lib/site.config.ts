/**
 * Central site configuration for this FFC-supported nonprofit site.
 *
 * EDIT THIS FILE to customize a new FFC-supported nonprofit site.
 * Most values that vary between sites flow from here so individual
 * pages, metadata, sitemap, robots, and security headers stay in sync.
 *
 * After editing, run `npm run check:drift` to verify nothing here drifts
 * away from FFC best practices (placeholder URLs left in, etc.).
 */

export type SiteSocialLink = {
  /** Display label, also used for aria-label. */
  label: string
  /** Absolute https URL. Empty string disables the link. */
  href: string
}

export type SiteAddress = {
  /** Heading shown above the address (e.g. "Main Address"). */
  label: string
  /** Address text, one entry per visual line. */
  lines: readonly string[]
  /** Google Maps (or other) link opened when the address is clicked. */
  mapUrl: string
}

/**
 * A footer-standard field the charity has not supplied yet. Listing a field in
 * `siteConfig.pending` renders a visible "awaiting information" placeholder in
 * its place (plain text, never a link), so a gap in the FFC footer standard is
 * a call to action on the page rather than a silent omission. The field's own
 * value must stay EMPTY while it is pending, so no placeholder or borrowed
 * value (e.g. the template's supporting-organization details) can ship behind it.
 *
 * An empty value that is NOT listed here keeps its plain meaning: the charity
 * has none (e.g. no public phone). `taxStatusLabel` is deliberately not a
 * pending field: it is a legal claim, and '' means "make no claim".
 *
 * What "empty" means per field: `email` → `contactEmail`; `phone` → both
 * `phone.display` and `phone.tel`; `address` → `addresses: []`; `ein` → `ein`;
 * `guidestar` → both `guidestar` URLs; `social` → every `social[].href`;
 * `team` → no member in src/data/team/*.json has a name; `donationUrl` →
 * `integrations.zeffyDonationUrl`; `volunteerUrl` → `integrations.idealistUrl`.
 * (Ported from FreeForCharity/FFC-IN-FFC_Single_Page_Template#483; this site
 * keeps its donation / volunteer URLs under `integrations`.)
 */
export type PendingField =
  | 'email'
  | 'phone'
  | 'address'
  | 'ein'
  | 'guidestar'
  | 'social'
  | 'team'
  | 'donationUrl'
  | 'volunteerUrl'

/** Visible text shown in place of a pending field. */
export const PENDING_TEXT = 'Awaiting information from the charity'

export type SiteConfig = {
  /** Display name of the charity (used in titles, OG/Twitter cards). */
  name: string
  /** Short tagline used in the default title template. */
  tagline: string
  /** Plain-language description used for the <meta description> tag. */
  description: string
  /**
   * Shorter description tuned for OG/Twitter social card previews.
   * Falls back to `description` if empty. Aim for <= 200 chars and avoid
   * em-dashes — some card renderers break on them.
   */
  shortDescription: string
  /**
   * Canonical production URL with no trailing slash.
   * Used by metadataBase, sitemap, and robots. The drift check verifies that
   * this is updated whenever public/CNAME points to a custom domain, and
   * that public/.well-known/security.txt no longer carries the placeholder.
   */
  url: string
  /**
   * Twitter / X handle including the leading @ — e.g. `@freeforcharity`.
   * Empty string omits the twitter:site meta entirely. Handles without `@`
   * are auto-prefixed so a typo doesn't silently break attribution.
   */
  twitterHandle: string
  /**
   * Primary contact email. Used by your own pages; security.txt carries
   * its own `Contact:` line and is not auto-derived from this value.
   * Keep them in sync manually when you change either.
   */
  contactEmail: string
  /** SEO keywords used in the root layout metadata. */
  keywords: readonly string[]
  /** Default theme color (used by manifest and meta tag). */
  themeColor: string
  /** Where the vulnerability disclosure policy lives on this site. */
  vulnerabilityDisclosurePath: string
  /** Social links displayed in the footer. */
  social: readonly SiteSocialLink[]
  /** IRS Employer Identification Number (tax ID), e.g. '12-3456789'. */
  ein: string
  /**
   * Year (or ISO date) the organization was founded, e.g. '2014'.
   * Emitted as schema.org `foundingDate`. Omit to skip it.
   */
  foundingDate?: string
  /**
   * schema.org nonprofit status URL, e.g. 'https://schema.org/Nonprofit501c3'.
   * FFC-supported sites are 501(c)(3) organizations; omit to skip it. Omit for
   * a pre-501(c)(3) org — do not assert 501(c)(3) status that isn't granted.
   */
  nonprofitStatus?: string
  /**
   * Human-readable legal/tax status shown in the footer copyright line
   * (e.g. 'a US 501(c)(3) nonprofit' or 'a US pre-501(c)(3) nonprofit'). When
   * omitted the footer falls back to the original 'a US 501c3 Non Profit' copy
   * (behavior-preserving), so set it for pre-501(c)(3) orgs to avoid
   * overstating status.
   */
  taxStatusLabel?: string
  /**
   * Other names the organization is known by (brands, abbreviations).
   * Emitted as schema.org `alternateName`. Omit to skip it.
   */
  alternateNames?: readonly string[]
  /**
   * Primary phone number. `display` is the human-readable form shown to users;
   * `tel` is the value used in the `tel:` link (digits, optionally E.164).
   */
  phone: { display: string; tel: string }
  /** Physical office addresses shown in the footer contact column. */
  addresses: readonly SiteAddress[]
  /** GuideStar / Candid transparency profile links shown in the footer. */
  guidestar: { profileUrl: string; directProfileUrl: string }
  /**
   * Permanent attribution to the supporting organization (FFC). Drives the
   * always-rendered "Supported by" clause in the footer bottom bar and the
   * "Supported Charity Login" quick link (`hubUrl`). This is part of the FFC
   * footer standard for every supported charity site: it is REQUIRED, always
   * rendered, and NOT to be removed or repointed when customizing a fork.
   * Distinct from `parentOrg` below, which covers genuine fiscal-sponsorship
   * ("a project of") relationships.
   */
  supportedBy: { name: string; url: string; hubUrl: string }
  /**
   * Parent / umbrella organization, when this site is "a project of" another
   * nonprofit. Omit for a standalone charity (the footer clause is hidden).
   */
  parentOrg?: { name: string; url: string; hubUrl: string }
  /**
   * Footer-standard fields still awaiting the charity. Each listed field keeps
   * an EMPTY value and renders a visible plain-text placeholder
   * (`PENDING_TEXT`) in its slot, never a link. An empty value NOT listed here
   * means "the charity has none". `taxStatusLabel` is deliberately not
   * pending-able: it is a legal claim, so '' means "make no claim". See
   * `PendingField`. Omit (or leave empty) when nothing is pending.
   */
  pending?: readonly PendingField[]
  /**
   * Third-party integration endpoints. Each fork points these at its own
   * accounts — the domains are already allow-listed in the CSP, so only the
   * path/ID changes here.
   */
  integrations: {
    /** Zeffy donation-form embed URL (the iframe `src`). */
    zeffyDonationUrl: string
    /** Idealist volunteer-opportunities profile URL. */
    idealistUrl: string
    /** SociableKit Facebook-events widget iframe URL. */
    sociableKitEventsWidgetUrl: string
    /** Microsoft Forms application-form URL (https://forms.office.com/r/<id>). */
    microsoftFormUrl: string
  }
}

export const siteConfig: SiteConfig = {
  name: 'The Corey V. Moore Jr. Initiative for Fentanyl Awareness',
  tagline: 'Educating to protect. Empowering to save. In memory of Corey V. Moore Jr.',
  description:
    'The Corey V. Moore Jr. Initiative for Fentanyl Awareness Inc. protects youth through school presentations and life-saving resource distribution. Join our mission.',
  shortDescription:
    'The Corey V. Moore Jr. Initiative for Fentanyl Awareness protects youth through school presentations and life-saving resource distribution.',
  url: 'https://thecoreyvmoorejrinitiative.org',
  twitterHandle: '',
  contactEmail: '',
  keywords: [
    'fentanyl awareness',
    'opioid crisis support',
    'youth education',
    'naloxone',
    'community safety',
    'nonprofit',
    'charity',
  ],
  themeColor: '#0567B1',
  vulnerabilityDisclosurePath: '/vulnerability-disclosure-policy',
  social: [],
  ein: '42-2922878',
  foundingDate: '2026',
  // Pre-501(c)(3): make no tax-status claim in the footer.
  taxStatusLabel: '',
  alternateNames: ['The Corey V Moore Jr Initiative for Fentanyl Awareness Inc.'],
  phone: { display: '', tel: '' },
  addresses: [],
  guidestar: {
    profileUrl: '',
    directProfileUrl: '',
  },
  supportedBy: {
    name: 'Free For Charity',
    url: 'https://freeforcharity.org',
    hubUrl: 'https://freeforcharity.org/hub/',
  },
  integrations: {
    zeffyDonationUrl: '',
    idealistUrl: '',
    sociableKitEventsWidgetUrl: '',
    microsoftFormUrl: '',
  },
  // Footer-standard fields still awaiting the charity; each renders a visible
  // 'awaiting information' placeholder until it is filled in.
  pending: [
    'email',
    'phone',
    'address',
    'guidestar',
    'social',
    'team',
    'donationUrl',
    'volunteerUrl',
  ],
}

/**
 * Compose a fully-qualified URL on this site.
 *
 * The path is required to be a same-origin absolute path (starting with `/`).
 * This rules out protocol-relative inputs like `//evil.com` that could leak
 * into a future redirect or canonical link.
 */
export function siteUrl(path = '/'): string {
  if (typeof path !== 'string' || !path.startsWith('/') || path.startsWith('//')) {
    throw new TypeError(
      `siteUrl: path must be a same-origin absolute path starting with a single "/" (got: ${JSON.stringify(path)})`
    )
  }
  const base = siteConfig.url.replace(/\/$/, '')
  return `${base}${path}`
}

/**
 * Returns the Twitter handle with a guaranteed leading `@`.
 * Returns `undefined` (so the meta tag is omitted) if the handle is empty
 * or is just an `@` with no body — emitting a bare `@` would advertise a
 * malformed handle to Twitter's scraper.
 */
export function twitterSite(): string | undefined {
  const raw = siteConfig.twitterHandle.trim().replace(/^@+/, '')
  if (!raw) return undefined
  return `@${raw}`
}

/** Returns the OG/Twitter card description, falling back to the longer page description. */
export function cardDescription(): string {
  return siteConfig.shortDescription.trim() || siteConfig.description
}

/** True when `field` is listed in `siteConfig.pending`. */
export function isPending(field: PendingField): boolean {
  return siteConfig.pending?.includes(field) ?? false
}

/**
 * The charity's published phone number (both `display` and `tel` set), or
 * null. A pending or missing number is never shown as a dialable link.
 */
export function publishedPhone(): { display: string; tel: string } | null {
  if (isPending('phone')) return null
  const display = siteConfig.phone.display.trim()
  const tel = siteConfig.phone.tel.trim()
  return display && tel ? { display, tel } : null
}
