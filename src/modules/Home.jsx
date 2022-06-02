import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Home = ({getname}) => {
    const [name, setname] = useState(
        window.localStorage.getItem('text')        
    )
    
const next = () => {
getname(name)

    }

const setlocalstorage =  value => {
setname(value)
window.localStorage.setItem("text",value)

}


    return (
        <div className='layout'>

            <header className="header">
                
            </header>
            <main className="main">
                <img src="https://i.postimg.cc/jSJHr8Xy/imagepoke.png" alt="titulo" />
                <h1>¡Hola entrenador!</h1>
                <h3>Para poder comenzar, dame tu nombre</h3>

                <div>
                    <input  className='input-home' type="text" placeholder='Tu nombre ...' onChange={e=>setlocalstorage(e.target.value)} value={name}/>

                    <Link to='/pokedex'>
                        <button className='button-home' onClick={next}>Comenzar</button>
                        </Link> :
                       
                    
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