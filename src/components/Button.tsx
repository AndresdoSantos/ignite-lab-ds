import { ReactNode } from 'react'
import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot'

export interface ButtonProps {
  children: ReactNode
  asChild?: boolean
}

export function Button({ children, asChild = false }: ButtonProps) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      className={clsx(
        'text-black text-sm font-semibold py-4 px-3 bg-cyan-500 rounded w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white',
      )}
    >
      {children}
    </Comp>
  )
}
