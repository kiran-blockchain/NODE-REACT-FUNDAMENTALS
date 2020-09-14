import React, { Component } from 'react';
import Header from './components/Header'
import { LoginComponent } from './components/Login'
import { Register } from './components/Register';
import ProductList from './components/ProductList';
//This is called pure component or stateless Component
export class App extends Component {
   constructor(){
       super();
       this.state={
           companyName:"",
           cartCount:0
       }
   }
 handleClick=(data)=>{
    console.log(data);
    //props.handleClick(data);
    this.setState({cartCount:this.state.cartCount+1})

}
    render() {
        return <div>
            <Header title={this.state.companyName} 
            cartCount={this.state.cartCount} />
            {/*ProudctList*/}
            <ProductList 
            updateCartInApp={this.handleClick}
            />
        </div>;
    }
};

export default App;

