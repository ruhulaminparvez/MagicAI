import router from './Router/Routes';
import './style/App.css'
import '@splidejs/react-splide/css';
import { RouterProvider } from 'react-router-dom';

function App() {

  return (
    <main>
      <RouterProvider router={router} />
    </main>
  )
}

export default App
