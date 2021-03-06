/* eslint-disable no-unused-vars */
import { Component } from 'react';
import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import Product from './components/Hook/Product';
import State from './components/State';

class App extends Component {

  showProduct() {
    let products = [
      {
        id: 1,
        name: 'Iphone 12',
        imgurl: 'https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-violet-1-600x600.jpg'
      },
      {
        id: 2,
        name: 'Iphone 13',
        imgurl: 'https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-violet-1-600x600.jpg'
      },
      {
        id: 3,
        name: 'Iphone 14',
        imgurl: 'https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-violet-1-600x600.jpg'
      }
    ]
    let mapproduct = products.map(item => {
      return <Product key={item.id} name={item.name} imgurl={item.imgurl} />
    })
    return mapproduct
  }
  render() {

    return (
      <div className="App">
        <Header/>
        <div className="row">
          {this.showProduct()}
        </div>
       
        <State />
         <Form />
      </div>
    );
  }
}
export default App;
