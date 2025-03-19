import Car from './Car'
import Apple from './Apple';

function Garrage()
{
    //const brand='rolls royce';
    const carInfo={ brand:"Ferrari",color:"Red" }
    //const color='White';
  return (
    <>
    <h2>Who lives inside my car?</h2>
    {/*<Car brand={brand} color={'White'}/>*/}
    <Car carInfo={carInfo}/>
    <Apple/>
    </>
  );
}

export default Garrage;