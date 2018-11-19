
import React, { Component } from 'react';
import './pages.css';
import './bootstrap.css';
import Navbar from './navbar.js';
import { connect } from 'react-redux';
import{ getItems, deleteItem, removeItem} from '../actions/itemActions';
import{ addItems} from '../actions/itemActions';
import PropTypes from 'prop-types';
import axios from 'axios';
import  setAuthToken from './../actions/aaxios';
class Stock extends Component {

  componentDidMount(){
    this.props.getItems();


  }
  click = (e)=>{
    
    const id = e.target.id;
    axios.get(`/item/${id}`)
    window.location.reload();
  }


  render() {
    setAuthToken(localStorage.getItem('jwttoken'));
    if(!localStorage.getItem('username')){
      this.props.history.push('/');
      alert('please login....');
    }
    const { items } = this.props.item;
 
    return (
      <div className="sellingpage App">
      <Navbar history={this.props.history}/>
      <h1>Stock</h1>
      <br />
      <div className='tablehead'>
        <h5 className='thcount'>Count</h5>
        <h5 className='thid'>Id</h5>
        <h5 className='thitem'>Items</h5>
        <h5 className='thpriceone'>Price for one</h5>
        <h5 className='thstockqta'>Stock.Qta</h5>
        
      </div>


      <ul>
        {
          items.map((item, index) => {
            return (
              <div key={item.id}>
            <br />
            <br />
              <li className='liitem'>
                <label className='slcount' >{index+1}</label>
                <label className='slid'>{item.id}</label>
                <label className='slitem'>{item.item}</label>
                <label className='slprice'>{item.price}</label>
                <label className='slqta'>{item.qta}</label>
                <button id ={item.id} className="btn btn-danger removeitem" onClick={
                  
                 
                  
                    this.click.bind(this)
                    
                
                    
                  
                  
                 
                 }>Remove Item</button>
                </li>
                </div>
          
            )
          })     }
      </ul>

      </div>
    );
  }
}

Stock.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  item: state.item
});


export default connect(mapStateToProps, {getItems}) (Stock);
