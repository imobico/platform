import Image from 'next/image'
import Link from 'next/link'

import { Box, Button, Center } from '@/ui'

export default function Home() {
  return (
    <Center width="100vw" height="100vh" flexDirection="column">
      <Box width="200px" mb={12}>
        <Image
          priority
          src="/logo-beeside-fundo-claro.svg"
          alt="Imobi Test"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />
      </Box>
      <Link href="/entrar">
        <Button size="xl">Fazer login</Button>
      </Link>
    </Center>
  )
}
