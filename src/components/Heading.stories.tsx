import { Meta, StoryObj } from '@storybook/react'

import { Heading, HeadingProps } from './Heading'

export default {
  title: 'components/Heading',
  component: Heading,
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
} as Meta<HeadingProps>

export const Small: StoryObj<HeadingProps> = {
  args: {
    size: 'sm',
  },
}

export const Medium: StoryObj<HeadingProps> = {} // This value is default in props

export const Large: StoryObj<HeadingProps> = {
  args: {
    size: 'lg',
  },
}

export const CustomComponent: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: <h1>Heading with H1 tag</h1>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
}
