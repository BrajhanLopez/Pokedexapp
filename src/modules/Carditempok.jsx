import React from 'react';

const Carditempok = ({ name, img, pok }) => {
   //console.log(pok.stats[0].base_stat);
// borde y medio fondo
const styl = `Card-pokes ${pok.types[0].type.name}` 
const styl2 = `container-red c-${pok.types[0].type.name}` 

const styname = `card-nam n-${pok.types[0].type.name}` 
const styval = `color-n n-${pok.types[0].type.name}` 

console.log(styl2);
   return (
      <div className={styl}>
         <div className={styl2}>
            <img className='img-card1' src={img} alt="" />
         </div>

         <h2 className={styname}>{name}</h2>
         <div className='mmm'>
         {
            pok.types.map((p,i) => (

               
               <h4 key={i} className='card-t'>{p.type.name} </h4>

            ))
         }
</div>
         <p id='tipo'>Tipo</p>

         <hr color='#E5E5E5' />
         <div className='div-data'>
            <div>
               <p className='color-c'>HP</p>
               <p className={styval}> <b> {pok.stats[0].base_stat} </b></p>
            </div>
            <div>
               <p className='color-c'>ATAQUE</p>
               <p className={styval}> <b> {pok.stats[1].base_stat}</b></p>
            </div>
            <div>
               <p className='color-c'>DEFENSA</p>
               <p className={styval}> <b> {pok.stats[2].base_stat}</b></p>
            </div>
            <div>
               <p className='color-c'>VELOCIDAD</p>
               <p className={styval}> <b> {pok.stats[5].base_stat}</b></p>
            </div>
         </div>


      </div>
   );
};

export default Carditempok;