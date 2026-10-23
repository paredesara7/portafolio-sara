import { useCallback, useEffect, useRef, useState } from 'react'

const W = 600
const H = 180
const GROUND = 130
const SIZE = 32
const OBSTACLE = 28

type Status = 'idle' | 'playing' | 'over'

const initialState = () => ({
  y: GROUND,
  vy: 0,
  obstacles: [] as number[],
  nextGap: 300,
  speed: 6,
  frames: 0,
  score: 0,
})

export default function BugRunner() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const statusRef = useRef<Status>('idle')
  const game = useRef(initialState())
  const [score, setScore] = useState(0)
  const [best, setBest] = useState(0)

  const setStatus = (status: Status) => {
    statusRef.current = status
  }

  const jump = useCallback(() => {
    if (statusRef.current !== 'playing') {
      game.current = initialState()
      setScore(0)
      setStatus('playing')
      return
    }

    if (game.current.y >= GROUND) game.current.vy = -12
  }, [])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.code === 'Space' || event.code === 'ArrowUp') {
        event.preventDefault()
        jump()
      }
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [jump])

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!ctx) return

    let raf = 0

    const loop = () => {
      const state = game.current

      if (statusRef.current === 'playing') {
        state.frames++
        state.vy += 0.7
        state.y = Math.min(GROUND, state.y + state.vy)
        if (state.y >= GROUND) state.vy = 0

        state.speed = 6 + Math.floor(state.score / 100) * 0.5
        state.obstacles = state.obstacles
          .map((x) => x - state.speed)
          .filter((x) => x > -OBSTACLE)

        const last = state.obstacles[state.obstacles.length - 1]
        if (last === undefined || W - last > state.nextGap) {
          state.obstacles.push(W)
          state.nextGap = 260 + Math.random() * 240
        }

        const hit = state.obstacles.some(
          (x) =>
            x < 50 + SIZE - 8 &&
            x + OBSTACLE - 8 > 50 &&
            state.y > GROUND - 20,
        )
        if (hit) {
          setStatus('over')
          setBest((currentBest) => Math.max(currentBest, state.score))
        }

        const newScore = Math.floor(state.frames / 6)
        if (newScore !== state.score) {
          state.score = newScore
          setScore(newScore)
        }
      }

      ctx.clearRect(0, 0, W, H)
      ctx.strokeStyle = '#c4b5fd'
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.moveTo(0, GROUND + SIZE)
      ctx.lineTo(W, GROUND + SIZE)
      ctx.stroke()

      ctx.textBaseline = 'top'
      ctx.font = `${SIZE}px serif`
      ctx.fillText('🕵️', 50, state.y)
      ctx.font = `${OBSTACLE}px serif`
      state.obstacles.forEach((x) => ctx.fillText('🐛', x, GROUND + 4))

      ctx.fillStyle = '#e9d5ff'
      ctx.font = '16px sans-serif'
      ctx.textAlign = 'center'
      if (statusRef.current === 'idle') {
        ctx.fillText('Tocá o presioná espacio para empezar', W / 2, 50)
      } else if (statusRef.current === 'over') {
        ctx.fillText('¡Bug encontrado! Tocá o espacio para reintentar', W / 2, 50)
      }
      ctx.textAlign = 'start'

      raf = requestAnimationFrame(loop)
    }

    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <section className="mx-auto w-full max-w-[640px] px-4 py-10 text-center">
      <h2 className="mb-2 text-3xl font-bold text-purple-300">En espera</h2>
      <p className="mb-4 text-purple-100/80">
        Esquivá los 🐛, tocá el juego o presioná espacio para saltar.
      </p>
      <canvas
        ref={canvasRef}
        width={W}
        height={H}
        onClick={jump}
        onTouchStart={(event) => {
          event.preventDefault()
          jump()
        }}
        className="w-full cursor-pointer rounded-xl border border-purple-500/40 bg-purple-950/40"
        aria-label="Juego para esquivar bugs. Toca o presiona espacio para saltar."
      />
      <p className="mt-3 text-sm text-purple-200">
        Puntos: {score} · Récord: {best}
      </p>
    </section>
  )
}
