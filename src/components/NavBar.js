import './NavBar.css'; 


function NavBar (){
  return(
    <div className="menu">
        <nav class="navbar">
          <div className="me">
            <a href='/'>Peter Neville</a>
          </div>
          <div className="menu_bar">
            <a href="#portfolio">Portfolio</a>
            <a href='#work'>let's Work</a>
          </div>
        </nav>
        
    </div>
  );
}
export default NavBar;