import React from 'react';
import CircularProgress, { circularProgressClasses } from '@mui/material/CircularProgress';
interface Props {
    value: number;
    gear: number;
}

const GearBar: React.FC<Props> = ({ value, gear }) => {
    return (

        <div>
            <div className="absolute right-2.5 bottom-2.5 rotate-[216.5deg]">
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

            <div className="font-prompt absolute right-[16.5%] bottom-16 ">
                <div className="text-white text-4xl text-center relative left-1.5">{gear}</div>
                <div className="text-white/60 relative left-1.5">Gear</div>
            </div>


            <div className="absolute right-2.5 bottom-2.5 rotate-[216.5deg]">
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

export default GearBar;