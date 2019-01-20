import React from 'react';
import logo from './logo.png';
import style from './style.module.css';

const Logo = ({ size }) => (
    <div className={style.container}>
        <img className={style.content} width={size} src={logo} alt="FitLife" />
    </div>
);

export default Logo;