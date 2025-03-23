import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Notification from './components/Notification';
import Hero from './components/Hero';
import Logogallery from './components/Logogallery';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-center">
      <div className="max-w-[1750px]">
        <div className="px-5 xl:px-52 pt-3">
          <Navbar />
          <Notification />
        </div>
        <div className="px-5 pt-3 md:px-14 xl:px-60">
          <Hero />
          <Logogallery />
        </div>
      </div>
    </div>
  );
}

export default App;
