import { Box, BoxProps } from '@/styled'

export const PageRowLayout = (props: BoxProps) => {
  return (
    <Box
      pl={{
        base: '8px',
        // 2 * SIDEBAR_GUTTER + COLLAPSED_SIDEBAR_WIDTH
        md: '96px',
        // 2 * SIDEBAR_GUTTER + COLLAPSED_SIDEBAR_WIDTH + 50
        lg: '146px',
        // 2 * SIDEBAR_GUTTER + COLLAPSED_SIDEBAR_WIDTH + 100
        xl: '196px',
        // 2 * SIDEBAR_GUTTER + EXPANDED_SIDEBAR_WIDTH + 200
        '2xl': '496px'
      }}
      pr={{
        base: '8px',
        // SIDEBAR_GUTTER
        md: '8px',
        // SIDEBAR_GUTTER + 50
        lg: '58px',
        // SIDEBAR_GUTTER + 100
        xl: '108px',
        // SIDEBAR_GUTTER + 200
        '2xl': '208px'
      }}
      {...props}
    >
      {props.children}
    </Box>
  )
}
