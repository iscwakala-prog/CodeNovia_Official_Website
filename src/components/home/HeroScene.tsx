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

      {/* Centered logo */}
      <div className="pointer-events-none absolute inset-0 z-[2] flex items-center justify-center">
        <img
          src="/brand/codenovia-logo.png"
          alt=""
          className="h-[34%] w-[34%] max-w-[200px] object-contain drop-shadow-[0_0_40px_rgba(30,155,255,0.45)]"
          aria-hidden
        />
      </div>

      {/* Scan line */}
      {!reduce && (
        <svg
          viewBox="0 0 420 420"
          className="pointer-events-none absolute inset-0 z-[1] h-full w-full"
          aria-hidden
        >
          <defs>
            <linearGradient id="coreEdge" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7ad0ff" />
              <stop offset="50%" stopColor="#1e9bff" />
              <stop offset="100%" stopColor="#5ec4ff" />
            </linearGradient>
          </defs>
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
        </svg>
      )}

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
