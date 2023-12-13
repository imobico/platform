import { Box } from '@/styled'

import { PageRowLayout, PageRowLayoutProps } from '../PageRowLayout'

export interface PageHeaderLayoutProps extends PageRowLayoutProps {}

export const PageHeaderLayout = (props: PageHeaderLayoutProps) => {
  return (
    <PageRowLayout
      pt={12}
      pb={32}
      mb={-16}
      background="conic-gradient(from -60deg at 50% calc(100%/3),token(colors.trusty.11) 0 120deg,#0000 0),
        conic-gradient(from 120deg at 50% calc(200%/3),token(colors.trusty.11) 0 120deg,#0000 0),
        conic-gradient(from  60deg at calc(200%/3),token(colors.trusty.11) 60deg,token(colors.trusty.12) 0 120deg,#0000 0),
        conic-gradient(from 180deg at calc(100%/3),token(colors.trusty.10) 60deg,token(colors.trusty.11) 0 120deg,#0000 0),
        linear-gradient(90deg,token(colors.trusty.10) calc(100%/6),token(colors.trusty.12) 0 50%,
        token(colors.trusty.10) 0 calc(500%/6), token(colors.trusty.12) 0)"
      backgroundSize="132px 76px"
      {...props}
    >
      <Box width="100%" px={10} animationName="fadeIn" animationDuration="0.8s">
        {props.children}
      </Box>
    </PageRowLayout>
  )
}
