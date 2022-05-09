import React from 'react';
import CircularProgress, { circularProgressClasses } from '@mui/material/CircularProgress';

interface Props {
    value: number;
    km: number;
}

const CircleBar: React.FC<Props> = ({ value, km }) => {
    return (

        <div>
            <div className="absolute left-3 bottom-2.5 rotate-[216.5deg]">
                <CircularProgress
                    variant="determinate"
                    sx={{
                        color: (theme) =>
                            theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
                    }}
                    size={160}
                    thickness={1}
                    value={80}
                />
            </div>

            <div className="font-prompt absolute left-[12%] bottom-16 ">
                <div className="text-white text-4xl text-center">{km}</div>
                <div className="text-white/60">KM/H</div>
            </div>

            <div className="absolute left-3 bottom-2.5 rotate-[216.5deg]">
                <CircularProgress
                    variant="determinate"
                    disableShrink
                    value={value}
                    sx={{
                        color: (theme) => (theme.palette.mode === 'light' ? '#1acaff' : '#30cce8'),
                        animationDuration: '550ms',
                        position: 'relative',
                        left: 0,
                        [`& .${circularProgressClasses.circle}`]: {
                            strokeLinecap: 'round',
                        },
                    }}
                    size={160}
                    thickness={1}
                />
            </div>
        </div>

    );

}

export default CircleBar;