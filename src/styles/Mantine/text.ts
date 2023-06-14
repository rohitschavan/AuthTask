import {
  CSSObject,
  ContextStylesParams,
  MantineTheme,
  rem,
} from '@mantine/core'

const textSizes: Record<
  PropertyKey,
  (
    theme: MantineTheme,
    params: any,
    context: ContextStylesParams
  ) => Record<string, CSSObject>
> = {
  xs: (theme) => ({
    root: {
      lineHeight: rem(17),
      fontSize: theme.fontSizes.xs,
    },
  }),
  sm: (theme) => ({
    root: {
      lineHeight: rem(19),
      fontSize: theme.fontSizes.sm,
    },
  }),
  md: (theme) => ({
    root: {
      lineHeight: rem(24),
      fontSize: theme.fontSizes.md,
    },
  }),
  lg: (theme) => ({
    root: {
      lineHeight: rem(29),
      fontSize: theme.fontSizes.lg,
    },
  }),
  xl: (theme) => ({
    root: {
      lineHeight: rem(40),
      fontSize: theme.fontSizes.xl,
    },
  }),
  xxl: (theme) => ({
    root: {
      lineHeight: rem(40),
      fontSize: theme.fontSizes.xxl,
      color: theme.colors.gray[9],
      fontWeight: theme.other.fontWeight.normal
    },
  }),
}

const textProperties = {
  sizes: textSizes,
}

export default textProperties
