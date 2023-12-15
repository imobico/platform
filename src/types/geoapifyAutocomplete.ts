export type geoapifyAutocompleteItem = {
  bbox: number[]
  geometry: {
    type: string
    coordinates: number[]
  }
  properties: {
    address_line1: string
    address_line2: string
    city: string
    country: string
    country_code: string
    county: string
    datasource: {
      attribution: string
      license: string
      sourcename: string
      url: string
    }
    district: string
    formatted: string
    lat: number
    lon: number
    municipality: string
    name: string
    place_id: string
    plus_code: string
    plus_code_short: string
    postcode: string
    rank: {
      confidence: number
      importance: number
      match_type: string
    }
    region: string
    result_type: string
    state: string
    state_code: string
    street: string
    timezone: {
      name: string
      offset_DST: string
      offset_DST_seconds: number
      offset_STD: string
      offset_STD_seconds: number
    }
  }
  type: string
}
