import React from 'react';

const Home = () => {
    return (
        <div className='App layout'>

            <header className="header">
                
            </header>
            <main className="main">
                <img src="./src/images/imagepoke.png" alt="titulo" />
                <h1>¡Hola entrenador!</h1>
                <h3>Para poder comenzar, dame tu nombre</h3>

                <div>
                    <input  className='input-home' type="text" placeholder='Tu nombre ...'/>
                    <button className='button-home'>Comenzar</button>

                </div>



            </main>

            <footer className="footer">
                <div className='rectangle-red'>
                    <div className='rectangle-black'>
                    </div>
                </div>
                <div className='circle-big'>
                    <div className='circle-small'>

                    </div>
                </div>
            </footer>



        </div>
    );
};

export default Home;