import { Box, BoxProps } from '@/styled'

export interface PageRowLayoutProps extends BoxProps {}

export const PageRowLayout = (props: PageRowLayoutProps) => {
  return (
    <Box
      pl={{
        base: '8px',
        // 2 * SIDEBAR_GUTTER + COLLAPSED_SIDEBAR_WIDTH + 20
        md: '116px',
        // 2 * SIDEBAR_GUTTER + COLLAPSED_SIDEBAR_WIDTH + 50
        lg: '146px',
        // 2 * SIDEBAR_GUTTER + COLLAPSED_SIDEBAR_WIDTH + 100
        xl: '196px',
        // 2 * SIDEBAR_GUTTER + EXPANDED_SIDEBAR_WIDTH + 200
        '2xl': '496px'
      }}
      pr={{
        base: '8px',
        // SIDEBAR_GUTTER + 20
        md: '28px',
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
