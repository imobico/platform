import { useRouter } from 'next/navigation'
import useLocalStorageState from 'use-local-storage-state'

export const useSwitchOrganization = () => {
  const router = useRouter()
  const [currentOrgId, setCurrentOrgId] = useLocalStorageState('currentOrganizationId')

  const switchOrganization = (newOrgId: string | undefined) => {
    setCurrentOrgId(newOrgId)
    console.log(`Switched to organization ${currentOrgId}`)
    router.replace(`/painel`)
  }

  return [switchOrganization]
}
