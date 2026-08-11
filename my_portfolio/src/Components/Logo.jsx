import React, { useId } from "react"

export default function Logo({
  className = "",
  width = 80,
  height = 40,
  title = "Olamide Akinleye",
  ariaLabel,
  titleId,
}) {
  const reactId = useId()
  const _titleId = titleId || `logo-${reactId}`

  // If a title is provided, reference it for assistive tech; otherwise use aria-label
  const ariaProps = title ? { role: "img", "aria-labelledby": _titleId } : { "aria-label": ariaLabel || "logo" }

  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 140 60"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      focusable="false"
      {...ariaProps}
    >
      {title ? <title id={_titleId}>{title}</title> : null}

      {/* Two stylized A strokes — they use currentColor so `color` controls them */}
      <path
        d="M20 50 L40 10 L60 50 M65 50 L85 10 L105 50"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        className="logo__a"
      />

      {/* Square-ish O — uses CSS variable --logo-accent (falls back to currentColor) */}
      <rect
        x="110"
        y="20"
        width="25"
        height="25"
        rx="8"
        fill="none"
        stroke="var(--logo-accent, currentColor)"
        strokeWidth="4"
        className="logo__o"
      />

      {/* Connection dot */}
      <circle cx="62.5" cy="50" r="3" fill="currentColor" className="logo__dot" />
    </svg>
  )
}
