"use client"

import { useEffect, useId, useRef } from "react"
import { animate, createScope } from "animejs"
import classes from "./circuit-board.module.css"

// Shared geometry keeps the permanent copper and moving current exactly aligned.
const traces = [
  { d: "M48 120H88L128 160V188H160", x: 48, y: 120 },
  { d: "M48 212H160", x: 48, y: 212 },
  { d: "M72 308H100L136 272V236H160", x: 72, y: 308 },
  { d: "M144 64V100L184 140V164", x: 144, y: 64 },
  { d: "M232 64V164", x: 232, y: 64 },
  { d: "M280 188H304L352 140H384", x: 384, y: 140 },
  { d: "M280 212H360V260H384", x: 384, y: 260 },
  { d: "M280 236H304L336 268V308H384", x: 384, y: 308 },
  { d: "M256 276V300L304 348H360V372", x: 360, y: 372 },
  { d: "M208 276V356H160L144 372H104", x: 104, y: 372 },
]

const pinPositions = [184, 208, 232, 256]
const sidePinPositions = [188, 212, 236, 252]

export function CircuitBoard() {
  const root = useRef<HTMLDivElement>(null)
  const gridId = useId()

  useEffect(() => {
    const element = root.current
    if (!element) return

    const scope = createScope({
      root,
      mediaQueries: { reducedMotion: "(prefers-reduced-motion: reduce)" },
    }).add((self) => {
      if (self?.matches.reducedMotion) return

      const pulses = element.querySelectorAll<SVGPathElement>(
        `.${classes.current}`
      )
      const animations = Array.from(pulses, (pulse, index) => {
        // Normalize the loop, but preserve the same pulse length and speed
        // across short and long traces. A full dash period loops seamlessly.
        const length = pulse.getTotalLength()
        const dash = (22 / length) * 1000
        const dashArray = `${dash} ${1000 - dash}`
        const phase = -index * 137

        return animate(pulse, {
          strokeDasharray: [dashArray, dashArray],
          strokeDashoffset: [phase, phase - 1000],
          duration: (length / 55) * 1000,
          ease: "linear",
          loop: true,
          autoplay: false,
        })
      })

      const observer = new IntersectionObserver(([entry]) => {
        animations.forEach((animation) => {
          if (entry.isIntersecting) animation.resume()
          else animation.pause()
        })
      })
      observer.observe(element)

      return () => observer.disconnect()
    })

    return () => scope.revert()
  }, [])

  return (
    <div ref={root} className={classes.board} aria-hidden="true">
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
            01 / Learning by building
          </text>
        </g>

        {/* This layer is always fully drawn, including before hydration. */}
        <g className={classes.traces}>
          {traces.map(({ d }) => (
            <path key={d} d={d} />
          ))}
          <path d="M208 164V124L184 100V84M256 164V132L288 100H344M160 252H112L88 276H48M184 276V324L160 348H72M232 276V324L248 340V380M280 252H288L312 276V332" />
        </g>

        {/* Only these short dashes move; the schematic never gets erased. */}
        <g className={classes.currents}>
          {traces.map(({ d }, index) => (
            <path
              key={d}
              d={d}
              pathLength={1000}
              strokeDasharray="70 930"
              strokeDashoffset={-index * 137}
              className={classes.current}
            />
          ))}
        </g>

        <g className={classes.pads}>
          {traces.map(({ x, y }) => (
            <g key={`${x}-${y}`}>
              <circle cx={x} cy={y} r="5" />
              <circle cx={x} cy={y} r="1.5" className={classes.padCenter} />
            </g>
          ))}
          <circle cx="184" cy="84" r="3" />
          <circle cx="344" cy="100" r="3" />
          <circle cx="48" cy="276" r="3" />
          <circle cx="72" cy="348" r="3" />
          <circle cx="248" cy="380" r="3" />
        </g>

        <g className={classes.pins}>
          {pinPositions.map((x) => (
            <path key={x} d={`M${x} 152v12M${x} 276v12`} />
          ))}
          {sidePinPositions.map((y) => (
            <path key={y} d={`M148 ${y}h12M280 ${y}h12`} />
          ))}
        </g>

        <rect
          x="160"
          y="164"
          width="120"
          height="112"
          rx="8"
          className={classes.chip}
        />
        <rect
          x="168"
          y="172"
          width="104"
          height="96"
          rx="4"
          className={classes.chipInset}
        />
        <circle cx="178" cy="182" r="2" className={classes.orientationDot} />
        <path
          className={classes.chipMark}
          d="m204 197-6 6 6 6m32-12 6 6-6 6m-12-15-8 18"
        />
        <text x="220" y="235" textAnchor="middle" className={classes.chipTitle}>
          CORE
        </text>
        <text x="220" y="253" textAnchor="middle" className={classes.chipLabel}>
          U1 · FPGA
        </text>

        {/* Silkscreen details and small, recognizable component symbols. */}
        <g className={classes.components}>
          <path d="M232 92v8m-5 0h10v24h-10zm5 24v8" />
          <rect x="84" y="202" width="11" height="20" stroke="none" />
          <path d="M78 212h8m0-7v14m7-14v14m0-7h8" />
          <path d="M312 316v16m-10 0h20m-16 5h12m-8 5h4" />
          <rect x="354" y="198" width="12" height="24" rx="2" />
        </g>
        <rect
          x="356"
          y="205"
          width="8"
          height="10"
          rx="2"
          className={classes.led}
        />

        <g className={classes.labels}>
          <text x="42" y="103">
            IN
          </text>
          <text x="242" y="77">
            3V3
          </text>
          <text x="244" y="116">
            R1
          </text>
          <text x="78" y="195">
            C1
          </text>
          <text x="367" y="188">
            D1
          </text>
          <text x="349" y="128">
            OUT
          </text>
          <text x="76" y="393">
            GND
          </text>
        </g>

        <circle cx="304" cy="72" r="3" className={classes.led} />
        <text x="315" y="75" className={classes.labels}>
          SYS / OK
        </text>
      </svg>
    </div>
  )
}
