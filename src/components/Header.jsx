import React from 'react';
import Fondo from '../assets/img/Header.jpg'; // Importa la imagen

const Header = () => {
    return (
        <header style={{...headerStyle, backgroundImage: `url(${Fondo})`}}>
            <h1 style={titleStyle}>Pizzería Mamma Mía</h1>
        </header>
    );
};

const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '200px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fff',
};

const titleStyle = {
    fontSize: '36px',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
};

export default Header;
