
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button} from 'bootstrap';
import Navbar from './components/Navbar/Navbarr';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Navbar/Main/Main';
import Home from './components/Home/Home';
import Topics from './components/Topics/Topics';
import Statics from './components/Statics/Statics';
import Blog from './components/Blog/Blog';

function App() {
  const router=createBrowserRouter([
{
  path:'/',
  element:<Main></Main>,
  children:[
    {
      path:'/home',
    
      element:<Home></Home>
    },
    {
      path:'/topics',
      element: <Topics></Topics>
    },
    {
      path:'/statics',
      element: <Statics></Statics>
    },
    {
      path:'/blog',
      element:<Blog></Blog>
    }

  ]
}

  ])
  return (
    <div className="App">

      <RouterProvider router={router}></RouterProvider>
  


    </div>
  );
}

export default App;
