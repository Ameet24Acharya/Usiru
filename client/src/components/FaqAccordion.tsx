import { useEffect, useRef, useState } from 'react'

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  const [maxHeight, setMaxHeight] = useState(0)
  const ansRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    setMaxHeight(open ? (ansRef.current?.scrollHeight ?? 0) : 0)
  }, [open])

  return (
    <div className={`faq${open ? ' open' : ''}`}>
      <button aria-expanded={open} onClick={() => setOpen((o) => !o)}>
        <span>{q}</span>
        <span className="plus">+</span>
      </button>
      <div className="ans" ref={ansRef} style={{ maxHeight: `${maxHeight}px` }}>
        <p>{a}</p>
      </div>
    </div>
  )
}

export function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="faq-list">
      {items.map((item) => (
        <FaqItem key={item.q} q={item.q} a={item.a} />
      ))}
    </div>
  )
}
