/* Reusable inline icons matching the original design */

export function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="currentColor" stroke="none" />
      <path
        d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
        fill="#fff"
        stroke="none"
        transform="translate(4.8 4.8) scale(.6)"
      />
    </svg>
  )
}

export const LinkedinIcon = () => <span className="li-icon">in</span>
export const HelpIcon = () => <span className="help-icon">?</span>

export function DownloadIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12m0 0 4-4m-4 4-4-4M4 17v3h16v-3" /></svg>
}
export function ArrowDownIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v15m0 0 6-6m-6 6-6-6" /></svg>
}
export function MailIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18v12H3V6Zm0 0 9 7 9-7" /></svg>
}
export function ArrowUpRightIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8" /></svg>
}
export function PlayIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 5 11 7-11 7V5Z" /></svg>
}
export function ExternalIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 4h6v6M20 4l-9 9M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5" /></svg>
}
export function CodeIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 8-4 4 4 4m8-8 4 4-4 4m-3-11-2 14" /></svg>
}

/* Solid teacup with steam — matches the little chai icon in the reference footer */
export function ChaiIcon() {
  return (
    <svg className="chai-icon" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="17.2" cy="13.2" r="2.7" fill="none" stroke="currentColor" strokeWidth="2.2" />
      <path
        d="M3.4 9.4h12.7v5.9a3.8 3.8 0 0 1-3.8 3.8H7.2a3.8 3.8 0 0 1-3.8-3.8V9.4Z"
        fill="currentColor"
        stroke="none"
      />
      <path
        d="M7.6 2.6c-1 .9-1 1.8 0 2.7M11.8 2.4c-1 .9-1 1.9 0 2.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

/* Hand-drawn arrows used in the script annotations */
export function HandArrowDown() {
  return (
    <svg className="hand-arrow" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3 V19 M7 14 L12 19 L17 14" />
    </svg>
  )
}
export function HandArrowUp() {
  return (
    <svg className="hand-arrow skill-arrow" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 20 H11 V6 M7 9 L11 5 L15 9" />
    </svg>
  )
}
