import { ArrowUpRight, Fuel, Gauge, Settings2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Vehicle } from '../types'
import { formatPrice } from '../utils/format'
export function VehicleCard({vehicle}: {vehicle: Vehicle}) { return <article className="vehicle-card"><Link className="vehicle-image-link" to={`/vehicles/${vehicle.id}`} aria-label={`Ver más sobre ${vehicle.brand} ${vehicle.model}`}><img src={vehicle.image} alt={`${vehicle.brand} ${vehicle.model}`} /></Link><div className="card-body"><div className="card-top"><span className="badge">{vehicle.category}</span><span>{vehicle.year}</span></div><h3>{vehicle.brand} {vehicle.model}</h3><p className="price">{formatPrice(vehicle.price)}</p><div className="specs"><span><Fuel/> {vehicle.fuelType}</span><span><Settings2/> {vehicle.transmission}</span><span><Gauge/> {vehicle.mileage.toLocaleString()} km</span></div><Link className="text-link" to={`/vehicles/${vehicle.id}`}>Ver más <ArrowUpRight/></Link></div></article> }
export function VehicleSkeleton(){ return <div className="vehicle-card skeleton-card"><div/><section><i/><i/><i/><i/></section></div> }
