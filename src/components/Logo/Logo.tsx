import React, { FC } from 'react';
import './Logo.scss'

interface LogoProps {
    name: string;
    description: string;
    fontSizeName: number;
    fontSizeDescr: number;
}

const Logo: FC<LogoProps> = ({ name, description, fontSizeName, fontSizeDescr }) => {
    return (
        <div className="logo">
            <h3 style={{ fontSize: `${fontSizeName}px` }} className="logo__name">
                {name}
            </h3>
            <p style={{fontSize: `${fontSizeDescr}`}} className="logo__text">{description}</p>
        </div>
    );
};

export default Logo;
