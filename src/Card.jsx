//in jsx class is a resereved keyword hence instead of using  class as we did in pure html we use ClassName
import profilePic from './assets/sunflower.jpeg'
function Card(){

    return(
<div className="card">
    <img src={profilePic} alt="flower picture" className='image'></img>
    <h2 ClassName='card--title'>Flowers</h2>
    <p>Lorem ipsum dolor sit amet consectetur<br></br> adipisicing elit. </p>

</div>
    );
}
export default Card;