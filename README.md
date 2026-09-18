# HS Motors

SPA ficticia para una empresa automotriz, creada como prueba técnica de frontend. Permite descubrir vehículos, comparar opciones mediante filtros y solicitar una cotización o prueba de manejo.

## Características

- Landing responsive con vehículos destacados, servicios y llamadas a la acción.
- Catálogo local de 8 vehículos ficticios con búsqueda, filtros combinables y ordenamiento.
- Detalle de vehículo con enlaces que conservan el modelo seleccionado en los formularios.
- Formularios de cotización y prueba de manejo con React Hook Form y validación Zod.
- Estados visuales de carga, error, vacío y éxito.
- Rutas para inicio, catálogo, detalle, servicios y formularios, más 404.

## Tecnologías

- React 19, TypeScript y Vite.
- React Router para navegación.
- React Hook Form + Zod para formularios y validación.
- Lucide React para iconos accesibles y consistentes.

## Instalación

```bash
npm install
npm run dev
```

Abre la URL mostrada por Vite. Para producción:

```bash
npm run build
npm run preview
```

## Scripts

| Script | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo. |
| `npm run build` | Comprueba TypeScript y genera la compilación. |
| `npm run lint` | Revisa reglas de calidad con ESLint. |
| `npm run preview` | Sirve localmente la compilación. |

## Arquitectura

`src/data` contiene el catálogo y servicios mock tipados; `src/services` simula una futura API; `src/components` agrupa piezas reutilizables; `src/pages.tsx` contiene las pantallas y `src/types` centraliza el modelo de dominio. Esta escala es intencionalmente sencilla para una prueba técnica y permite separar UI, datos y operaciones asíncronas.

## Decisiones técnicas

React permite dividir la interfaz en componentes reutilizables como tarjetas, estados y layout. TypeScript modela `Vehicle`, `Service`, `QuoteRequest`, `TestDriveRequest` y uniones para categorías, combustible y transmisión, evitando `any`. Los datos no viven en los componentes y `vehicleService` imita el contrato de una API futura. React Hook Form reduce renders y Zod concentra las reglas de validación.

## Referencia del catálogo

El catálogo incluye 35 modelos (7 por marca) cuyos nombres se basan en los catálogos oficiales de [Toyota Nicaragua](https://toyota.com.ni/vehiculos-toyota/), [Suzuki Nicaragua](https://suzuki-nicaragua.com/vehiculos-suzuki/), [Hino Nicaragua](https://hinonic.com/camiones-hino/), [Kia Nicaragua](https://kia.com.ni/) y [Yamaha Nicaragua](https://yamahanic.com/). Los precios, descripciones, imágenes y especificaciones de la SPA son referenciales para esta prueba técnica.

## Manejo de estados

Las consultas simuladas tienen una pausa controlada: el catálogo muestra skeletons mientras carga y una pantalla con reintento ante fallo. Los filtros sin coincidencias muestran un estado vacío recuperable. Los formularios deshabilitan el envío durante la operación y muestran confirmación o error según el resultado.

## Mejoras futuras

- API y backend reales, base de datos y persistencia de solicitudes.
- Autenticación, favoritos y comparador de vehículos.
- Calculadora de financiamiento, mapas, analytics y panel administrativo.
- Pruebas unitarias, de integración y end-to-end.
