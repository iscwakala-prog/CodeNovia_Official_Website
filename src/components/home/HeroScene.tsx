"use client";

import { motion, useReducedMotion } from "framer-motion";

const floats = [
  { text: "</>", x: "8%", y: "18%", delay: 0 },
  { text: "{ AI }", x: "78%", y: "14%", delay: 0.4 },
  { text: "cloud", x: "4%", y: "72%", delay: 0.8 },
  { text: "01 10", x: "82%", y: "68%", delay: 1.2 },
  { text: "API", x: "70%", y: "42%", delay: 0.6 },
];

export function HeroScene() {
  const reduce = useReducedMotion();

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[560px] lg:max-w-none">
      {/* Core glow */}
      <div
        className="absolute inset-[18%] rounded-full bg-accent/30 blur-[60px] hero-pulse"
        aria-hidden
      />
      <div
        className="absolute inset-[28%] rounded-full bg-accent-bright/20 blur-[40px]"
        aria-hidden
      />

      {/* Orbit rings */}
      <motion.div
        className="absolute inset-[6%] rounded-full border border-accent/25"
        style={{ borderStyle: "dashed" }}
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
        aria-hidden
      />
      <motion.div
        className="absolute inset-[14%] rounded-full border border-accent-bright/20"
        animate={reduce ? undefined : { rotate: -360 }}
        transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
        aria-hidden
      >
        <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-bright shadow-[0_0_12px_#3db4ff]" />
        <span className="absolute bottom-[18%] right-0 h-2 w-2 translate-x-1/2 rounded-full bg-accent shadow-[0_0_10px_#1e9bff]" />
      </motion.div>
      <motion.div
        className="absolute inset-[22%] rounded-full border border-white/10"
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        aria-hidden
      >
        <span className="absolute left-[12%] top-[30%] h-1.5 w-1.5 rounded-full bg-white/80" />
      </motion.div>

      {/* Floating code chips */}
      {floats.map((item) => (
        <motion.span
          key={item.text}
          className="absolute z-10 rounded-md border border-accent/30 bg-bg-elevated/80 px-2.5 py-1 font-mono text-[11px] tracking-wide text-accent-bright backdrop-blur-sm sm:text-xs"
          style={{ left: item.x, top: item.y }}
          initial={reduce ? false : { opacity: 0, y: 8 }}
          animate={
            reduce
              ? { opacity: 1 }
              : { opacity: [0.55, 1, 0.55], y: [0, -10, 0] }
          }
          transition={{
            duration: 4.5,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {item.text}
        </motion.span>
      ))}

      {/* Main SVG core */}
      <svg
        viewBox="0 0 420 420"
        className="relative z-[1] h-full w-full drop-shadow-[0_0_50px_rgba(30,155,255,0.4)]"
        role="img"
        aria-label="Animated CodeNovia technology core"
      >
        <defs>
          <linearGradient id="coreBody" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#12325a" />
            <stop offset="45%" stopColor="#0a1c36" />
            <stop offset="100%" stopColor="#050f20" />
          </linearGradient>
          <linearGradient id="coreEdge" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7ad0ff" />
            <stop offset="50%" stopColor="#1e9bff" />
            <stop offset="100%" stopColor="#5ec4ff" />
          </linearGradient>
          <radialGradient id="coreShine" cx="40%" cy="30%" r="60%">
            <stop offset="0%" stopColor="rgba(94,196,255,0.35)" />
            <stop offset="100%" stopColor="rgba(94,196,255,0)" />
          </radialGradient>
          <filter id="coreGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="5" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Hex shell */}
        <g transform="translate(210 210)">
          <path
            d="M0 -130 L112 -65 V65 L0 130 L-112 65 V-65 Z"
            fill="url(#coreBody)"
            stroke="url(#coreEdge)"
            strokeWidth="2.2"
            filter="url(#coreGlow)"
          />
          <path
            d="M0 -130 L112 -65 V65 L0 130 L-112 65 V-65 Z"
            fill="url(#coreShine)"
          />
          <path
            d="M0 -96 L82 -48 V48 L0 96 L-82 48 V-48 Z"
            fill="#06101f"
            stroke="#3db4ff"
            strokeWidth="1.4"
            opacity="0.95"
          />

          {/* Inner circuit grid */}
          <g stroke="#3db4ff" strokeWidth="1.4" fill="none" opacity="0.75">
            <path d="M-48 -10 H-18 V20" />
            <path d="M48 -10 H18 V20" />
            <path d="M0 -40 V-8" />
            <path d="M-36 40 H36" />
            <path d="M-28 40 V55" />
            <path d="M28 40 V55" />
            <circle cx="-18" cy="20" r="3.2" fill="#5ec4ff" />
            <circle cx="18" cy="20" r="3.2" fill="#5ec4ff" />
            <circle cx="0" cy="-8" r="3.2" fill="#5ec4ff" />
          </g>

          {/* Logo brackets */}
          <g>
            <path
              d="M0 -52 L46 -26 V26 L0 52 L-46 26 V-26 Z"
              fill="#091828"
              stroke="#5ec4ff"
              strokeWidth="1.6"
            />
            <path
              d="M-14 -10 L-22 0 L-14 10 M14 -10 L22 0 L14 10"
              stroke="#7ad0ff"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </g>

          {/* Pins */}
          <g fill="#1e9bff">
            {[-78, -46, -14, 18, 50].map((y) => (
              <g key={y} opacity="0.9">
                <rect x="-132" y={y} width="18" height="7" rx="1.5" />
                <rect x="114" y={y} width="18" height="7" rx="1.5" />
              </g>
            ))}
          </g>
        </g>

        {/* Scan line */}
        {!reduce && (
          <g>
            <rect x="70" y="0" width="280" height="3" fill="url(#coreEdge)" opacity="0.55">
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0 70; 0 340; 0 70"
                dur="5s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0;0.65;0"
                dur="5s"
                repeatCount="indefinite"
              />
            </rect>
          </g>
        )}
      </svg>

      {/* Beam sweeps */}
      {!reduce && (
        <>
          <div className="hero-beam absolute inset-y-[20%] left-0 w-1/2 bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
          <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,transparent_42%,rgba(5,11,24,0.55)_78%)]" />
        </>
      )}
    </div>
  );
}
