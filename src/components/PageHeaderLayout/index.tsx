import Image from 'next/image'

import { Box } from '@/styled'

import { PageRowLayout, PageRowLayoutProps } from '../PageRowLayout'

export interface PageHeaderLayoutProps extends PageRowLayoutProps {}

export const PageHeaderLayout = (props: PageHeaderLayoutProps) => {
  return (
    <PageRowLayout
      position="relative"
      pt={10}
      pb={36}
      mb={-24}
      // background="conic-gradient(from -60deg at 50% calc(100%/3),token(colors.trusty.11) 0 120deg,#0000 0),
      //   conic-gradient(from 120deg at 50% calc(200%/3),token(colors.trusty.11) 0 120deg,#0000 0),
      //   conic-gradient(from  60deg at calc(200%/3),token(colors.trusty.11) 60deg,token(colors.trusty.12) 0 120deg,#0000 0),
      //   conic-gradient(from 180deg at calc(100%/3),token(colors.trusty.10) 60deg,token(colors.trusty.11) 0 120deg,#0000 0),
      //   linear-gradient(90deg,token(colors.trusty.10) calc(100%/6),token(colors.trusty.12) 0 50%,
      //   token(colors.trusty.10) 0 calc(500%/6), token(colors.trusty.12) 0)"
      // backgroundSize="132px 76px"
      bg="trusty.12"
      {...props}
    >
      <Box
        width="60rem"
        height="60rem"
        position="absolute"
        top="50%"
        right="50%"
        transform="translate(88%,-58%)"
        pointerEvents="none"
        opacity={0.8}
      >
        <Image
          priority
          src="/app-header-bg.svg"
          alt="Imobi Test"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />
      </Box>
      <Box width="100%" px={10} animationName="fadeIn" animationDuration="0.8s">
        {props.children}
      </Box>
    </PageRowLayout>
  )
}
