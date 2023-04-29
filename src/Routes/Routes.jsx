import Main from "../Layout/Main";
import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../Layout/NewsLayout";
import News from "../pages/News/News/News";
import LoginLayout from "../Layout/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Login/Register";
import PrivateRoute from "./PrivateRoute";
import Terms from "../pages/Shared/Terms/Terms";



const router = createBrowserRouter([
    {
path:'/',
element:<LoginLayout></LoginLayout>,
children:[
    {
path:'/',
element:<Navigate to="/category/0"></Navigate>
    },
    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'register',
        element:<Register></Register>
    },
    {
        path:'terms',
        element:<Terms></Terms>
    }
]
    },
    {
        path: "category",
        element: <Main></Main>,
        children:[
          
            {
                path:':id',
                element:<Category></Category>,
                loader:({params})=>fetch(`https://the-news-dragon-server-soikotdeb.vercel.app/categories/${params.id}`)
            }
         
        ]
      },
      {
        path:'news',
        element:<NewsLayout></NewsLayout>,
        children:[
            {
                path:':id',
                element:<PrivateRoute><News></News></PrivateRoute>,
                loader:({params})=>fetch(`https://the-news-dragon-server-soikotdeb.vercel.app/news/${params.id}`)
            
            }
        ]
      }
])

export default router;
