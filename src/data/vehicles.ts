import type { Vehicle } from '../types'
type VehicleSeed = Omit<Vehicle, 'image' | 'description' | 'features'>
const images: Record<string, string> = { Toyota:'https://images.unsplash.com/photo-1551830820-330a71b99659?auto=format&fit=crop&w=1200&q=80', Suzuki:'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80', Hino:'https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=1200&q=80', Kia:'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80', Yamaha:'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80' }
const features: Record<Vehicle['category'], string[]> = { SUV:['Pantalla multimedia','Cámara de reversa','Control de estabilidad','Aire acondicionado'], Sedan:['Pantalla multimedia','Sensores traseros','Control de estabilidad','Aire acondicionado'], Pickup:['Tracción reforzada','Cámara de reversa','Control de estabilidad','Capacidad de carga'], Hatchback:['Conectividad Bluetooth','Cámara de reversa','6 airbags','Modo Eco'], Electric:['Carga rápida','Freno regenerativo','App remota','Pantalla multimedia'], Motorcycle:['Freno de disco','Iluminación LED','Panel digital','Arranque eléctrico'], Truck:['Chasis de trabajo','Frenos reforzados','Cabina funcional','Capacidad de carga'] }
const createVehicle = (seed: VehicleSeed): Vehicle => ({ ...seed, image:images[seed.brand], description:`${seed.brand} ${seed.model}: modelo disponible en el catálogo de HS Motors con información y precio referenciales.`, features:features[seed.category] })
// Modelos tomados de los catálogos oficiales de Nicaragua. Precios y kilometraje son datos mock.
export const vehicles: Vehicle[] = [
  createVehicle({id:'toyota-agya',brand:'Toyota',model:'Agya',year:2025,price:14800,category:'Hatchback',fuelType:'Gasolina',transmission:'Manual',mileage:0,featured:true}),
  createVehicle({id:'toyota-yaris',brand:'Toyota',model:'Yaris',year:2025,price:21900,category:'Sedan',fuelType:'Gasolina',transmission:'Automática',mileage:0}),
  createVehicle({id:'toyota-raize',brand:'Toyota',model:'Raize',year:2025,price:24600,category:'SUV',fuelType:'Gasolina',transmission:'Automática',mileage:0}),
  createVehicle({id:'toyota-yaris-cross',brand:'Toyota',model:'Yaris Cross',year:2025,price:30200,category:'SUV',fuelType:'Híbrido',transmission:'Automática',mileage:0,featured:true}),
  createVehicle({id:'toyota-rush',brand:'Toyota',model:'Rush',year:2025,price:29800,category:'SUV',fuelType:'Gasolina',transmission:'Automática',mileage:0}),
  createVehicle({id:'toyota-corolla-cross',brand:'Toyota',model:'Corolla Cross',year:2025,price:38900,category:'SUV',fuelType:'Híbrido',transmission:'Automática',mileage:0,featured:true}),
  createVehicle({id:'toyota-hilux',brand:'Toyota',model:'Hilux 2.8 4x4',year:2025,price:49100,category:'Pickup',fuelType:'Diésel',transmission:'Automática',mileage:0}),
  createVehicle({id:'suzuki-alto',brand:'Suzuki',model:'Alto',year:2025,price:12100,category:'Hatchback',fuelType:'Gasolina',transmission:'Manual',mileage:0}),
  createVehicle({id:'suzuki-spresso',brand:'Suzuki',model:'S-Presso',year:2025,price:13900,category:'Hatchback',fuelType:'Gasolina',transmission:'Manual',mileage:0}),
  createVehicle({id:'suzuki-celerio',brand:'Suzuki',model:'Celerio',year:2025,price:14900,category:'Hatchback',fuelType:'Gasolina',transmission:'Automática',mileage:0}),
  createVehicle({id:'suzuki-swift',brand:'Suzuki',model:'Swift',year:2025,price:18100,category:'Hatchback',fuelType:'Gasolina',transmission:'Automática',mileage:0,featured:true}),
  createVehicle({id:'suzuki-dzire',brand:'Suzuki',model:'Dzire',year:2025,price:18600,category:'Sedan',fuelType:'Gasolina',transmission:'Automática',mileage:0}),
  createVehicle({id:'suzuki-fronx',brand:'Suzuki',model:'Fronx',year:2025,price:22900,category:'SUV',fuelType:'Híbrido',transmission:'Automática',mileage:0}),
  createVehicle({id:'suzuki-xl7',brand:'Suzuki',model:'XL7',year:2025,price:23900,category:'SUV',fuelType:'Híbrido',transmission:'Automática',mileage:0}),
  createVehicle({id:'hino-200-2t',brand:'Hino',model:'Hino 200 2 Ton',year:2025,price:25000,category:'Truck',fuelType:'Diésel',transmission:'Manual',mileage:0}),
  createVehicle({id:'hino-300-35t',brand:'Hino',model:'Hino 300 3.5 Ton',year:2025,price:26000,category:'Truck',fuelType:'Diésel',transmission:'Manual',mileage:0}),
  createVehicle({id:'hino-300-45t',brand:'Hino',model:'Hino 300 4.5 Ton',year:2025,price:29000,category:'Truck',fuelType:'Diésel',transmission:'Manual',mileage:0}),
  createVehicle({id:'hino-300-55t',brand:'Hino',model:'Hino 300 5.5 Ton',year:2025,price:31500,category:'Truck',fuelType:'Diésel',transmission:'Manual',mileage:0}),
  createVehicle({id:'hino-300-7t',brand:'Hino',model:'Hino 300 7 Ton',year:2025,price:37000,category:'Truck',fuelType:'Diésel',transmission:'Manual',mileage:0}),
  createVehicle({id:'hino-500-8t',brand:'Hino',model:'Hino 500 8 Ton',year:2025,price:51000,category:'Truck',fuelType:'Diésel',transmission:'Manual',mileage:0}),
  createVehicle({id:'hino-500-95t',brand:'Hino',model:'Hino 500 9.5 Ton',year:2025,price:71000,category:'Truck',fuelType:'Diésel',transmission:'Manual',mileage:0}),
  createVehicle({id:'kia-picanto',brand:'Kia',model:'Picanto',year:2025,price:15700,category:'Hatchback',fuelType:'Gasolina',transmission:'Automática',mileage:0}),
  createVehicle({id:'kia-soluto',brand:'Kia',model:'Soluto',year:2025,price:17600,category:'Sedan',fuelType:'Gasolina',transmission:'Automática',mileage:0}),
  createVehicle({id:'kia-k3',brand:'Kia',model:'K3',year:2025,price:24600,category:'Sedan',fuelType:'Gasolina',transmission:'Automática',mileage:0}),
  createVehicle({id:'kia-sonet',brand:'Kia',model:'Sonet',year:2025,price:22400,category:'SUV',fuelType:'Gasolina',transmission:'Automática',mileage:0}),
  createVehicle({id:'kia-seltos',brand:'Kia',model:'Seltos',year:2025,price:27900,category:'SUV',fuelType:'Gasolina',transmission:'Automática',mileage:0}),
  createVehicle({id:'kia-sportage',brand:'Kia',model:'Sportage',year:2025,price:36500,category:'SUV',fuelType:'Gasolina',transmission:'Automática',mileage:0,featured:true}),
  createVehicle({id:'kia-tasman',brand:'Kia',model:'Tasman',year:2025,price:48700,category:'Pickup',fuelType:'Diésel',transmission:'Automática',mileage:0}),
  createVehicle({id:'yamaha-yd110-crux',brand:'Yamaha',model:'YD110 CRUX',year:2025,price:2100,category:'Motorcycle',fuelType:'Gasolina',transmission:'Manual',mileage:0}),
  createVehicle({id:'yamaha-ybr125ed',brand:'Yamaha',model:'YBR 125ED',year:2025,price:2700,category:'Motorcycle',fuelType:'Gasolina',transmission:'Manual',mileage:0}),
  createVehicle({id:'yamaha-sz150',brand:'Yamaha',model:'SZ 150',year:2025,price:3100,category:'Motorcycle',fuelType:'Gasolina',transmission:'Manual',mileage:0}),
  createVehicle({id:'yamaha-fz150',brand:'Yamaha',model:'FZ 150',year:2025,price:4200,category:'Motorcycle',fuelType:'Gasolina',transmission:'Manual',mileage:0}),
  createVehicle({id:'yamaha-mt15',brand:'Yamaha',model:'MT-15',year:2025,price:5600,category:'Motorcycle',fuelType:'Gasolina',transmission:'Manual',mileage:0}),
  createVehicle({id:'yamaha-r15v4',brand:'Yamaha',model:'R15 V4',year:2025,price:6100,category:'Motorcycle',fuelType:'Gasolina',transmission:'Manual',mileage:0}),
  createVehicle({id:'yamaha-nmax',brand:'Yamaha',model:'NMAX',year:2025,price:3900,category:'Motorcycle',fuelType:'Gasolina',transmission:'Automática',mileage:0}),
]
