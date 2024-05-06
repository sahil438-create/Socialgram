import { Outlet, Navigate } from 'react-router-dom';
import Signup from './forms/Signup';
import Rootlayout from '@/_root/Rootlayout';
const Authlayout = () => {
  const isAuthenticated = false;
  return (
    <>
      {isAuthenticated ? (
        <Navigate to='/random' />
      ) : (
        <>
          <section className='flex flex-1 justify-center items-center flex-col py-10'>
            this is working
            <Outlet />
          </section>

          <img
            src='/assets/images/side-img.svg'
            className='hidden xl:block h-screen w-1/2 object-cover bg-no-repeat '
            alt='logo'
          />
        </>
      )}
    </>
  );
};

export default Authlayout;
