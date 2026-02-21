export const LogoIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    aria-hidden="true"
  >
    {/* Hash # — markdown symbol */}
    {/* Left vertical bar */}
    <rect x="8" y="2" width="3" height="24" rx="1" fill="var(--text-color)" opacity="0.5" />
    {/* Right vertical bar — Vim cursor */}
    <rect x="17" y="2" width="3" height="24" rx="1" fill="var(--link-color)" />
    {/* Top horizontal bar */}
    <rect x="4" y="8" width="20" height="3" rx="1" fill="var(--text-color)" opacity="0.5" />
    {/* Bottom horizontal bar */}
    <rect x="4" y="17" width="20" height="3" rx="1" fill="var(--text-color)" opacity="0.5" />
  </svg>
);
