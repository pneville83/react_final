import './Portfolio.css';
import Cripto from './Images/criptomoneda.png';
import Weather from './Images/clima.png';
import Delivery from './Images/delivery.png';
import { Link, Router } from 'wouter';

function Portfolio (){
  return (
    <div className="portfolio" id="portfolio">
      <div className='porjects' id="project1">
        <img src={Cripto} alt='currency'/>
        <h3 className='Title'>Cryptocurrency Quoter</h3>
        <p className='description'>It allows you to quote the top 10 cryptocurrencies of the moment</p>
        <div className='btn'>Check it</div>
      </div>
      <div className='porjects' id="project2" >
        <img src={Weather} alt='currency'/>
        <h3 className='Title'>The weather in your city</h3>
        <p className='description'>It allows you to know the weather in your city</p>
        <div className='btn'>Check it</div>
      </div>
      <div className='porjects' id="project3" >
        <img src={Delivery} alt='currency'/>
        <h3 className='Title'>Delivery Express</h3>
        <p className='description'>A front-end development of a delivery company</p>
        <div className='btn'>Check it</div>
      </div>
    </div>
  );
}
export default Portfolio;