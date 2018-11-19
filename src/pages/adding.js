
import React, { Component } from 'react';
import './pages.css';
import './bootstrap.css';
import Navbar from './navbar.js';
import { connect } from 'react-redux';
import{ addItems} from '../actions/itemActions';
import PropTypes from 'prop-types';
import  setAuthToken from './../actions/aaxios';
class Adding extends Component {
  state = {
    items:[]
  }

  onsave = () => {
    this.state.items.map(item => {
      this.props.addItems(item);
    })
    this.setState({items:[]});
    
    
  }

 //   onSubmit = (e) => {
 //   e.preventDefault();
  // const newitem = { 
 //    id: this.state.id,
//     item: this.state.item,
 //    qta: this.state.qta,
 //    price: this.state.price

  //  }
    //this.props.additem(newitem);
 // }


  render() {
    setAuthToken(localStorage.getItem('jwttoken'));
    if(!localStorage.getItem('username')){
      this.props.history.push('/');
    }
    return (
      <div className="addingpage App">
      <Navbar history={this.props.history}/>
      <h1>Adding</h1>
      <div className='addingbox'>
      
      <label className='ladd'>Id</label>
      <input type='text' ref='id' className='iid' onChange={this.onChange} />
      <label className='ladd'>Item</label>
      <input type='text' ref='item' className='iitem' onChange={this.onChange} />
      <label className='ladd'>Qta</label>
      <input type='number' ref='qta' className='aiqta' onChange={this.onChange} />
      <label className='ladd'>Price</label>
      <input type='number' ref='price' className='aiprice' onChange={this.onChange} />
      <button className='btn btn-success btnadd btn-sm' onClick={() => {
   const mitem = {
     id : this.refs.id.value,
     item : this.refs.item.value,
     qta : this.refs.qta.value,
     price : this.refs.price.value,
   }
   const nitem = this.state.items.push(mitem)
  this.setState({nitem})
}}>Add</button>
<button className='btn btn-success btnsave btn-sm' onClick={this.onsave} >Save</button>

      <br />
      <br />
      <div className='tablehead'>
        <h5 className='thcount'>Count</h5>
        <h5 className='thid'>Id</h5>
        <h5 className='thitem'>Items</h5>
        <h5 className='thpriceone'>Price for one</h5>
        <h5 className='thstockqta'>Qta</h5>
        
      </div>
      
      <ul className='olselling'>
        
        {this.state.items.map((item, index) =>  {
          return(
            <div key={item.id}>
            <br />
            
          <li className='liitem' >
            <label className='adindex'>{index+1}</label>
            <label className='slid'>{item.id}</label>
            <label className='slitem'>{item.item}</label>
            <label className='slqta'>{item.qta}</label>
            <label className='slprice'>{item.price}</label>
            <button className='addremove btn btn-danger btn-sm' onClick={
            () => {
              
              this.setState({
                items: this.state.items.filter(ite => ite.id !== item.id)
            })
            }

          }>Remove</button></li>
          </div>)})}
      
    </ul>
      </div>
      
      </div>



    );
  }
}
Adding.propTypes = {
  addItems: PropTypes.func.isRequired,
  
}

const mapStateToProps = (state) => ({
  item: state.item
});

export default connect(mapStateToProps, {addItems})(Adding);
