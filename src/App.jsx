import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import ProfilePage from './pages/Profile';
import GaleryPage from './pages/Galery';

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/our-galery' element={<GaleryPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
