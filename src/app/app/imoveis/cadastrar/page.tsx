'use client'

import { Card, PageRowLayout } from '@/components'
import { PageHeaderLayout } from '@/components/PageHeaderLayout'
import { H1, Text } from '@/ui'

export default function Home() {
  return (
    <>
      <PageHeaderLayout>
        <H1 fontSize="3xl" color="trusty.1">
          Cadastrar imóvel &nbsp; 🏡
        </H1>
        <Text color="trusty.1" fontSize="lg" opacity={0.8}>
          Complete os campos a seguir para adicionar um novo imóvel.
        </Text>
      </PageHeaderLayout>
      <PageRowLayout>
        <Card>oksdfoksko</Card>
      </PageRowLayout>
    </>
  )
}
