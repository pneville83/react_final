import NavBar from './components/NavBar';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Knowledge from './components/Knowledge';
import Form from './components/Forms/Form';
import Links from './components/Links'
import Likes from './components/Likes';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <About/>   
      <Portfolio />
      <Likes />
      <Knowledge />
      < Form />
      <Links />
    </div>
  );
}
export default App;
