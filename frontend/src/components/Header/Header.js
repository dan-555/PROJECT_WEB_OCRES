import React from 'react'
import './Header.css';
import  {Navbar,Container} from 'react-bootstrap';
import { Link } from "react-router-dom";

function Header() {
  return (

<header>
    
        <Navbar className="Header">
            <Container >
                  <Navbar.Brand className="mr-auto p-2" href="" >
                    <span className="TextColor">INVESTORS DASHBOARD</span>
                  </Navbar.Brand>


                  <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
                  <Link to="/">
                              <button style={{marginRight:"20px"}} className="btn navbar-right float-right" type="submit">
                                    Widgets
                              </button>
                  </Link>
                  <Link to="/AdminControl">

                              <button className="float-right btn navbar-right" type="submit" >
                                    Admin
                              </button>
                  </Link>
                </div>
                          
                  
                  
                  
                  
                



            </Container>
        </Navbar>
</header>  
  );
}

export default Header;
