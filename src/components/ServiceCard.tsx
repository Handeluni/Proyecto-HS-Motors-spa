import { Banknote, Car, Clipboard, Shield, UserCheck, Wrench } from 'lucide-react'
import type { Service, ServiceIcon } from '../types'
const icons: Record<ServiceIcon, typeof Wrench> = {wrench:Wrench,shield:Shield,banknote:Banknote,car:Car,clipboard:Clipboard,'user-check':UserCheck}
export function ServiceCard({service}:{service:Service}) { const Icon=icons[service.icon]; return <article className="service-card"><div className="icon-wrap"><Icon/></div><h3>{service.name}</h3><p>{service.description}</p><ul>{service.features.map(feature=><li key={feature}>{feature}</li>)}</ul></article> }
