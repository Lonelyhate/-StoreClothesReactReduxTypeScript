import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './Logo.scss';

interface LogoProps {
    name: string;
    description: string;
    fontSizeName: number;
    fontSizeDescr: number;
}

const Logo: FC<LogoProps> = ({ name, description, fontSizeName, fontSizeDescr }) => {
    return (
        <div className="logo">
            <Link to="/">
                <h3 style={{ fontSize: `${fontSizeName}px` }} className="logo__name">
                    {name}
                </h3>
                <p style={{ fontSize: `${fontSizeDescr}px` }} className="logo__text">
                    {description}
                </p>
            </Link>
        </div>
    );
};

export default Logo;
