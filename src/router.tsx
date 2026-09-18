import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './components/Layout'
import { HomePage, VehiclesPage, VehicleDetailPage, ServicesPage, QuotePage, TestDrivePage, NotFoundPage } from './pages'
export const router=createBrowserRouter([{element:<Layout/>,children:[{path:'/',element:<HomePage/>},{path:'/vehicles',element:<VehiclesPage/>},{path:'/vehicles/:id',element:<VehicleDetailPage/>},{path:'/services',element:<ServicesPage/>},{path:'/quote',element:<QuotePage/>},{path:'/test-drive',element:<TestDrivePage/>},{path:'*',element:<NotFoundPage/>}]}])
