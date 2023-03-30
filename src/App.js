import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Bookstore from './components/Bookstore';
import Categories from './components/Categories';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Bookstore />,
  },
  {
    path: '/categories',
    element: <Categories />,
  },
]);

const App = () => (
  <div className="App">
    <RouterProvider router={router} />
  </div>
);

export default App;
