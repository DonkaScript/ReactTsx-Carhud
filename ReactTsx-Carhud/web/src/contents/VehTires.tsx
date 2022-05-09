import React from 'react';
import light from '../img/low.png';
import belt from '../img/belt.png';
import veh from '../img/car.png';
import TiresContents from "../contents/Tires";

interface Props {
    tires: TiresData[];
}

type TiresData = {
    tire: string;
    stat: number;
    img1: string;
    img2: string;
}

const VehTires: React.FC<Props> = ({tires}) => {

    return (
        <div>

            <img className="w-7 rounded-full p-1.5 bg-black absolute top-1.5 left-1/3" src={light} alt="light" />
            <img className="w-28 relative" src={veh} alt='veh' />
            <img className="w-7 rounded-full p-1.5 bg-sky-700 absolute top-1.5 right-1/3" src={belt} alt="belt" />

            <TiresContents tires={tires}/>

        </div>
    );
}

export default VehTires;