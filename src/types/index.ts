export type VehicleCategory = 'SUV' | 'Sedan' | 'Pickup' | 'Hatchback' | 'Electric' | 'Motorcycle' | 'Truck'
export type FuelType = 'Gasolina' | 'Diésel' | 'Híbrido' | 'Eléctrico'
export type TransmissionType = 'Automática' | 'Manual'
export interface Vehicle { id: string; brand: string; model: string; year: number; price: number; category: VehicleCategory; fuelType: FuelType; transmission: TransmissionType; mileage: number; image: string; description: string; features: string[]; featured?: boolean;  colors: VehicleColor[]}
export interface Service { id: string; name: string; description: string; icon: ServiceIcon; features: string[] }
export type ServiceIcon = 'wrench' | 'shield' | 'banknote' | 'car' | 'clipboard' | 'user-check'
export interface QuoteRequest { firstName: string; lastName: string; email: string; phone: string; vehicleId: string; comments?: string }
export interface TestDriveRequest { name: string; email: string; phone: string; vehicleId: string; date: string; time: string }
export type RequestStatus = 'initial' | 'loading' | 'success' | 'error'
export type VehicleColor = {
  name: string
  hex: string
}