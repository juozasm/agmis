import React from 'react';
import * as actions from '../actions/WarehouseActions';
import {HeaderContainer} from '../styled-components/HeaderContainer';
import {TextInput} from '../styled-components/TextInput';
import {Dropdown} from '../styled-components/Dropdown';
import {Button} from '../styled-components/Button';
import {connect} from 'react-redux';


 class Header extends React.Component{
  state={
    sort:'desc',
    filter:''
  }
  handleProductsFilter=(e)=>{
    this.setState({
      filter:e.target.value
    })
    this.props.filterProducts(e.target.value);
    this.props.sortProducts(this.state.sort);

  }
  resetFilters=()=>{
    this.setState({filter:''});
    this.setState({sort:'desc'});
    this.props.filterProducts('');
    this.props.sortProducts('desc');
  }

  handleSort=(e)=>{
    this.setState({sort:e.target.value});
    this.props.sortProducts(e.target.value);
  }
    
    render(){
      return (
        <HeaderContainer>
           <TextInput onChange={this.handleProductsFilter} value={this.state.filter} placeholder="filter products"/>
           <Dropdown onChange={this.handleSort} >
           <option value="desc">Price descending</option>
           <option value="asc">Price ascending</option>
           </Dropdown>
           <Button onClick={this.resetFilters}>Clear filters</Button>
        </HeaderContainer>
 
    )

  }
  

  
 }


export default connect(null, actions)(Header)

