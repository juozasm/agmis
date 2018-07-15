import React from 'react';
import {AppWrapper} from '../styled-components/AppWrapper';
import {Button} from '../styled-components/Button';
import {Title} from '../styled-components/Title';


class Home extends React.Component {
  state = {
    animate: false,
  };
  redirect = () => {
    // redirect
    
    setTimeout(() => {    
      this.props.history.push('/warehouse')
    }, 1000);
    this.setState({animate: true})
    
  };

  render() {
    return (
        <AppWrapper position="center" 
            onClick={this.redirect}>
            <Title>Warehouse App</Title>
            <Button  animate={this.state.animate}>Enter Warehouse</Button>
        </AppWrapper>
        
    );
  }
}
export default Home