import { Search, SlidersHorizontal, X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { EmptyState, ErrorState } from '../components/States'
import { VehicleCard, VehicleSkeleton } from '../components/VehicleCard'
import { getVehicles } from '../services/vehicleService'
import type { FuelType, Vehicle, VehicleCategory } from '../types'

type SortBy = 'default' | 'price-asc' | 'price-desc' | 'year-desc' | 'year-asc'
const categories: VehicleCategory[] = ['SUV','Sedan','Pickup','Hatchback','Electric','Motorcycle','Truck']
const fuels: FuelType[] = ['Gasolina','Diésel','Híbrido','Eléctrico']
const priceRanges = [[100000,'Hasta C$100,000'],[300000,'Hasta C$300,000'],[700000,'Hasta C$700,000'],[1000000,'Hasta C$1,000,000'],[1500000,'Hasta C$1,500,000'],[2500000,'Hasta C$2,500,000']] as const

export function CatalogPage() {
  const [items,setItems]=useState<Vehicle[]>([]); const [loading,setLoading]=useState(true); const [failed,setFailed]=useState(false)
  const [search,setSearch]=useState(''); const [category,setCategory]=useState(''); const [fuel,setFuel]=useState(''); const [maxPrice,setMaxPrice]=useState(''); const [sort,setSort]=useState<SortBy>('default')
  const load=()=>{setLoading(true);setFailed(false);getVehicles().then(setItems).catch(()=>setFailed(true)).finally(()=>setLoading(false))}
  useEffect(load,[])
  const clear=()=>{setSearch('');setCategory('');setFuel('');setMaxPrice('');setSort('default')}
  const results=useMemo(()=>items.filter(v=>`${v.brand} ${v.model}`.toLowerCase().includes(search.toLowerCase())).filter(v=>!category||v.category===category).filter(v=>!fuel||v.fuelType===fuel).filter(v=>!maxPrice||v.price<=Number(maxPrice)).sort((a,b)=>sort==='price-asc'?a.price-b.price:sort==='price-desc'?b.price-a.price:sort==='year-desc'?b.year-a.year:sort==='year-asc'?a.year-b.year:0),[items,search,category,fuel,maxPrice,sort])
  return <section className="section container"><p className="eyebrow">CATÁLOGO</p><h1 className="page-title">Encuentra tu próximo <em>camino.</em></h1><p className="intro">Explora los modelos disponibles y encuentra el que mejor se adapta a ti.</p><div className="filters"><label className="search"><Search/><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Busca marca o modelo"/></label><label><span>Categoría</span><select value={category} onChange={e=>setCategory(e.target.value)}><option value="">Todas</option>{categories.map(x=><option key={x}>{x}</option>)}</select></label><label><span>Combustible</span><select value={fuel} onChange={e=>setFuel(e.target.value)}><option value="">Todos</option>{fuels.map(x=><option key={x}>{x}</option>)}</select></label><label><span>Precio máximo</span><select value={maxPrice} onChange={e=>setMaxPrice(e.target.value)}><option value="">Sin límite</option>{priceRanges.map(([value,label])=><option value={value} key={value}>{label}</option>)}</select></label><label><span>Ordenar</span><select value={sort} onChange={e=>setSort(e.target.value as SortBy)}><option value="default">Relevancia</option><option value="price-asc">Menor precio</option><option value="price-desc">Mayor precio</option><option value="year-desc">Año más reciente</option><option value="year-asc">Año más antiguo</option></select></label></div><div className="results"><span><SlidersHorizontal/> {results.length} {results.length===1?'vehículo encontrado':'vehículos encontrados'}</span>{(search||category||fuel||maxPrice||sort!=='default')&&<button className="clear" onClick={clear}><X/> Limpiar filtros</button>}</div>{loading?<div className="vehicle-grid">{[1,2,3,4,5,6].map(n=><VehicleSkeleton key={n}/>)}</div>:failed?<ErrorState onRetry={load}/>:results.length?<div className="vehicle-grid">{results.map(v=><VehicleCard key={v.id} vehicle={v}/>)}</div>:<EmptyState onClear={clear}/>}</section>
}
