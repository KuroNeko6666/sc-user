export interface IDevice {
  id: string
  model: string
  address: IAddress
}

export interface IAddress {
  address: string
  city: string
  province: string
  longitude: string
  latitude: string
}
