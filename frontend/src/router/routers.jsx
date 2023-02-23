import { createBrowserRouter } from 'react-router-dom'
import NavBar from '../components/navbar/navbar'
import AddProductPage from '../components/pages/addProduct/addProductPage'
import ProductsListPage from '../components/pages/productsList/productsListPage'

const router = createBrowserRouter([
    {
        path: '/',
        element: <NavBar />,
        children: [
            {
                path: 'productList',
                element: <ProductsListPage/>
            },
            {
                path: 'addProduct',
                element: <AddProductPage/>
            },
        ]

    },
    {
        path: 'login',
        element: <div>login</div>
    },
    {
        path: 'register',
        element: <div>register</div>
    }
])

export default router