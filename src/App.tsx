import { Routes, Route } from 'react-router-dom';
import './globals.css';

import Authlayout from './_auth/Authlayout';

import Signup from './_auth/forms/Signup';
import Signinform from './_auth/forms/Signinform';
import { Home } from './_root/pages';
import Rootlayout from './_root/Rootlayout';
import Random from './_root/pages/random';

const App = () => {
  return (
    <main className='flex h-screen'>
      <Routes>
        {/*Public Route  */}
        <Route element={<Authlayout />}>
          <Route path='/sign-in' element={<Signinform />} />
          <Route path='/sign-up' element={<Signup />} />
          <Route path='/random' element={<Random />} />

          {/*Private Route  */}
          <Route element={<Rootlayout />}>
            <Route index element={<Home />} />
          </Route>
        </Route>
      </Routes>
    </main>
  );
};

export default App;
