import React from 'react';
import tank from '../img/fuel.png';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
interface Props {
    value: number;
}

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 4,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? '#1affb3' : '#30e8ba',
    },
}));

const Fueltank: React.FC<Props> = ({ value }) => {
    return (

        <div className="absolute top-[77%] left-[10.5%] w-[80px] fuel">
            <p className="text-white/60 text-[11px] absolute bottom-[2px]">F</p>
            <img className="w-[13px] ml-[40%] mb-[3px]" src={tank} alt='tank' />
            <p className="text-white/60 text-[11px] absolute bottom-[2px] right-[0%]">E</p>
            <BorderLinearProgress variant="determinate" value={value} />
        </div>

    );
}

export default Fueltank;