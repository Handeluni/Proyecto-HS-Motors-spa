import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './components/Layout'
import { HomePage, VehicleDetailPage, ServicesPage, QuotePage, TestDrivePage, NotFoundPage } from './pages'
import { AboutPage } from './pages/AboutPage'
import { CatalogPage } from './pages/CatalogPage'
export const router=createBrowserRouter([{element:<Layout/>,children:[{path:'/',element:<HomePage/>},{path:'/vehicles',element:<CatalogPage/>},{path:'/vehicles/:id',element:<VehicleDetailPage/>},{path:'/services',element:<ServicesPage/>},{path:'/about',element:<AboutPage/>},{path:'/quote',element:<QuotePage/>},{path:'/test-drive',element:<TestDrivePage/>},{path:'*',element:<NotFoundPage/>}]}])
