import { MantineThemeOverride, rem } from '@mantine/core'
import MantineColors from './colors'
import buttonVariants from './button'

export const theme: MantineThemeOverride = {
  focusRing: 'never',
  fontFamily: 'Lato-Light, sans-serif',
  headings: {
    fontFamily: 'Lato-Light',
    fontWeight: 700,
    sizes: {
      h1: {},
      h2: {},
      h3: {},
      h5: {},
      h6: {},
    },
  },
  colors: MantineColors,
  fontSizes: {
    xxs: rem(12),
    xs: rem(14),
    sm: rem(16),
    md: rem(20),
    lg: rem(24),
    xl: rem(48),
    xxl: rem(64),
  },
  components: {
    // Button: {
    //   variants: buttonVariants,
    // },
    Input: {
      variants: {},
    },
    Text: {},
  },
  radius: {
    xs: rem(6),
    md: rem(8),
    lg: rem(12),
  },
  spacing: {},
  shadows: {},
  breakpoints: {
    xs: rem(480),
    sm: rem(768),
    md: rem(1024),
    lg: rem(1184),
    xl: rem(1440),
  },
}
