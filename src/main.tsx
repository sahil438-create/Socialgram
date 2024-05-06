import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
