import React from 'react';
import { styled } from '@mui/material/styles';
import tool from '../img/tool.png';
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

const EngineHealth: React.FC<Props> = ({value}) => {
    
    return (

        <div className="absolute top-[77%] right-[10.8%] w-[80px] engine">
            <p className="text-white/60 text-[10px] absolute bottom-[2px]">H</p>
            <img className="w-[13px] ml-[40%] mb-[3px]" src={tool} alt='tank' />
            <p className="text-white/60 text-[10px] absolute bottom-[2px] right-[0%]">C</p>
            <BorderLinearProgress variant="determinate" value={value} />
        </div>

    );
}

export default EngineHealth;