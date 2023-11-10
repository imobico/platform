export type OrganizationType = 'agent' | 'agency' | 'owner'

export interface OrganizationProfile {
  id?: string
  name?: string
  type?: OrganizationType
  photo_url?: string
  created_at?: string
  updated_at?: string
}

export interface Organization extends OrganizationProfile {}
