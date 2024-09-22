export default function Componente(){
    const fuente ='https:/i.imgur.com/7vQD0fPs.jpg';
    const description = 'Personaje';
    return( 
       <img 
          className="avatar"
          src={fuente}
          alt={description}
       />   
    )
 }