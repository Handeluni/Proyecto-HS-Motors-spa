import type { Vehicle } from '../types'
type Seed = Omit<Vehicle, 'description' | 'features' | 'colors'>
const features: Record<Vehicle['category'], string[]> = {
  SUV:['Control de estabilidad','Cámara de reversa','Aire acondicionado'],
  Sedan:['Control de estabilidad','Sensores traseros','Pantalla multimedia'],
  Pickup:['Capacidad de carga','Cámara de reversa','Tracción reforzada'],
  Hatchback:['Frenos ABS','Bluetooth','Aire acondicionado'],
  Electric:['Conectividad','Asistencias de conducción','Pantalla multimedia'],
  Motorcycle:['Freno de disco','Iluminación LED','Panel digital'],
  Truck:['Chasis de trabajo','Frenos reforzados','Capacidad de carga']
}

const defaultColors = [
  { name: 'Blanco', hex: '#f5f5f5' },
  { name: 'Negro', hex: '#111111' },
  { name: 'Gris', hex: '#777777' },
  { name: 'Rojo', hex: '#b3261e' },
]

const v=(seed:Seed):Vehicle=>({
  ...seed,
  description:`${seed.brand} ${seed.model}: modelo mostrado con imagen local correspondiente. Precio referencial en córdobas; confirme versión y disponibilidad con un asesor.`,
  features:features[seed.category],
  colors:defaultColors
})

// Imágenes locales proporcionadas en images.zip; precios en córdobas nicaragüenses.
const coreVehicles:Vehicle[]=[
v({id:'agya',brand:'Toyota',model:'Agya',year:2025,price:567677,category:'Hatchback',fuelType:'Gasolina',transmission:'Manual',mileage:0,image:'/images/toyota/Sedan/AGYA/AgyaTO24.jpg',featured:true}),
v({id:'chr',brand:'Toyota',model:'C-HR',year:2025,price:1150000,category:'SUV',fuelType:'Híbrido',transmission:'Automática',mileage:0,image:'/images/toyota/c-hr/thumb.webp'}),
v({id:'camry',brand:'Toyota',model:'Camry',year:2025,price:1500000,category:'Sedan',fuelType:'Híbrido',transmission:'Automática',mileage:0,image:'/images/toyota/camry/medium.webp'}),
v({id:'corolla',brand:'Toyota',model:'Corolla',year:2025,price:950000,category:'Sedan',fuelType:'Gasolina',transmission:'Automática',mileage:0,image:'/images/toyota/corolla/002_COROLLA_SDN_WGN_60th_202605.jpg'}),
v({id:'hilux',brand:'Toyota',model:'Hilux',year:2025,price:1911788,category:'Pickup',fuelType:'Diésel',transmission:'Manual',mileage:0,image:'/images/toyota/hilux/medium.webp',featured:true}),
v({id:'rav4',brand:'Toyota',model:'RAV4',year:2025,price:1721342,category:'SUV',fuelType:'Híbrido',transmission:'Automática',mileage:0,image:'/images/toyota/rav4/medium.webp'}),
v({id:'yaris-cross',brand:'Toyota',model:'Yaris Cross',year:2025,price:952232,category:'SUV',fuelType:'Híbrido',transmission:'Automática',mileage:0,image:'/images/toyota/yaris-cross/medium.webp'}),
v({id:'jimny',brand:'Suzuki',model:'Jimny',year:2025,price:928450,category:'SUV',fuelType:'Gasolina',transmission:'Manual',mileage:0,image:'/images/suzuki/jimny/medium.webp'}),
v({id:'swift',brand:'Suzuki',model:'Swift',year:2025,price:658900,category:'Hatchback',fuelType:'Gasolina',transmission:'Automática',mileage:0,image:'/images/suzuki/swift/medium.webp'}),
v({id:'sx4',brand:'Suzuki',model:'SX4 S-Cross',year:2025,price:950000,category:'SUV',fuelType:'Híbrido',transmission:'Automática',mileage:0,image:'/images/suzuki/sx4-s-cross/medium.webp'}),
v({id:'vitara',brand:'Suzuki',model:'Vitara',year:2025,price:920000,category:'SUV',fuelType:'Gasolina',transmission:'Automática',mileage:0,image:'/images/suzuki/vitara/medium.webp'}),
v({id:'niro',brand:'Kia',model:'Niro',year:2025,price:1350000,category:'Electric',fuelType:'Híbrido',transmission:'Automática',mileage:0,image:'/images/kia/niro/medium.webp'}),
v({id:'picanto',brand:'Kia',model:'Picanto',year:2025,price:576990,category:'Hatchback',fuelType:'Gasolina',transmission:'Automática',mileage:0,image:'/images/kia/picanto/medium.webp'}),
v({id:'rio',brand:'Kia',model:'Rio',year:2025,price:760000,category:'Hatchback',fuelType:'Gasolina',transmission:'Automática',mileage:0,image:'/images/kia/rio/medium.webp'}),
v({id:'seltos',brand:'Kia',model:'Seltos',year:2025,price:1007388,category:'SUV',fuelType:'Gasolina',transmission:'Automática',mileage:0,image:'/images/kia/seltos/medium.webp'}),
v({id:'sorento',brand:'Kia',model:'Sorento',year:2025,price:2087220,category:'SUV',fuelType:'Gasolina',transmission:'Automática',mileage:0,image:'/images/kia/sorento/medium.webp'}),
v({id:'sportage',brand:'Kia',model:'Sportage',year:2025,price:1318375,category:'SUV',fuelType:'Gasolina',transmission:'Automática',mileage:0,image:'/images/kia/sportage/medium.webp',featured:true}),
v({id:'stonic',brand:'Kia',model:'Stonic',year:2025,price:830000,category:'SUV',fuelType:'Gasolina',transmission:'Automática',mileage:0,image:'/images/kia/stonic/medium.webp'}),
v({id:'hino-200',brand:'Hino',model:'200 2 Ton',year:2025,price:925000,category:'Truck',fuelType:'Diésel',transmission:'Manual',mileage:0,image:'/images/hino/HINO%20200%202%20Ton/Hino200-23-UPD.jpg'}),
v({id:'hino-35',brand:'Hino',model:'3.5 Ton',year:2025,price:962000,category:'Truck',fuelType:'Diésel',transmission:'Manual',mileage:0,image:'/images/hino/Hino%203.5%20Ton/300-3_5-4.jpg'}),
v({id:'hino-55',brand:'Hino',model:'300 5.5 Ton',year:2025,price:1165500,category:'Truck',fuelType:'Diésel',transmission:'Manual',mileage:0,image:'/images/hino/HINO%20300%205.5%20Ton/300-5-7-4.jpg'}),
v({id:'hino-500',brand:'Hino',model:'500 12 Ton',year:2025,price:1850000,category:'Truck',fuelType:'Diésel',transmission:'Manual',mileage:0,image:'/images/hino/HINO%20%20500%2012%20Ton/500-18-4.jpg'}),
v({id:'hino-700',brand:'Hino',model:'700 Cabezal',year:2025,price:2600000,category:'Truck',fuelType:'Diésel',transmission:'Manual',mileage:0,image:'/images/hino/HINO%20700%20Cabezal/Hino700-profile-.jpg'}),
v({id:'hino-l6',brand:'Hino',model:'L6',year:2025,price:2100000,category:'Truck',fuelType:'Diésel',transmission:'Manual',mileage:0,image:'/images/hino/L6/L6_Box_Tight_Angle_Pass.png'}),
v({id:'hino-xl',brand:'Hino',model:'XL',year:2025,price:2900000,category:'Truck',fuelType:'Diésel',transmission:'Manual',mileage:0,image:'/images/hino/XL/XL_Tractor-3-4_Driver.png'}),
v({id:'fz150',brand:'Yamaha',model:'FZ 150',year:2025,price:101816,category:'Motorcycle',fuelType:'Gasolina',transmission:'Manual',mileage:0,image:'/images/yamaha/FZ%20150/c-azul-1100w.avif'}),
v({id:'fzs150',brand:'Yamaha',model:'FZ-S 150 V4',year:2025,price:123424,category:'Motorcycle',fuelType:'Gasolina',transmission:'Manual',mileage:0,image:'/images/yamaha/FZ-S%20150%20V4/card-alfa-1100w.avif'}),
v({id:'mt03',brand:'Yamaha',model:'MT-03',year:2025,price:254905,category:'Motorcycle',fuelType:'Gasolina',transmission:'Manual',mileage:0,image:'/images/yamaha/MT-03/c-azul-1100w.avif'}),
v({id:'r15',brand:'Yamaha',model:'R15 V4',year:2025,price:190446,category:'Motorcycle',fuelType:'Gasolina',transmission:'Manual',mileage:0,image:'/images/yamaha/R15%20V4/c-azul-1100w.avif'}),
v({id:'sz150',brand:'Yamaha',model:'SZ 150',year:2025,price:73981,category:'Motorcycle',fuelType:'Gasolina',transmission:'Manual',mileage:0,image:'/images/yamaha/SZ%20150/c-azul-1100w.avif'}),
v({id:'ybr124',brand:'Yamaha',model:'YBR 124ED',year:2025,price:65558,category:'Motorcycle',fuelType:'Gasolina',transmission:'Manual',mileage:0,image:'/images/yamaha/YBR%20124ED/c-azul-1100w.avif'}),
v({id:'ybr125',brand:'Yamaha',model:'YBR 125G',year:2025,price:75995,category:'Motorcycle',fuelType:'Gasolina',transmission:'Manual',mileage:0,image:'/images/yamaha/YBR%20125G/c-azul-1100w.avif'})]

const extraCatalog: Record<string, string[]> = {
  byd:['atto-3','dolphin','han','seal'], chevrolet:['equinox','onix','silverado-1500','trax'], citroen:['c3','c4','c5-aircross'], dacia:['duster','jogger','sandero','spring'], fiat:['500','panda','tipo'], ford:['explorer','fiesta','focus','kuga','mustang','puma','ranger'], honda:['accord','civic','cr-v','hr-v','jazz'], hyundai:['bayon','elantra','i10','i20','i30','kona','santa-fe','tucson'], jeep:['compass','grand-cherokee','renegade','wrangler'], mazda:['3','cx-30','cx-5','cx-60','mx-5'], mg:['zs'], nissan:['juke','leaf','micra','qashqai','x-trail'], peugeot:['2008','208','3008','308','5008'], polestar:['1','2','3','4','5'], porsche:['911'], renault:['arkana','austral','captur','clio','megane'], seat:['arona','ibiza'], skoda:['kamiq','octavia'], subaru:['forester','outback'], tesla:['cybercab','cybertruck','model-3','model-s','model-x','model-y','roadster'], volkswagen:['golf','id-4','jetta','passat','polo','t-cross','t-roc','tiguan']
}
const titleCase=(value:string)=>value.split('-').map(part=>part.length<=3?part.toUpperCase():part[0].toUpperCase()+part.slice(1)).join(' ')
const categoryFor=(brand:string,model:string):Vehicle['category']=>{
  if(['tesla','polestar','byd'].includes(brand)||['leaf','spring','id-4'].includes(model)) return 'Electric'
  if(['silverado-1500','ranger','cybertruck'].includes(model)) return 'Pickup'
  if(['accord','civic','elantra','mazda-3','3','passat','jetta','octavia','han','seal','tipo'].includes(model)) return 'Sedan'
  if(['onix','fiesta','focus','i10','i20','i30','jazz','micra','208','308','clio','megane','ibiza','polo','golf','500','panda','sandero','dolphin'].includes(model)) return 'Hatchback'
  return 'SUV'
}
const extraVehicles:Vehicle[]=Object.entries(extraCatalog).flatMap(([brand,models])=>models.map((model,index)=>{const category=categoryFor(brand,model);const image=`/images/${brand}/${model}/medium.webp`;return v({id:`${brand}-${model}`,brand:titleCase(brand),model:titleCase(model),year:2025,price:650000+index*85000,category,fuelType:category==='Electric'?'Eléctrico':'Gasolina',transmission:'Automática',mileage:0,image})}))
export const vehicles:Vehicle[]=[...coreVehicles,...extraVehicles]