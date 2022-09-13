import './Portfolio.css';
import Cripto from './Images/criptomoneda.png';
import Weather from './Images/clima.png';
import Delivery from './Images/delivery.png';


function Portfolio (){

  const weather = 'https://api-weather-js-delta.vercel.app/';
  const crypto = 'https://api-cripto-js.vercel.app/'
  const delivery = 'https://proyecto-final-html-css-five.vercel.app/'


  return (
    <div className="portfolio" id="portfolio">
      <div className='porjects' id="project1">
        <img src={Cripto} alt='currency' width={400} height={200} />
        <h3 className='Title'>Cryptocurrency Quoter</h3>
        <p className='description'>It allows you to quote the top 10 cryptocurrencies </p>
        <a href={crypto} target='_blank' rel="noreferrer" class="myButton">Check It!!</a>
      </div>
      <div className='porjects' id="project2" >
        <img src={Weather} alt='weather' width={400} height={200}/>
        <h3 className='Title'>The weather in your city</h3>
        <p className='description'>It allows you to know the weather in your city</p>
        <a href={weather} target='_blank' rel="noreferrer" class='myButton'> Check It!!</a>
      </div>
      <div className='porjects' id="project3" >
        <img src={Delivery} alt='delivery' width={400} height={200} />
        <h3 className='Title'>Delivery Express</h3>
        <p className='description'>A front-end development of a delivery company</p>
        <a href={delivery} target='_blank' rel="noreferrer" class='myButton'> Check It!!</a>
      </div>
    </div>
  );
}
export default Portfolio;