import './Links.css';
import Git from './Images/github.png';
import Linke from './Images/linkedin.png';


function Links (){

  const gitHub= 'https://github.com/pneville83';
  const linkedIn= 'https://www.linkedin.com/in/peter-neville-3256ab84/';
  return (

    

    <div className='social'>
      <a target='_blank' href={gitHub} alt="github" rel="noreferrer">
        <img className='network' src={Git} alt='github'/>
      </a>
      <a target='_blank' href={linkedIn} rel="noreferrer" >
        <img className='network' src={Linke} alt='Linkedin'/>
      </a>
    </div>
  );   
}
export default Links;