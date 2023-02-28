import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import PMAdd from "../pages/PMAdd";
import NotFound from "../pages/NotFound";
import PMList from "../pages/PMList";
import PMDetails from "../pages/PMDetails";
import PMEdit from "../pages/PMEdit";


//Configuracion de Rutas que van  Existir en ese apartado


export default createBrowserRouter([
    {
        path:'/',
        element: <Layout/>,
        errorElement:<NotFound />,
        children:[
            {
                index:true,
                element: <PMAdd />
            },
            {
                path:'pmlist',
                element:<PMList/>
            },
            {
                path:'pmlist/:id',
                element:<PMDetails/>
            },
            {
                path:'pmlist/:id/edit',
                element:<PMEdit/>
            }
        ]
    }
])