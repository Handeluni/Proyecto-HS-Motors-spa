# HS Motors

Aplicación web SPA desarrollada con React, TypeScript y Vite como parte de una prueba técnica para una empresa del sector automotriz.

La aplicación permite descubrir vehículos, realizar búsquedas y aplicar filtros, consultar el detalle de cada modelo, seleccionar colores disponibles y solicitar una cotización o una prueba de manejo.

## Características

- Sección de vehículos destacados y servicios.

- Catálogo de vehículos con búsqueda por marca o modelo, filtros combinables por categoría, combustible y precio, además de opciones de ordenamiento.

- Catálogo ampliado con modelos de distintas marcas, utilizando imágenes locales organizadas por fabricante y modelo.

- Vista detallada de cada vehículo con información de precio, año, combustible, transmisión, kilometraje, descripción y características principales.

- Selector de colores disponibles en la vista detallada del vehículo.

- Ampliación de la imagen del vehículo mediante una vista modal, con opción de cierre mediante botón, clic fuera de la imagen o tecla `Esc`.

- Formularios de cotización y prueba de manejo con React Hook Form y validación mediante Zod.

- Estados visuales de carga, error, vacío y éxito.

- Navegación responsive con menú adaptable para dispositivos móviles.

- Rutas para inicio, catálogo, detalle de vehículo, servicios, información de la empresa y formularios, incluyendo página 404.

## Tecnologías

- React , TypeScript y Vite.

- React Router para la navegación entre vistas y rutas dinámicas.

- React Hook Form + Zod para la gestión y validación de formularios.

- Lucide React para iconografía consistente.

- CSS3 para estilos, diseño responsive, transiciones y animaciones de interfaz.

## Instalación

### Requisitos previos

Para ejecutar el proyecto localmente se necesita:

- Node.js versión LTS o superior.
- Git.
- Un editor de código como Visual Studio Code (opcional).

Nota: No es necesario instalar React, TypeScript o Vite manualmente, ya que las dependencias del proyecto se instalan mediante `npm`.

### Clonar el repositorio

```bash
git clone https://github.com/Handeluni/Proyecto-HS-Motors-spa.git
```

### Ingresar al proyecto

```bash
cd Proyecto-HS-Motors-spa
```

### Instalar dependencias

```bash
npm install
```

### Iniciar el servidor de desarrollo

```bash
npm run dev
```

Vite mostrará en la terminal la dirección local para acceder a la aplicación desde el navegador.

## Scripts

| Script | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo. |
| `npm run build` | Verifica el proyecto y genera la compilación de producción. |
| `npm run lint` | Revisa las reglas de calidad configuradas con ESLint. |
| `npm run preview` | Sirve localmente la compilación generada para visualizar la versión de producción. |

## Arquitectura

La aplicación mantiene una estructura sencilla y separada por responsabilidades:

- `src/data` contiene los datos locales del catálogo y los servicios mock.

- `src/services` simula la capa de acceso a datos y permite mantener una estructura preparada para una futura API.

- `src/components` agrupa componentes reutilizables de la interfaz.

- `src/utils` contiene funciones auxiliares utilizadas por diferentes partes de la aplicación.

- `src/pages.tsx` contiene las principales vistas de la aplicación.

- `src/types.ts` centraliza los modelos y tipos utilizados por el dominio.

- `public/images` contiene las imágenes locales de los vehículos y otros recursos estáticos.

Esta estructura busca mantener separadas la interfaz, los datos y las operaciones relacionadas con el acceso a la información, manteniendo una arquitectura sencilla para el alcance de la prueba técnica.

## Decisiones técnicas

- **React + TypeScript:** se utilizaron para construir una interfaz basada en componentes reutilizables y mantener tipado seguro en los datos y estados de la aplicación.

- **Vite:** se seleccionó como herramienta de desarrollo y compilación por su configuración sencilla y tiempos rápidos de desarrollo.

- **React Router:** permite manejar la navegación entre las diferentes vistas y los detalles dinámicos de cada vehículo.

- **React Hook Form + Zod:** se utilizaron para gestionar los formularios y centralizar las reglas de validación.

- **Datos separados de la UI:** la información de los vehículos y servicios se mantiene fuera de los componentes para evitar acoplar los datos directamente a la interfaz.

- **Capa de servicios:** `vehicleService` simula el comportamiento de una API futura, permitiendo que la fuente de datos pueda sustituirse posteriormente sin modificar de forma significativa los componentes de presentación.

- **Imágenes locales:** se utilizan recursos almacenados dentro de `public/images`, organizados por marca y modelo, para mantener control sobre los recursos utilizados por el catálogo.

- **Diseño responsive:** la interfaz adapta su estructura a diferentes tamaños de pantalla mediante CSS y media queries.

## Referencia del catálogo

El catálogo principal incluye modelos de Toyota, Suzuki, Kia, Hino y Yamaha, complementados con un catálogo adicional de diferentes fabricantes y modelos.

Los nombres de los modelos se basan en referencias de catálogos oficiales de fabricantes y distribuidores, entre ellos:

- [Toyota Nicaragua](https://toyota.com.ni/vehiculos-toyota/)
- [Suzuki Nicaragua](https://suzuki-nicaragua.com/vehiculos-suzuki/)
- [Hino Nicaragua](https://hinonic.com/camiones-hino/)
- [Kia Nicaragua](https://kia.com.ni/)
- [Yamaha Nicaragua](https://yamahanic.com/)

Los precios, descripciones, especificaciones e información del catálogo son referenciales para los fines de la prueba técnica.

## Manejo de estados

Las consultas simuladas incorporan una pausa controlada para representar una futura comunicación con una API.

Durante la carga del catálogo se muestran skeletons de contenido y, ante un fallo, se presenta una pantalla con opción de reintentar.

Cuando los filtros no encuentran coincidencias, se muestra un estado vacío recuperable.

Los formularios deshabilitan el envío mientras se procesa la solicitud y muestran estados de éxito o error según el resultado de la operación.

## Mejoras futuras

- Integración con una API y backend reales, incluyendo base de datos y persistencia de solicitudes.

- Sistema de autenticación, favoritos y comparación de vehículos.

- Búsqueda en lenguaje natural mediante IA para interpretar consultas como "busco un Suzuki rojo" o "quiero un Toyota SUV híbrido".

- Integración de imágenes específicas para cada color y cambio dinámico de la fotografía del vehículo al seleccionar una opción.

- Calculadora de financiamiento y simulación de cuotas.

- Integración de mapas, ubicación de sucursales y analítica.

- Panel administrativo para gestionar vehículos, precios, imágenes y solicitudes.

- Pruebas unitarias, de integración y end-to-end.

## Build de producción

Para generar la versión optimizada de producción:

```bash
npm run build
```

La compilación se genera en la carpeta `dist`.

Para visualizar localmente esta versión:

```bash
npm run preview
```

## Demo

Aplicación publicada:
```bash
https://proyecto-hs-motors-spa.vercel.app/
```

## Autor

**Handel Sánchez**