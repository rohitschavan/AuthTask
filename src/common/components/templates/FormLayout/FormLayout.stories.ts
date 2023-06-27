import type { Meta, StoryObj } from '@storybook/react'
import './FormLayout.scss'

import FormLayout from './FormLayout'

const meta: Meta<typeof FormLayout> = {
  title: 'Template/FormLayout',
  component: FormLayout,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },

  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof FormLayout>


export const adminLogin: Story = {

};
