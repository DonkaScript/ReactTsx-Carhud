import React from "react";
interface Props {
    stat: number;
    img1: string;
    img2: string;
}

const TiresClass: React.FC<Props> = ({stat, img1, img2}) => {

    if (stat === 0) {
        return <img className="w-28 absolute top-[25%] z-[-1]" src={img1} alt="tire" />
    } else {
        return <img className="w-28 absolute top-[25%] z-[-1]" src={img2} alt="tire" />
    }

}

export default TiresClass;