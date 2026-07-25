import type { ComponentPropsWithoutRef, ElementType } from 'react'
import { useReveal } from '../hooks/useReveal'

type RevealProps<T extends ElementType> = {
  as?: T
  className?: string
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'className'>

/** Wraps any element with the site's fade-up-on-scroll behaviour (`.reveal` / `.reveal.in`). */
export function Reveal<T extends ElementType = 'div'>({
  as,
  className = '',
  ...rest
}: RevealProps<T>) {
  const Tag = (as ?? 'div') as ElementType
  const { ref, visible } = useReveal()

  return (
    <Tag
      ref={ref}
      className={`reveal${visible ? ' in' : ''}${className ? ` ${className}` : ''}`}
      {...rest}
    />
  )
}
