"use client"

import { useEffect, useId, useRef } from "react"
import { createScope, createTimeline } from "animejs"
import classes from "./leadership-journey.module.css"

// Matching commands let the two pages unfold into a board without a tangled
// intermediate silhouette. The same person and gesture anchor both scenes.
const shapes = {
  leftPage: {
    learn: "M180 188C194 184 206 188 218 196L218 254C206 246 194 244 180 246Z",
    guide: "M216 116C236 116 256 116 276 116L276 212C256 212 236 212 216 212Z",
  },
  rightPage: {
    learn: "M218 196C230 188 242 184 256 188L256 246C242 244 230 246 218 254Z",
    guide: "M276 116C296 116 316 116 336 116L336 212C316 212 296 212 276 212Z",
  },
  spine: {
    learn: "M218 196L218 254",
    guide: "M276 116L276 212",
  },
  arm: {
    learn: "M166 202C178 209 177 221 183 224L196 228",
    guide: "M166 202C182 207 188 188 196 178L214 160",
  },
  supportingArm: {
    learn: "M133 202L121 224Q117 234 130 236L180 236",
    guide: "M133 202L123 224Q122 234 132 236L145 236",
  },
}

const teammates = [
  {
    x: 88,
    path: "M152 248C149 268 126 276 107 280S88 292 88 301",
    body: "M-18 31L-16 20Q-13 10 0 11Q13 12 16 23L18 31Z",
    hair: "M-9 -3Q-7 -13 1 -10Q7 -12 10 -3M-8 -5L-4 -8",
    tilt: -5,
    delay: 0,
  },
  {
    x: 224,
    path: "M152 248C157 274 184 279 206 286Q224 290 224 301",
    body: "M-16 32V23Q-15 10 -2 10Q12 9 18 23L20 32Z",
    hair: "M-10 0Q-13 -12 -2 -12Q10 -13 11 -1L12 6M-10 0L-11 7",
    tilt: 4,
    delay: 260,
  },
  {
    x: 360,
    path: "M152 248C176 265 243 261 298 271S354 284 360 301",
    body: "M-19 31L-17 21Q-13 13 1 12Q14 12 16 24L17 31Z",
    hair: "M-9 -4Q-7 -12 2 -10L8 -6M-7 -6Q0 -5 4 -9",
    tilt: -3,
    delay: 610,
  },
]

export function LeadershipJourney() {
  const root = useRef<HTMLDivElement>(null)
  const gridId = useId()

  useEffect(() => {
    const element = root.current
    if (!element) return

    const scope = createScope({
      root,
      mediaQueries: { reducedMotion: "(prefers-reduced-motion: reduce)" },
    }).add((self) => {
      // The SVG's resting state is the complete mentor-and-team illustration.
      if (self?.matches.reducedMotion) return

      const sequence = createTimeline({
        autoplay: false,
        loop: true,
        defaults: { ease: "inOutCubic", duration: 600 },
      })
        .add('[data-part="sequence"]', { opacity: [0, 1] }, 0)
        .add('[data-part="learn-label"]', { opacity: [1, 0] }, 2400)
        .add('[data-part="guide-label"]', { opacity: [0, 1] }, 3200)
        .add(
          '[data-part="book-details"]',
          { opacity: [1, 0], duration: 350 },
          2250
        )
        .add('[data-part="incoming"]', { opacity: [1, 0] }, 2250)
        .add('[data-part="board-details"]', { opacity: [0, 1] }, 3800)
        .add('[data-part="connections"]', { opacity: [0, 1] }, 4700)
        .add('[data-part="learn-step"]', { opacity: [1, 0.35] }, 2600)
        .add('[data-part="guide-step"]', { opacity: [0.35, 1] }, 2600)
        .add('[data-part="guide-step"]', { opacity: 0.35 }, 5200)
        .add('[data-part="empower-step"]', { opacity: [0.35, 1] }, 5200)
        .add('[data-part="outgoing"]', { opacity: [0, 1], duration: 300 }, 5400)
        // Hold the shared-knowledge scene, then reset behind a gentle fade.
        .add('[data-part="sequence"]', { opacity: 0, duration: 600 }, 11400)

      Object.entries(shapes).forEach(([name, shape]) => {
        sequence.add(
          `[data-morph="${name}"]`,
          {
            d: [shape.learn, shape.guide],
            duration: 1500,
          },
          2600
        )
      })
      sequence.add('[data-morph="spine"]', { opacity: [1, 0] }, 3300)

      // Each dash starts and ends outside its path: light arrives, then leaves
      // the mentor for the team. All timing belongs to this one paused timeline.
      for (const at of [500, 1500]) {
        sequence.add(
          '[data-part="incoming-pulse"]',
          {
            strokeDashoffset: [80, -1000],
            duration: 900,
            ease: "linear",
          },
          at
        )
      }

      teammates.forEach(({ delay }, index) => {
        sequence.add(
          `[data-teammate="${index}"]`,
          {
            opacity: [0, 1],
          },
          4900 + delay
        )

        for (const at of [5600, 8200]) {
          sequence.add(
            `[data-pulse="${index}"]`,
            {
              strokeDashoffset: [80, -1000],
              duration: 1400,
              ease: "linear",
            },
            at + delay
          )
          sequence.add(
            `[data-spark="${index}"]`,
            {
              opacity: [0, 1, 0],
              duration: 1000,
            },
            at + 1150 + delay
          )
        }
      })

      // A paused timeline needs an explicit initial render, including children
      // that start later, before the observer begins playback.
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
    <div ref={root} className={classes.journey} aria-hidden="true">
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
        </defs>
        <rect x="24" y="40" width="384" height="352" fill={`url(#${gridId})`} />
        <path
          className={classes.frame}
          d="M24 64V40H48M384 40H408V64M408 368V392H384M48 392H24V368"
        />
        <g className={classes.annotations}>
          <text x="24" y="24">
            02 / Sharing what I learn
          </text>
        </g>
        <path
          className={classes.orbit}
          d="M72 238V206A136 136 0 0 1 208 70H352"
        />
        <path
          className={classes.registration}
          d="M66 238H78M352 64V76M146 142H158"
        />

        <g data-part="sequence">
          <g className={classes.sceneLabel}>
            <text x="88" y="100" data-part="learn-label" opacity="0">
              Taking it in
            </text>
            <text x="88" y="100" data-part="guide-label">
              Working it out together
            </text>
          </g>

          <g data-part="connections" className={classes.connections}>
            {teammates.map(({ path }) => (
              <path key={path} d={path} />
            ))}
          </g>
          <g data-part="outgoing" className={classes.pulses} opacity="0">
            {teammates.map(({ path }, index) => (
              <path
                key={path}
                d={path}
                data-pulse={index}
                pathLength="1000"
                strokeDasharray="65 1065"
                strokeDashoffset="80"
              />
            ))}
          </g>

          <g className={classes.person}>
            <path d="M144 188Q153 191 160 188C171 189 176 200 178 212L176 248H127L126 212C127 200 132 189 144 188Z" />
            <circle cx="152" cy="166" r="16" />
            <path
              data-morph="supportingArm"
              className={classes.gesture}
              d={shapes.supportingArm.guide}
            />
          </g>
          <path
            className={classes.hair}
            d="M137 163Q140 145 154 150Q164 151 167 160Q155 163 149 155Q145 163 137 163Z"
          />
          <path
            className={classes.face}
            d="M155 168H156M157 176Q160 178 163 175"
          />

          <g className={classes.surface}>
            <path data-morph="leftPage" d={shapes.leftPage.guide} />
            <path data-morph="rightPage" d={shapes.rightPage.guide} />
          </g>
          <path
            data-morph="spine"
            d={shapes.spine.guide}
            className={classes.detail}
            opacity="0"
          />
          <g
            data-part="book-details"
            className={classes.bookDetails}
            opacity="0"
          >
            <path d="M190 202Q201 202 209 207M190 213Q201 213 209 218M190 224Q201 224 207 229M227 207Q235 202 246 202M227 218Q235 213 246 213M227 229Q235 224 241 224" />
          </g>
          <g data-part="board-details">
            <rect
              x="218"
              y="118"
              width="116"
              height="92"
              className={classes.boardInterior}
            />
            <path
              className={classes.boardFrame}
              d="M216 116H336V212H216ZM210 217H342M276 218V239M259 239H293"
            />
            <text x="230" y="135" className={classes.boardLabel}>
              An idea to try
            </text>
            <path
              className={classes.diagram}
              d="M238 168Q252 171 262 161T306 153M274 156Q271 172 277 185Q291 189 306 186"
            />
            <g className={classes.diagramNodes}>
              <rect x="232" y="162" width="12" height="12" rx="2" />
              <rect x="302" y="146" width="12" height="12" rx="2" />
              <rect x="302" y="181" width="12" height="12" rx="2" />
            </g>
          </g>
          <path
            data-morph="arm"
            d={shapes.arm.guide}
            className={classes.gesture}
          />
          <circle cx="152" cy="248" r="3" className={classes.junction} />

          <g data-part="incoming" opacity="0">
            <path
              className={classes.connections}
              d="M340 266H294Q278 266 278 250V242Q278 228 264 228H256"
            />
            <path
              data-part="incoming-pulse"
              className={classes.pulses}
              d="M340 266H294Q278 266 278 250V242Q278 228 264 228H256"
              pathLength="1000"
              strokeDasharray="65 1065"
              strokeDashoffset="80"
            />
            <circle cx="340" cy="266" r="5" className={classes.source} />
            <text
              x="340"
              y="287"
              textAnchor="end"
              className={classes.boardLabel}
            >
              A new idea
            </text>
          </g>

          {teammates.map(({ x, body, hair, tilt }, index) => (
            <g key={x} data-teammate={index} className={classes.teammate}>
              <g transform={`translate(${x} 311)`}>
                <path d={body} />
                <g transform={`rotate(${tilt})`}>
                  <ellipse rx="9" ry="10" />
                  <path d={hair} className={classes.teammateHair} />
                </g>
              </g>
              <circle
                data-spark={index}
                cx={x}
                cy="311"
                r="16"
                className={classes.spark}
                opacity="0"
              />
            </g>
          ))}

          <path className={classes.stepTrack} d="M88 368H190M242 368H344" />
          {[
            { x: 64, part: "learn-step", label: "Learn", opacity: 0.35 },
            { x: 216, part: "guide-step", label: "Guide", opacity: 0.35 },
            { x: 368, part: "empower-step", label: "Encourage", opacity: 1 },
          ].map(({ x, part, label, opacity }) => (
            <g
              key={part}
              data-part={part}
              className={classes.step}
              opacity={opacity}
            >
              <text x={x} y="382" textAnchor="middle">
                {label}
              </text>
            </g>
          ))}
        </g>
      </svg>
    </div>
  )
}
