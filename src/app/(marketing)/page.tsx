import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'

import { Box, Button, Center, H1, HStack, Strong, Text } from '@/ui'

const Highlights = dynamic(() => import('./components/Highlights'), {
  loading: () => <p>Carregando...</p>
})

// const Pricing = dynamic(() => import('./components/Pricing'), {
//   loading: () => <p>Carregando...</p>
// })

// const Integrations = dynamic(() => import('./components/Integrations'), {
//   loading: () => <p>Carregando...</p>
// })

export default function Home() {
  return (
    <>
      <Center width="100vw" flexDirection="column" overflow="hidden">
        <Center mt={{ base: 10, md: '20' }} flexDirection="column" px={{ base: 4, md: 12 }}>
          <H1
            fontSize={{ base: '4xl', md: '5xl' }}
            textAlign="center"
            lineHeight={1.2}
            mb={{ base: 4, md: 8 }}
            width="100vw"
            maxWidth="880px"
            px={{ base: 8, md: 12 }}
          >
            <Strong
              style={{
                paddingLeft: '10px',
                paddingRight: '10px',
                background:
                  'linear-gradient(360deg, rgba(209,226,255,1) 0%, rgba(209,226,255,1) 30%, rgba(209,226,255,0) 30%, rgba(255,255,255,0) 100%)'
              }}
              color="trusty"
            >
              O futuro da tecnologia
            </Strong>{' '}
            para{' '}
            <Strong
              style={{
                paddingLeft: '10px',
                paddingRight: '10px',
                background:
                  'linear-gradient(360deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.1) 30%, rgba(209,226,255,0) 30%, rgba(255,255,255,0) 100%)'
              }}
            >
              corretores
            </Strong>{' '}
            e{' '}
            <Strong
              style={{
                paddingLeft: '10px',
                paddingRight: '10px',
                background:
                  'linear-gradient(360deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.1) 30%, rgba(209,226,255,0) 30%, rgba(255,255,255,0) 100%)'
              }}
            >
              imobiliárias.
            </Strong>
            <br />
            Disponível hoje.
          </H1>
          <Text
            textAlign="center"
            fontSize={{ base: 'lg', md: 'xl' }}
            color="slate.11"
            maxWidth="780px"
            mb={{ base: 8, md: 12 }}
            px={{ base: 8, md: 12 }}
          >
            Crie seu site, gerencie seus imóveis, clientes/leads, marketing e muito mais. Tudo isso
            <strong> com um clique</strong> través de uma única plataforma e um único plano.
            <br />
            <Strong>Menos complicação. Mais resultados.</Strong>
          </Text>

          <HStack
            width="100%"
            gap={{ base: 4, md: 6 }}
            mb={{ base: 24, md: 16 }}
            flexDirection={{ base: 'column', md: 'row' }}
            alignItems="center"
            justifyContent="center"
          >
            <Box
              position="relative"
              width={{ base: '100%', md: 'auto' }}
              px={{ base: 8, md: 'unset' }}
            >
              <Link href="/cadastro">
                <Button
                  borderRadius="full"
                  size="2xl"
                  fontWeight="500"
                  width={{ base: '100%', md: 'auto' }}
                >
                  Faça um
                  <strong style={{ fontWeight: 700, marginLeft: '-6px' }}>teste grátis</strong>
                </Button>
              </Link>
              <Box
                display={{ base: 'none', md: 'block' }}
                position="absolute"
                left={{ base: '-100px', md: '-260px' }}
                transform={{ base: 'rotate(50deg)', md: 'none' }}
                bottom={{ base: '60px', md: '-60px' }}
                width={{ base: '160px', md: '260px' }}
              >
                <Image
                  src="/no-card-required.svg"
                  alt="Imobi Test"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                />
              </Box>
            </Box>
            <Box
              position="relative"
              width={{ base: '100%', md: 'unset' }}
              px={{ base: 8, md: 'unset' }}
            >
              <Link href="/entrar">
                <Button
                  borderRadius="full"
                  size="2xl"
                  variant="outline"
                  width={{ base: '100%', md: 'unset' }}
                >
                  Agende uma apresentação
                </Button>
              </Link>
            </Box>
          </HStack>

          <Center
            width="100vw"
            minHeight={{ base: '300px', md: '660px' }}
            overflow="hidden"
            position="relative"
            px="4"
            pt={12}
            pb={12}
          >
            <Box
              boxShadow="0 12px 36px 0 rgba(0,0,0,0.2)"
              borderRadius="2xl"
              overflow="hidden"
              width="800px"
              maxWidth="100vw"
            >
              <Image
                src="/floating-ui-center.jpg"
                alt="Imobi Test"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              />
            </Box>
            <Box
              boxShadow="-12px 12px 36px 0 rgba(0,0,0,0.2)"
              borderRadius="2xl"
              overflow="hidden"
              mb={{ base: '-80px', md: '-80px' }}
              position="absolute"
              width={{ base: '140px', md: '280px' }}
              ml={{ base: '-320px', md: '-860px' }}
            >
              <Image
                src="/floating-ui-left.jpg"
                alt="Imobi Test"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              />
            </Box>
            <Box
              boxShadow="12px 12px 36px 0 rgba(0,0,0,0.2)"
              borderRadius="2xl"
              overflow="hidden"
              position="absolute"
              width={{ base: '140px', md: '240px' }}
              mr={{ base: '-360px', md: '-840px' }}
            >
              <Image
                src="/floating-ui-right.jpg"
                alt="Imobi Test"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              />
            </Box>
          </Center>
        </Center>
      </Center>
      <Highlights />
      {/* <Integrations /> */}
      {/* <Pricing /> */}
    </>
  )
}

// TESTE AB de copy:

// import dynamic from 'next/dynamic'
// import Image from 'next/image'
// import Link from 'next/link'

// import { Box, Button, Center, H1, HStack, Strong, Text } from '@/ui'

// const Highlights = dynamic(() => import('./components/Highlights'), {
//   loading: () => <p>Carregando...</p>
// })

// // const Pricing = dynamic(() => import('./components/Pricing'), {
// //   loading: () => <p>Carregando...</p>
// // })

// // const Integrations = dynamic(() => import('./components/Integrations'), {
// //   loading: () => <p>Carregando...</p>
// // })

// export default function Home() {
//   return (
//     <>
//       <Center width="100vw" flexDirection="column" overflow="hidden">
//         <Center mt={{ base: 10, md: '20' }} flexDirection="column" px={{ base: 4, md: 12 }}>
//           <H1
//             fontSize={{ base: '4xl', md: '5xl' }}
//             textAlign="center"
//             lineHeight={1.2}
//             mb="8"
//             width="100vw"
//             maxWidth="880px"
//             px={{ base: 8, md: 12 }}
//           >
//             Tecnologia com{' '}
//             <Strong
//               style={{
//                 paddingLeft: '10px',
//                 paddingRight: '10px',
//                 background:
//                   'linear-gradient(360deg, rgba(209,226,255,1) 0%, rgba(209,226,255,1) 30%, rgba(209,226,255,0) 30%, rgba(255,255,255,0) 100%)'
//               }}
//               color="trusty.8"
//             >
//               resultados
//             </Strong>{' '}
//             e{' '}
//             <Strong
//               style={{
//                 paddingLeft: '10px',
//                 paddingRight: '10px',
//                 background:
//                   'linear-gradient(360deg, rgba(209,226,255,1) 0%, rgba(209,226,255,1) 30%, rgba(209,226,255,0) 30%, rgba(255,255,255,0) 100%)'
//               }}
//               color="trusty.8"
//             >
//               eficiência
//             </Strong>{' '}
//             para{' '}
//             <Strong
//               style={{
//                 paddingLeft: '10px',
//                 paddingRight: '10px',
//                 background:
//                   'linear-gradient(360deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.1) 30%, rgba(209,226,255,0) 30%, rgba(255,255,255,0) 100%)'
//               }}
//             >
//               imobiliárias
//             </Strong>{' '}
//             e{' '}
//             <Strong
//               style={{
//                 paddingLeft: '10px',
//                 paddingRight: '10px',
//                 background:
//                   'linear-gradient(360deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.1) 30%, rgba(209,226,255,0) 30%, rgba(255,255,255,0) 100%)'
//               }}
//             >
//               corretores
//             </Strong>
//             .
//           </H1>
//           <Text
//             textAlign="center"
//             fontSize={{ base: 'lg', md: 'xl' }}
//             color="slate.11"
//             maxWidth="780px"
//             mb={{ base: 8, md: 12 }}
//             px={{ base: 8, md: 12 }}
//           >
//             Crie seu site, gerencie seus imóveis, clientes/leads, marketing e muito mais através de
//             um único produto e um único plano. <Strong>Menos complicação. Mais resultados.</Strong>
//           </Text>

//           <HStack
//             width="100%"
//             gap={{ base: 4, md: 6 }}
//             mb={{ base: 24, md: 16 }}
//             flexDirection={{ base: 'column', md: 'row' }}
//             alignItems="center"
//             justifyContent="center"
//           >
//             <Box
//               position="relative"
//               width={{ base: '100%', md: 'auto' }}
//               px={{ base: 8, md: 'unset' }}
//             >
//               <Link href="/cadastro">
//                 <Button
//                   borderRadius="full"
//                   size="2xl"
//                   fontWeight="500"
//                   width={{ base: '100%', md: 'auto' }}
//                 >
//                   Faça um
//                   <strong style={{ fontWeight: 700, marginLeft: '-6px' }}>teste grátis</strong>
//                 </Button>
//               </Link>
//               <Box
//                 display={{ base: 'none', md: 'block' }}
//                 position="absolute"
//                 left={{ base: '-100px', md: '-260px' }}
//                 transform={{ base: 'rotate(50deg)', md: 'none' }}
//                 bottom={{ base: '60px', md: '-60px' }}
//                 width={{ base: '160px', md: '260px' }}
//               >
//                 <Image
//                   src="/no-card-required.svg"
//                   alt="Imobi Test"
//                   width={0}
//                   height={0}
//                   sizes="100vw"
//                   style={{ width: '100%', height: 'auto' }}
//                 />
//               </Box>
//             </Box>
//             <Box
//               position="relative"
//               width={{ base: '100%', md: 'unset' }}
//               px={{ base: 8, md: 'unset' }}
//             >
//               <Link href="/entrar">
//                 <Button
//                   borderRadius="full"
//                   size="2xl"
//                   variant="outline"
//                   width={{ base: '100%', md: 'unset' }}
//                 >
//                   Agende uma apresentação
//                 </Button>
//               </Link>
//             </Box>
//           </HStack>

//           <Center
//             width="100vw"
//             minHeight={{ base: '300px', md: '660px' }}
//             overflow="hidden"
//             position="relative"
//             px="4"
//             pt={12}
//             pb={12}
//           >
//             <Box
//               boxShadow="0 12px 36px 0 rgba(0,0,0,0.2)"
//               borderRadius="2xl"
//               overflow="hidden"
//               width="800px"
//               maxWidth="100vw"
//             >
//               <Image
//                 src="/floating-ui-center.jpg"
//                 alt="Imobi Test"
//                 width={0}
//                 height={0}
//                 sizes="100vw"
//                 style={{ width: '100%', height: 'auto' }}
//               />
//             </Box>
//             <Box
//               boxShadow="-12px 12px 36px 0 rgba(0,0,0,0.2)"
//               borderRadius="2xl"
//               overflow="hidden"
//               mb={{ base: '-80px', md: '-80px' }}
//               position="absolute"
//               width={{ base: '140px', md: '280px' }}
//               ml={{ base: '-320px', md: '-860px' }}
//             >
//               <Image
//                 src="/floating-ui-left.jpg"
//                 alt="Imobi Test"
//                 width={0}
//                 height={0}
//                 sizes="100vw"
//                 style={{ width: '100%', height: 'auto' }}
//               />
//             </Box>
//             <Box
//               boxShadow="12px 12px 36px 0 rgba(0,0,0,0.2)"
//               borderRadius="2xl"
//               overflow="hidden"
//               position="absolute"
//               width={{ base: '140px', md: '240px' }}
//               mr={{ base: '-360px', md: '-840px' }}
//             >
//               <Image
//                 src="/floating-ui-right.jpg"
//                 alt="Imobi Test"
//                 width={0}
//                 height={0}
//                 sizes="100vw"
//                 style={{ width: '100%', height: 'auto' }}
//               />
//             </Box>
//           </Center>
//         </Center>
//       </Center>
//       <Highlights />
//       {/* <Integrations /> */}
//       {/* <Pricing /> */}
//     </>
//   )
// }
