import React from 'react';
import TiresClass from '../contents/TiresClass';

interface Props {
    tires: TiresData[];
}

type TiresData = {
    tire: string;
    stat: number;
    img1: string;
    img2: string;
}

const TiresContents: React.FC<Props> = ({ tires }) => {

    
    return (

        <div>

            {tires.map((item) => {

                return <TiresClass stat={item.stat} img1={item.img1} img2={item.img2} />

            })}

        </div>

    );
}

export default TiresContents;