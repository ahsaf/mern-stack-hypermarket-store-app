import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './pages.css'
import './bootstrap.css';




class Navbar extends Component {
  state = {
    show:false
  }
  click = () =>{
    if(this.state.show){
      this.setState({show:false});
    }else{
      this.setState({show:true});
    
    }
    
  }
  logout = () =>{
    localStorage.clear();
    this.props.history.push('/');
    window.location.reload();
    
  }


  render() {
    let manager = <Link className="py-2 d-none d-md-inline-block" to ="/manage">Mange</Link>
    
    let slide;
    if(this.state.show){
      slide = <div className='logout'><label onClick={this.logout}>Logout</label></div>
    }
    

    return (
      <div className="Navbar">




          <nav className="site-header sticky-top py-1">
            <div className="container d-flex flex-column flex-md-row justify-content-between">

              <Link className="py-2 d-none d-md-inline-block" to="/sell">Sell</Link>
              <Link className="py-2 d-none d-md-inline-block" to="/stock">Stock</Link>
              <Link className="py-2 d-none d-md-inline-block" to="/adding">Add</Link>
              <label className="py-2 d-none d-md-inline-block" onClick={this.click}>{localStorage.getItem('username') }</label>
              {manager}
              
            </div>
          </nav>
          {slide}
          
         


      </div>
    );
  }
}

class Show extends Component{
  render () {
    return(
      <label>Logout</label>
    )
  }
}


export default Navbar;
