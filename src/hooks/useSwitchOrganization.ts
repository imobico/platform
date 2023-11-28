import { useRouter } from 'next/navigation'
import useLocalStorageState from 'use-local-storage-state'

export const useSwitchOrganization = () => {
  const router = useRouter()
  const [currentOrgId, setOrgId] = useLocalStorageState('currentOrganizationId')

  const switchOrganization = (newOrgId: string | undefined) => {
    console.log(`Mudando da organização - ${currentOrgId} - para - ${newOrgId} -`)
    setOrgId(newOrgId)
    router.replace(`/app`)
  }

  return [switchOrganization]
}
