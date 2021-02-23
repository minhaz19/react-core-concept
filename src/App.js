import logo from './logo.svg';
import './App.css';
import { getQueriesForElement } from '@testing-library/react';
import { useEffect, useState } from 'react';

function App() {
  const person1={
    name:"Minhaz",
    age: 24,
    job:"nothing"
  }
  const person2={
    name:"Suraiya",
    age:24,
    job:"nothing"
  }

  const products =[
    {name:'pdf',price:'$39'},
    {name:'Ebook',price:'$100'},
    {name:'mobile',price:'$200'}
  ]
  const nayoks = ['Razzak','Sakib','Shuvo','Siam']

  let style = {
    color: "green",
    backgroundColor:"yellow"
  }
  return (
    <div className="App">
      <header className="App-header">
        <h4 style ={style}>{person1.name} and {person2.name} has {person1.job} to do in there life.just they want to get support from one another </h4>
        <p style ={{color: "white",
          backgroundColor:"orange"}}>they are already {person2.age}</p>
          <Counter></Counter>
          <ul>
          {
            nayoks.map(nayok =><li>{nayok}</li> )
          }
          {
            products.map(pd => <li>{pd.name}</li>)
          }
          </ul>
          <Users></Users>
          {
            products.map(pd=><Product product={pd}></Product>)
          }
        <Person name={person1.name} job={person1.job}></Person>
        <Person name={person2.name} job={person2.job}></Person>
        
        {/* <Product product={products[0]}></Product>
        <Product product ={products[1]}></Product>
        <Product product ={products[2]}></Product> */}

      </header>
    </div>
  );
}

function Person(props){
  const personStyle={
    border:"1px solid red",
    margin:"10px",
    width:"500px"
  }
  return(
    <div style={personStyle}>
      <h1>Name: {props.name}</h1>
      <h3>Job: {props.job}</h3>
    </div>
  )
}

function Product(props) {
  const productStyle = {
    border:"1px solid grey",
    borderRadius:'5px',
    height:"300px",
    width:"200px",
    backgroundColor:"tomato",
    float:"left"
  }
  const {name,price} = props.product;
  return (
    <div style = {productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}

function Counter() {
  const [count,setCount] =useState(10);
  // const counter = () => setCount(count +1);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count +1)}>Increase</button>
      <button onClick ={() =>setCount(count - 1)}>Decrease</button>
    </div>
  )
}

function Users() {
  const [user,setUser] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUser(data))
  })

  return (
  <ul>
    {
      user.map((info) => <li>{info.phone}</li> )
    }
  </ul>
  )
}

export default App;
