export type Country = {
  code: string,
  flag: string,
  citizensCount: number
}

export type Citizen = {
  id: {
    name: string
    value: string
  },
  gender: string,
  name: {
    first: string
    last: string
    title: string
  },
  email: string,
  dob: {
    date: string
    age: number
  },
  picture: {
    large: string
    medium: string
    thumbnail: string
  },
  location: {
    street: {
      name: string,
      number: string
    },
    city: string,
    country: string,
    state: string,
    postcode: string,
    coordinates: {
      longitude: string,
      latitude: string
    },
    timezone: {
      offset: string,
      description: string
    }
  }
  nat: string
}
