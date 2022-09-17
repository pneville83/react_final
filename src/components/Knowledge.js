import React1 from './Images/react.png';
import Html from './Images/html.png';
import Java from './Images/javas.png';
import Sass from './Images/sass.png';
import Css from './Images/css.png';
import Jest from './Images/jest.png';
import ReactTesting from './Images/reactTesting.png';
import './Knowledge.css';


function knowledge (){

  return (
    <div className='knowledge' id="know">
        <h2>My knowledge</h2>
        <div className='icons'>
         <img src={Html} alt='html' />
         <img src={Css} alt='css' />
         <img src={Java} alt='javaScript' />
         <img src={React1} alt='react' />
         <img src={Sass} alt='sass' />
        </div> 
        <div>
        <img src={Jest} alt='jest' />
        <img src={ReactTesting} alt='reactTesting' />
        </div>
      </div>
  );
}
export default knowledge;