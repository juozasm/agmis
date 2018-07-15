import React from 'react';
import * as actions from '../actions/WarehouseActions';
import Header from './Header';
import {WarehouseContainer} from '../styled-components/WarehouseContainer';
import {AppWrapper} from '../styled-components/AppWrapper';
import {ProductWrapper} from '../styled-components/ProductWrapper';
import {Button} from '../styled-components/Button';
import {Title} from '../styled-components/Title';
import {Price} from '../styled-components/Price';
import {Qty} from '../styled-components/Qty';
import {StyledLink} from '../styled-components/Link';
import {connect} from 'react-redux';
import getFilteredList from '../selectors/selector';
import { RingLoader } from 'react-spinners'
import {Center} from '../styled-components/Center';

class Warehouse extends React.Component {

  // componentDidMount() {
  //   this.props.fetchProducts()
  // }

  state={
    loader:false
  }
  componentWillReceiveProps = (nextProps) => {
    if(nextProps){
      this.stopLoader();
    }
  }
  stopLoader=()=>this.setState({loader:false});
  render() {
    let products=[];
    if(this.props.match.params.item){
      if(this.props.filtered.length===0) this.props.fetchProducts();
      products=this.props.filtered.filter((product)=>product.id===this.props.match.params.item).map(
      (product,i)=> {
        return (

          <ProductWrapper key={i}>
          <Title>{product.name}</Title>
              <p>{product.desc}</p>
              <p>{product.category}</p>
              <Qty>{product.qty}</Qty>
              <Price>{product.price}</Price>
        </ProductWrapper>    
      )
      }
      )
    }else{ 
    
    products=this.props.filtered.map((product, i)=>{ 
      return ( 
       
            <ProductWrapper key={i}>
            <StyledLink to={"/warehouse/"+product.id}>
              <Title>{product.name}</Title>
              <p>{product.desc}</p>
              <p>{product.category}</p>
              <Qty>{product.qty}</Qty>
              <Price>{product.price}</Price>
              </StyledLink> 
          </ProductWrapper>          
        )
  });
    }
      return (
        <AppWrapper>     
        {(this.props.allProducts.length>0 && !this.props.match.params.item)  && <Header/>}
        <WarehouseContainer>
        <Center>
        <RingLoader
        color="#123abc"  
          loading={this.state.loader}
        />
        </Center>
          {products&&products }   
        </WarehouseContainer>
        {!this.props.match.params.item&&
          <Button loaded={(this.props.allProducts.length>0)&&true} onClick={()=>{
          this.props.fetchProducts() 
          this.setState({loader:true})
          }}>Get products</Button>
        }
        </AppWrapper>
    )
  }
}


const mapStateToProps = (state) => {
  return {
      allProducts:state.warehouse,
      filtered:getFilteredList(state.warehouse, state.filters)
      
  };
}


export default connect(mapStateToProps,actions)(Warehouse)

