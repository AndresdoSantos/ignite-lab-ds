import { Meta, StoryObj } from '@storybook/react'

import { Text, TextProps } from './Text'

export default {
  title: 'components/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis veniam alias rem cum debitis voluptatum eos tempore dolores dolorem voluptate, facere aut est dolor tempora fuga sunt! Rem, blanditiis culpa!',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Small: StoryObj<TextProps> = {
  args: {
    size: 'sm',
  },
}

export const Medium: StoryObj<TextProps> = {} // This value is default in props

export const Large: StoryObj<TextProps> = {
  args: {
    size: 'lg',
  },
}

export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: <p>Text with P tag</p>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
}
