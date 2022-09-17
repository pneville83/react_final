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
            <a href="#know">My Knowledge</a>
            <a href='#work'>let's Work</a>
            <a href="mailto:neville.peter.2000@gmail.com">Contact Me</a>
          </div>
        </nav>
        
    </div>
  );
}
export default NavBar;