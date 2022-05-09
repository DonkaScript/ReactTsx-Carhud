import React, { useState } from 'react';
import './App.css'
import { debugData } from "../utils/debugData";
import bg from '../img/image2.jpg';

import VehTires from '../contents/VehTires';
import EngineHealth from '../contents/Engine';
import Fueltank from '../contents/Fuel';
import KmhBar from '../contents/Kmh';
import GearBar from '../contents/Gear';

import tire1 from '../img/tires-1.png';
import tire2 from '../img/tires-2.png';
import tire3 from '../img/tires-3.png';
import tire4 from '../img/tires-4.png';

import tireb1 from '../img/tiresb-1.png';
import tireb2 from '../img/tiresb-2.png';
import tireb3 from '../img/tiresb-3.png';
import tireb4 from '../img/tiresb-4.png';

const data = [
  { tire: 'front-left', stat: 0, img1: tire1, img2: tireb1 },
  { tire: 'front-right', stat: 0, img1: tire2, img2: tireb2 },
  { tire: 'back-left', stat: 0, img1: tire3, img2: tireb3 },
  { tire: 'back-right', stat: 0, img1: tire4, img2: tireb4 },
]


debugData([
  {
    action: 'setVisible',
    data: true,
  }
])

const App: React.FC = () => {

  return (
    <div className="nui-wrapper">
      <div className='flex justify-center items-center'>
        <div className='clip-path dashboard bg-gradient-to-t from-black/50 to-black-10 rounded-full absolute bottom-[-4%] flex items-center justify-center'>

          <KmhBar value={40} km={100} />
          <GearBar value={42} gear={2} />
          <Fueltank value={50} />
          <EngineHealth value={50} />
          <VehTires tires={data}/>

        </div>
        <img src={bg} alt='bg' className='bg-img w-full h-full' />
      </div>
    </div>
  );
}

export default App;
