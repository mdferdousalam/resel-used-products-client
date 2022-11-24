
import { RouterProvider } from 'react-router-dom';
import router from './routes/Routes';
function App() {
  return (
    <div className='max-w-[1440px] mx-auto bg-base-100'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
