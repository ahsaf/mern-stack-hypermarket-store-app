
import React, { Component } from 'react';
import './pages.css';
import './bootstrap.css';
import Navbar from './navbar.js';
import { getUsers } from '../actions/itemActions';
import { deleteUser } from '../actions/itemActions';
import { connect } from 'react-redux';
import  setAuthToken from './../actions/aaxios';
import PropTypes from 'prop-types';
import axios from 'axios';
import Link from 'react-router-dom/Link';

class Manage extends Component {

  componentDidMount(){
    this.props.getUsers();
  }
  remove = (e) =>{
    const id = e.target.id;
   // deleteUser(id)
    axios.get(`/user/${id}`).then(res => console.log(res)
    );
    window.location.reload();
  }

  
  
  render() {
    setAuthToken(localStorage.getItem('jwttoken'));
    if(!localStorage.getItem('username')){
      this.props.history.push('/');
    }
    const { users } = this.props.user;
    
 
    return (
      <div>
          <Navbar history={this.props.history}/>
        <Link to="/registor"><button className="btn btn-success registor" >Add User </button></Link><br />
        <label className='registor'>Users</label>
        <br />
      <div className='tablehead'>
      <h5 className='thcount'>Count</h5>
        <h5 className='thid'>Name</h5>
        <h5 className='mhusername'>User Name</h5>
        <h5 className='mhemail'>Email</h5>
        <h5 className='mhphone'>Phone</h5>
        <h5 className='mhaddress'>Address</h5>
        
      </div>
         <ul>
        {
          users.map((user, index) => {
            return (
              <div key={user._id}>
            <br />
            <br />
              <li className='liitem'>
                <label className='slcount' >{index+1}</label>
                <label className='slid'>{user.fullname}</label>
                <label className='mhusername'>{user.username}</label>
                <label className='mhemail'>{user.email}</label>
                <label className='mhphone'>{user.phone}</label>
                <label className='mhaddress'>{user.address}</label>
                
                <button className="btn btn-danger removeuser" id={user._id}onClick={
                  this.remove.bind(this)
                  
                  }>Remove User</button>
                </li>
                </div>
          
            )
          })     }
      </ul>
          
      </div>
    );
  }
}

Manage.propTypes = {
  getUsers: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  user: state.user
});


export default connect(mapStateToProps, {getUsers}) (Manage);
