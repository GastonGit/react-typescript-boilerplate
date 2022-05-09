import React, { useEffect } from 'react';
import '../styles/App.css';
import Boil from '../lib/Boil';

const boil = new Boil('rice');

export default function App(): JSX.Element {
    useEffect(() => {
        boil.boilFood();
    }, []);

    const food = boil.getBoiledFood();

    return (
        <div className="app">
            <header className="app__header">
                <p>{food}</p>
            </header>
        </div>
    );
}
