import * as ChechboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'

export interface CheckboxProps {}

export function Checkbox() {
  return (
    <ChechboxPrimitive.Root className="h-6 w-6 p-[2px] bg-gray-800 rounded">
      <ChechboxPrimitive.Indicator asChild>
        <Check weight="bold" className="w-5 h-5 text-cyan-500" />
      </ChechboxPrimitive.Indicator>
    </ChechboxPrimitive.Root>
  )
}
