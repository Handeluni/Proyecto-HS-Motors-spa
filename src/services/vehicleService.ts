import { vehicles } from '../data/vehicles'
import type { QuoteRequest, TestDriveRequest, Vehicle } from '../types'
const delay = (ms = 500) => new Promise(resolve => setTimeout(resolve, ms))
export async function getVehicles(): Promise<Vehicle[]> { await delay(); return vehicles }
export async function getVehicleById(id: string): Promise<Vehicle | undefined> { await delay(250); return vehicles.find(vehicle => vehicle.id === id) }
async function simulateSubmission<T>(request: T): Promise<T> { await delay(850); if (!request) throw new Error('No fue posible enviar la solicitud.'); return request }
export const submitQuote = (request: QuoteRequest) => simulateSubmission(request)
export const submitTestDrive = (request: TestDriveRequest) => simulateSubmission(request)
