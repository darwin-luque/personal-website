"use client"

import { useEffect, useId, useRef } from "react"
import { createScope, createTimeline } from "animejs"
import classes from "./expanding-map.module.css"

const origin = { x: 104, y: 306 }
const discoveries = [
  {
    x: 214,
    y: 246,
    path: "M104 306L214 246",
    branches:
      "M214 246C206 219 178 215 170 192S168 164 166 152M214 246C235 254 269 261 274 284Q278 302 276 314",
    ideas: [
      { x: 166, y: 152 },
      { x: 276, y: 314 },
    ],
    revealAt: 900,
    travelAt: 2200,
  },
  {
    x: 302,
    y: 174,
    path: "M214 246L302 174",
    branches:
      "M302 174C319 154 350 158 358 136Q363 120 360 104M302 174C324 183 337 207 360 212Q379 216 374 242M302 174C288 151 258 150 252 125Q246 99 250 76",
    ideas: [
      { x: 360, y: 104 },
      { x: 374, y: 242 },
      { x: 250, y: 76 },
    ],
    revealAt: 5800,
    travelAt: 7100,
  },
]

const standingLegs = "M-5 -18L-8 -8L-11 0M5 -18L9 -8L13 0"
const steppingLegs = "M-5 -18L1 -8L10 0M5 -18L-4 -9L-13 -2"

export function ExpandingMap() {
  const root = useRef<HTMLDivElement>(null)
  const id = useId()
  const gridId = `${id}-grid`
  const lightId = `${id}-light`

  useEffect(() => {
    const element = root.current
    if (!element) return

    const scope = createScope({
      root,
      mediaQueries: { reducedMotion: "(prefers-reduced-motion: reduce)" },
    }).add((self) => {
      // Resting markup shows the explored map with open paths still ahead.
      if (self?.matches.reducedMotion) return

      const sequence = createTimeline({
        autoplay: false,
        loop: true,
        defaults: { duration: 700, ease: "inOutSine" },
      })
        .add('[data-part="map-scene"]', { opacity: [0, 1] }, 0)
        .add(
          '[data-part="horizon"]',
          { opacity: [0, 0.3], duration: 1600 },
          9900
        )
        .add('[data-part="map-scene"]', { opacity: 0 }, 13300)

      discoveries.forEach((discovery, index) => {
        const { x, y, revealAt, travelAt } = discovery
        const from = index === 0 ? origin : discoveries[index - 1]
        const arriveAt = travelAt + 2200

        sequence
          .add(`[data-beacon="${index}"]`, { opacity: [0, 1] }, revealAt)
          .add(
            `[data-route="${index}"]`,
            { strokeDashoffset: [1000, 0], duration: 1100 },
            revealAt + 350
          )
          .add(
            '[data-part="explorer"]',
            {
              transform:
                index === 0
                  ? [`translate(${from.x} ${from.y})`, `translate(${x} ${y})`]
                  : `translate(${x} ${y})`,
              duration: 2200,
            },
            travelAt
          )
          .add(
            '[data-part="legs"]',
            {
              d: [
                // Explicit endpoints preserve the SVG attribute on scope revert.
                { from: standingLegs, to: steppingLegs },
                { from: steppingLegs, to: standingLegs },
                { from: standingLegs, to: steppingLegs },
                { from: steppingLegs, to: standingLegs },
              ],
              duration: 2200,
            },
            travelAt
          )
          .add(`[data-frontier="${index}"]`, { opacity: [0, 1] }, arriveAt)
          .add(
            '[data-part="explorer-pose"]',
            {
              transform: [
                { from: "rotate(0 0 -18)", to: "rotate(-3 0 -18)" },
                { from: "rotate(-3 0 -18)", to: "rotate(0 0 -18)" },
              ],
              duration: 850,
              ease: "inOutSine",
            },
            arriveAt - 150
          )
          .add(
            `[data-branches="${index}"]`,
            { strokeDashoffset: [1000, 0], duration: 1100 },
            arriveAt
          )
          .add(`[data-ideas="${index}"]`, { opacity: [0, 1] }, arriveAt + 650)
      })

      // Render delayed children's initial values before visibility starts playback.
      sequence.init()

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) sequence.resume()
          else sequence.pause()
        },
        { threshold: 0.15 }
      )
      observer.observe(element)
      return () => observer.disconnect()
    })

    return () => scope.revert()
  }, [])

  return (
    <div ref={root} className={classes.map} aria-hidden="true">
      <svg viewBox="0 0 432 432" fill="none" focusable="false">
        <defs>
          <pattern
            id={gridId}
            width="16"
            height="16"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="8" cy="8" r="0.7" className={classes.gridDot} />
          </pattern>
          <radialGradient id={lightId}>
            <stop stopColor="currentColor" stopOpacity="0.07" />
            <stop offset="1" stopColor="currentColor" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect x="24" y="40" width="384" height="352" fill={`url(#${gridId})`} />
        <path
          className={classes.frame}
          d="M24 64V40H48M384 40H408V64M408 368V392H384M48 392H24V368"
        />
        <g className={classes.annotations}>
          <text x="24" y="24">
            03 / Following my curiosity
          </text>
        </g>

        <g className={classes.contours}>
          <path d="M42 190C76 144 114 170 136 126S190 66 206 52M42 211C100 144 124 199 158 138S194 91 214 62" />
          <path d="M196 340C222 304 240 351 312 328S370 272 400 284M208 351C240 326 258 369 326 341S375 307 400 300" />
        </g>
        <text x="56" y="84" className={classes.heading}>
          Still exploring
        </text>
        <g className={classes.compass} transform="translate(72 126)">
          <circle r="16" />
          <path d="M0 -22V-18M22 0H18M0 22V18M-22 0H-18M-5 7L0 -11L5 7L0 4Z" />
        </g>

        <g data-part="map-scene">
          <g className={classes.unknown}>
            {discoveries.map(({ path, branches }) => (
              <path key={path} d={`${path}${branches}`} />
            ))}
            <path d="M166 152Q158 121 194 104M276 314Q288 330 310 334" />
          </g>
          <g className={classes.known}>
            <path d="M42 338Q75 329 104 306M104 306C94 292 69 300 65 279Q62 260 66 240" />
            <circle cx="66" cy="240" r="4" />
            <circle cx={origin.x} cy={origin.y} r="6" />
          </g>

          {discoveries.map(({ x, y, path, branches, ideas }, index) => (
            <g key={path}>
              <path
                data-route={index}
                d={path}
                className={classes.route}
                pathLength="1000"
                strokeDasharray="1000"
                strokeDashoffset="0"
              />
              <g data-beacon={index}>
                <circle cx={x} cy={y} r="44" fill={`url(#${lightId})`} />
                <circle cx={x} cy={y} r="12" className={classes.halo} />
                <circle cx={x} cy={y} r="5" className={classes.node} />
              </g>
              <g data-frontier={index}>
                <path
                  data-branches={index}
                  d={branches}
                  className={classes.branch}
                  pathLength="1000"
                  strokeDasharray="1000"
                  strokeDashoffset="0"
                />
                <g data-ideas={index}>
                  {ideas.map((idea) => (
                    <g key={`${idea.x}-${idea.y}`} className={classes.idea}>
                      <circle cx={idea.x} cy={idea.y} r="9" />
                      <path
                        d={`M${idea.x - 3} ${idea.y}H${idea.x + 3}M${idea.x} ${idea.y - 3}V${idea.y + 3}`}
                      />
                    </g>
                  ))}
                </g>
              </g>
            </g>
          ))}

          <g data-part="horizon" className={classes.unknown}>
            <path d="M360 104Q372 88 394 80M374 242Q383 253 398 258M250 76Q253 62 270 54" />
            <path d="M390 66H398M394 62V70M390 276H398M394 272V280" />
          </g>

          <g data-part="explorer" transform="translate(302 174)">
            <ellipse cy="3" rx="21" ry="5" className={classes.shadow} />
            <g data-part="explorer-pose" transform="rotate(0 0 -18)">
              <g className={classes.person}>
                <path
                  data-part="legs"
                  d={standingLegs}
                  className={classes.limbs}
                />
                <rect
                  x="-19"
                  y="-38"
                  width="9"
                  height="23"
                  rx="4"
                  className={classes.backpack}
                />
                <path d="M-7 -42Q-1 -39 5 -41Q12 -40 13 -31L11 -18H-12L-13 -30Q-13 -40 -7 -42Z" />
                <circle cy="-56" r="10" />
                <path
                  d="M-9 -59Q-6 -69 2 -66Q9 -65 10 -59L3 -61L-1 -58Z"
                  className={classes.hair}
                />
                <path d="M4 -55H5M5 -49H8" className={classes.face} />
                <path
                  d="M6 -35Q12 -26 16 -26L24 -32M-10 -33Q-16 -28 -14 -22"
                  className={classes.limbs}
                />
              </g>
              <path
                className={classes.handMap}
                d="M17 -42L25 -39L34 -43V-29L25 -25L17 -28ZM25 -39V-25"
              />
            </g>
          </g>
          <g className={classes.mapLabels}>
            <text x="91" y="332">
              So far
            </text>
            <text x="312" y="202">
              Next?
            </text>
          </g>
        </g>

        <path className={classes.divider} d="M56 356H376" />
        <g className={classes.caption}>
          <text x="56" y="378">
            Explore
          </text>
          <text x="216" y="378" textAnchor="middle">
            Connect
          </text>
          <text x="376" y="378" textAnchor="end">
            Keep going
          </text>
        </g>
      </svg>
    </div>
  )
}
