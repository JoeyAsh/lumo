/**
 * LUMO Product Illustrations
 * Based on R&T technical drawings:
 *  - PY01: floor-standing, 692×780mm, with cistern + bidet seat
 *  - YA61: wall-hung U-shape, 595×460.5mm
 *  - XA61: wall-hung square, 590×460.5mm
 */


/* ─── Shared shadow/glow defs ──────────────────────────────── */
function Defs({ id }: { id: string }) {
  return (
    <defs>
      <radialGradient id={`bg-${id}`} cx="50%" cy="60%" r="55%">
        <stop offset="0%" stopColor="rgba(123,167,188,0.12)" />
        <stop offset="100%" stopColor="rgba(123,167,188,0)" />
      </radialGradient>
      <filter id={`shadow-${id}`} x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="rgba(44,44,44,0.10)" />
      </filter>
      <linearGradient id={`ceramic-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="40%" stopColor="#F8F8F6" />
        <stop offset="100%" stopColor="#EDEAE4" />
      </linearGradient>
      <linearGradient id={`cistern-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FAFAF8" />
        <stop offset="100%" stopColor="#E8E4DC" />
      </linearGradient>
      <linearGradient id={`seat-${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#F5F3EF" />
        <stop offset="100%" stopColor="#DEDAD2" />
      </linearGradient>
      <linearGradient id={`panel-${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#5A5A5A" />
        <stop offset="100%" stopColor="#3A3A3A" />
      </linearGradient>
    </defs>
  )
}

/* ─── PY01 – Floor-standing with cistern ──────────────────── */
export function PY01Illustration({ className = '' }: { className?: string }) {
  const id = 'py01'
  return (
    <svg
      viewBox="0 0 340 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <Defs id={id} />

      {/* Background glow */}
      <ellipse cx="170" cy="400" rx="130" ry="18" fill="rgba(44,44,44,0.06)" />
      <circle cx="170" cy="200" r="160" fill={`url(#bg-${id})`} />

      {/* ── Cistern (tank) ── */}
      <g filter={`url(#shadow-${id})`}>
        <rect x="90" y="40" width="160" height="140" rx="8" fill={`url(#cistern-${id})`} stroke="#E0DDD6" strokeWidth="1" />
        {/* Cistern top rim */}
        <rect x="88" y="38" width="164" height="10" rx="4" fill="#F0EDE8" stroke="#E0DDD6" strokeWidth="0.5" />
        {/* Flush button area */}
        <rect x="155" y="43" width="30" height="5" rx="2.5" fill="#D8D4CC" />
        {/* Water level indicator line */}
        <line x1="100" y1="100" x2="240" y2="100" stroke="#EDE9E1" strokeWidth="0.5" strokeDasharray="4 3" />
        {/* Cistern highlight */}
        <rect x="96" y="50" width="30" height="80" rx="4" fill="rgba(255,255,255,0.3)" />
      </g>

      {/* ── Bidet seat / control panel strip ── */}
      <g>
        {/* Control panel (graphite strip on front) */}
        <rect x="90" y="178" width="160" height="28" rx="4" fill={`url(#panel-${id})`} />
        {/* LED display dots */}
        <circle cx="125" cy="192" r="3" fill="#7BA7BC" opacity="0.9" />
        <circle cx="138" cy="192" r="2.5" fill="rgba(255,255,255,0.4)" />
        {/* Temperature display */}
        <text x="155" y="197" textAnchor="middle" fill="white" fontSize="9" fontFamily="sans-serif" letterSpacing="1" opacity="0.9">36°</text>
        <circle cx="170" cy="192" r="2.5" fill="rgba(255,255,255,0.4)" />
        <circle cx="183" cy="192" r="2.5" fill="rgba(255,255,255,0.3)" />
        {/* Manual control knob */}
        <circle cx="218" cy="192" r="9" fill="#4A4A4A" stroke="#606060" strokeWidth="0.5" />
        <circle cx="218" cy="192" r="5" fill="#3A3A3A" />
        <circle cx="218" cy="188" r="1.5" fill="#6A6A6A" />
      </g>

      {/* ── Seat lid (closed, slight angle) ── */}
      <g filter={`url(#shadow-${id})`}>
        <ellipse cx="168" cy="210" rx="82" ry="18" fill={`url(#seat-${id})`} stroke="#D8D4CC" strokeWidth="0.8" />
        {/* Lid highlight */}
        <ellipse cx="155" cy="206" rx="35" ry="7" fill="rgba(255,255,255,0.45)" />
        {/* Rear hinge line */}
        <line x1="90" y1="209" x2="246" y2="209" stroke="#D0CCC4" strokeWidth="0.5" />
      </g>

      {/* ── Bowl body ── */}
      <g filter={`url(#shadow-${id})`}>
        {/* Main ceramic body */}
        <path
          d="M86 206 C86 206 74 230 72 280 C70 320 80 370 86 378 C92 386 245 386 252 378 C258 370 268 320 266 280 C264 230 252 206 252 206 Z"
          fill={`url(#ceramic-${id})`}
          stroke="#D8D4CC"
          strokeWidth="1"
        />
        {/* Bowl front curve highlight */}
        <path
          d="M100 220 C100 220 88 250 86 290 C84 320 90 355 95 365"
          stroke="rgba(255,255,255,0.5)"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
        {/* Bowl inner shadow at top */}
        <ellipse cx="169" cy="218" rx="75" ry="14" fill="rgba(200,196,190,0.3)" />
        {/* Base widening */}
        <path
          d="M80 358 C78 368 82 378 86 382 L252 382 C256 378 260 368 258 358 Z"
          fill="#EDE9E1"
          stroke="#D8D4CC"
          strokeWidth="0.5"
        />
        {/* Floor connection / base */}
        <ellipse cx="169" cy="382" rx="85" ry="8" fill="#E4E0D8" stroke="#D0CCC4" strokeWidth="0.5" />
      </g>

      {/* ── Foot sensor (small circle at base front-left) ── */}
      <circle cx="105" cy="376" r="8" fill="#F0EDE8" stroke="#D0CCC4" strokeWidth="0.8" />
      <circle cx="105" cy="376" r="4" fill="#E4E0D8" />
      <circle cx="105" cy="376" r="1.5" fill="#C8B99A" opacity="0.7" />

      {/* ── Remote control (wall mounted, right side) ── */}
      <g opacity="0.85">
        <rect x="270" y="100" width="30" height="120" rx="4" fill="#F5F3EF" stroke="#D8D4CC" strokeWidth="0.8" />
        {/* Remote buttons */}
        {[0,1,2,3,4,5].map(i => (
          <rect key={i} x="275" y={112 + i * 16} width="20" height="10" rx="2" fill="#E8E4DC" stroke="#D0CCC4" strokeWidth="0.3" />
        ))}
        {/* Remote label */}
        <text x="285" y="108" textAnchor="middle" fill="#9A9690" fontSize="5" fontFamily="sans-serif">VC330</text>
      </g>

      {/* ── Night light glow at base ── */}
      <ellipse cx="169" cy="390" rx="70" ry="6" fill="rgba(123,167,188,0.08)">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="4s" repeatCount="indefinite" />
      </ellipse>

      {/* ── Dimension hint lines (subtle) ── */}
      <line x1="58" y1="40" x2="58" y2="384" stroke="#C8B99A" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.4" />
      <line x1="54" y1="40" x2="62" y2="40" stroke="#C8B99A" strokeWidth="0.5" opacity="0.4" />
      <line x1="54" y1="384" x2="62" y2="384" stroke="#C8B99A" strokeWidth="0.5" opacity="0.4" />
    </svg>
  )
}

/* ─── YA61 – Wall-hung U-Shape ────────────────────────────── */
export function YA61Illustration({ className = '' }: { className?: string }) {
  const id = 'ya61'
  return (
    <svg
      viewBox="0 0 340 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <Defs id={id} />

      {/* Wall plane */}
      <rect x="0" y="0" width="340" height="100" fill="rgba(244,242,238,0.6)" />
      <line x1="0" y1="100" x2="340" y2="100" stroke="#E0DDD6" strokeWidth="1" />

      {/* Background glow */}
      <circle cx="170" cy="220" r="140" fill={`url(#bg-${id})`} />

      {/* ── Wall bracket / mounting area ── */}
      <rect x="125" y="92" width="90" height="12" rx="2" fill="#D8D4CC" />

      {/* ── Control panel strip (top of seat) ── */}
      <rect x="100" y="103" width="140" height="30" rx="6" fill={`url(#panel-${id})`} />
      {/* LED status dots */}
      <circle cx="128" cy="118" r="3" fill="#7BA7BC" opacity="0.9" />
      <circle cx="141" cy="118" r="2.5" fill="rgba(255,255,255,0.3)" />
      {/* Temperature */}
      <text x="160" y="123" textAnchor="middle" fill="white" fontSize="9" fontFamily="sans-serif" letterSpacing="1" opacity="0.9">38°</text>
      <circle cx="178" cy="118" r="2.5" fill="rgba(255,255,255,0.3)" />
      {/* ECO indicator */}
      <text x="197" y="122" textAnchor="middle" fill="rgba(143,175,154,0.8)" fontSize="7" fontFamily="sans-serif">ECO</text>
      {/* Manual button (center dial) */}
      <circle cx="228" cy="118" r="9" fill="#4A4A4A" stroke="#606060" strokeWidth="0.5" />
      <circle cx="228" cy="118" r="5" fill="#3A3A3A" />
      <circle cx="228" cy="114" r="1.5" fill="#6A6A6A" />

      {/* ── Seat lid (U-shape, closed) ── */}
      <g filter={`url(#shadow-${id})`}>
        {/* Lid outer */}
        <path
          d="M96 132 L244 132 L244 200 Q244 248 170 258 Q96 248 96 200 Z"
          fill={`url(#seat-${id})`}
          stroke="#D8D4CC"
          strokeWidth="0.8"
        />
        {/* Lid highlight */}
        <path
          d="M106 140 L180 140 Q216 140 225 170 Q225 195 215 210"
          stroke="rgba(255,255,255,0.45)"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
        />
        {/* Lid rear hinge line */}
        <line x1="96" y1="134" x2="244" y2="134" stroke="#D0CCC4" strokeWidth="0.5" />
      </g>

      {/* ── Bowl body (wall-hung, U-shape) ── */}
      <g filter={`url(#shadow-${id})`}>
        {/* Main ceramic */}
        <path
          d="M96 132 L244 132 L244 210 Q244 280 170 292 Q96 280 96 210 Z"
          fill={`url(#ceramic-${id})`}
          stroke="#D8D4CC"
          strokeWidth="1"
        />
        {/* Inner bowl shadow */}
        <path
          d="M114 148 L226 148 L226 200 Q226 250 170 262 Q114 250 114 200 Z"
          fill="rgba(200,196,190,0.25)"
        />
        {/* Front highlight */}
        <path
          d="M106 150 Q100 185 100 215 Q100 255 115 272"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="7"
          strokeLinecap="round"
          fill="none"
        />
        {/* Bottom drainage connector */}
        <ellipse cx="170" cy="292" rx="22" ry="8" fill="#D8D4CC" />
        <rect x="158" y="290" width="24" height="30" rx="4" fill="#D0CCC4" />
      </g>

      {/* ── Remote control ── */}
      <g opacity="0.85">
        <rect x="56" y="110" width="28" height="110" rx="4" fill="#F5F3EF" stroke="#D8D4CC" strokeWidth="0.8" />
        {[0,1,2,3,4,5].map(i => (
          <rect key={i} x="61" y={122 + i * 15} width="18" height="9" rx="2" fill="#E8E4DC" stroke="#D0CCC4" strokeWidth="0.3" />
        ))}
        <text x="70" y="118" textAnchor="middle" fill="#9A9690" fontSize="5" fontFamily="sans-serif">VC330</text>
      </g>

      {/* ── Night light glow ── */}
      <ellipse cx="170" cy="295" rx="50" ry="5" fill="rgba(123,167,188,0.12)">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="4s" repeatCount="indefinite" />
      </ellipse>

      {/* ── Dimension label: 380mm width ── */}
      <line x1="96" y1="318" x2="244" y2="318" stroke="#C8B99A" strokeWidth="0.5" opacity="0.5" />
      <line x1="96" y1="314" x2="96" y2="322" stroke="#C8B99A" strokeWidth="0.5" opacity="0.5" />
      <line x1="244" y1="314" x2="244" y2="322" stroke="#C8B99A" strokeWidth="0.5" opacity="0.5" />
      <text x="170" y="332" textAnchor="middle" fill="#C8B99A" fontSize="9" fontFamily="sans-serif" opacity="0.7">380 mm</text>
    </svg>
  )
}

/* ─── XA61 – Wall-hung Square Shape ──────────────────────── */
export function XA61Illustration({ className = '' }: { className?: string }) {
  const id = 'xa61'
  return (
    <svg
      viewBox="0 0 340 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <Defs id={id} />

      {/* Wall plane */}
      <rect x="0" y="0" width="340" height="100" fill="rgba(244,242,238,0.6)" />
      <line x1="0" y1="100" x2="340" y2="100" stroke="#E0DDD6" strokeWidth="1" />

      {/* Background glow */}
      <circle cx="170" cy="220" r="140" fill={`url(#bg-${id})`} />

      {/* ── Wall bracket ── */}
      <rect x="125" y="92" width="90" height="12" rx="2" fill="#D8D4CC" />

      {/* ── Control panel strip ── */}
      <rect x="100" y="103" width="140" height="30" rx="4" fill={`url(#panel-${id})`} />
      <circle cx="128" cy="118" r="3" fill="#7BA7BC" opacity="0.9" />
      <circle cx="141" cy="118" r="2.5" fill="rgba(255,255,255,0.3)" />
      <text x="160" y="123" textAnchor="middle" fill="white" fontSize="9" fontFamily="sans-serif" letterSpacing="1" opacity="0.9">38°</text>
      <circle cx="178" cy="118" r="2.5" fill="rgba(255,255,255,0.3)" />
      <text x="197" y="122" textAnchor="middle" fill="rgba(143,175,154,0.8)" fontSize="7" fontFamily="sans-serif">ECO</text>
      <circle cx="228" cy="118" r="9" fill="#4A4A4A" stroke="#606060" strokeWidth="0.5" />
      <circle cx="228" cy="118" r="5" fill="#3A3A3A" />
      <circle cx="228" cy="114" r="1.5" fill="#6A6A6A" />

      {/* ── Square seat lid ── */}
      <g filter={`url(#shadow-${id})`}>
        {/* Square with slightly rounded corners – XA design */}
        <rect x="96" y="132" width="148" height="130" rx="10" fill={`url(#seat-${id})`} stroke="#D8D4CC" strokeWidth="0.8" />
        {/* Highlight */}
        <rect x="106" y="140" width="60" height="80" rx="6" fill="rgba(255,255,255,0.3)" />
        {/* Rear hinge */}
        <line x1="96" y1="136" x2="244" y2="136" stroke="#D0CCC4" strokeWidth="0.5" />
      </g>

      {/* ── Square bowl body ── */}
      <g filter={`url(#shadow-${id})`}>
        {/* Square ceramic body with slightly more rounded bottom */}
        <path
          d="M96 132 L244 132 L244 240 Q244 295 210 300 L130 300 Q96 295 96 240 Z"
          fill={`url(#ceramic-${id})`}
          stroke="#D8D4CC"
          strokeWidth="1"
        />
        {/* Inner bowl shadow */}
        <path
          d="M114 148 L226 148 L226 230 Q226 275 200 280 L140 280 Q114 275 114 230 Z"
          fill="rgba(200,196,190,0.22)"
        />
        {/* Left side highlight */}
        <path
          d="M106 148 L106 240 Q106 280 118 290"
          stroke="rgba(255,255,255,0.38)"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
        />
        {/* Bottom connector */}
        <ellipse cx="170" cy="300" rx="22" ry="7" fill="#D8D4CC" />
        <rect x="158" y="298" width="24" height="30" rx="4" fill="#D0CCC4" />
      </g>

      {/* ── Remote ── */}
      <g opacity="0.85">
        <rect x="56" y="110" width="28" height="110" rx="4" fill="#F5F3EF" stroke="#D8D4CC" strokeWidth="0.8" />
        {[0,1,2,3,4,5].map(i => (
          <rect key={i} x="61" y={122 + i * 15} width="18" height="9" rx="2" fill="#E8E4DC" stroke="#D0CCC4" strokeWidth="0.3" />
        ))}
        <text x="70" y="118" textAnchor="middle" fill="#9A9690" fontSize="5" fontFamily="sans-serif">VC330</text>
      </g>

      {/* Night light */}
      <ellipse cx="170" cy="302" rx="50" ry="5" fill="rgba(123,167,188,0.12)">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="4s" repeatCount="indefinite" />
      </ellipse>

      {/* Dimension */}
      <line x1="96" y1="320" x2="244" y2="320" stroke="#C8B99A" strokeWidth="0.5" opacity="0.5" />
      <line x1="96" y1="316" x2="96" y2="324" stroke="#C8B99A" strokeWidth="0.5" opacity="0.5" />
      <line x1="244" y1="316" x2="244" y2="324" stroke="#C8B99A" strokeWidth="0.5" opacity="0.5" />
      <text x="170" y="334" textAnchor="middle" fill="#C8B99A" fontSize="9" fontFamily="sans-serif" opacity="0.7">380 mm</text>
    </svg>
  )
}
