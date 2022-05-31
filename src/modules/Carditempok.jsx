import React from 'react';

const Carditempok = ({name, img, pok}) => {
  //console.log(pok.stats[0].base_stat);
    return (
        <div className='Card-pokes'>
          <div className='container-red'>
          <img className='img-card1'  src={img} alt="" />
          </div>
          
            <h2 className='card-nam'>{name}</h2>
            <h4 className='card-t'>{pok.types[0].type.name}</h4>
            <p id='tipo'>Tipo</p>
            
            <hr color='#E5E5E5'/>
            <div className='div-data'>
             <div>
               <p className='color-c'>HP</p>
               <p className='color-n'> <b> {pok.stats[0].base_stat} </b></p>  
            </div>   
            <div>
               <p className='color-c'>ATAQUE</p>
               <p className='color-n'> <b> {pok.stats[1].base_stat}</b></p>  
            </div> 
            <div>
               <p className='color-c'>DEFENSA</p>
               <p className='color-n'> <b> {pok.stats[2].base_stat}</b></p>  
            </div> 
            <div>
               <p className='color-c'>VELOCIDAD</p>
               <p className='color-n'> <b> {pok.stats[5].base_stat}</b></p>  
            </div> 
            </div>


        </div>
    );
};

export default Carditempok;