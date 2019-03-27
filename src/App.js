import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';

const customers=[
{
  'id': 777,
  'image':'https://placeimg.com/64/64/1',
  'name':'유진호',
  'birthday':'901031',
  'gender':'man',
  'job':'사회인'
},
{
  'id': 444,
  'image':'https://placeimg.com/64/64/2',
  'name':'유진호',
  'birthday':'901031',
  'gender':'man',
  'job':'사회인'
},
{
  'id': 555,
  'image':'https://placeimg.com/64/64/3',
  'name':'유진호',
  'birthday':'901031',
  'gender':'man',
  'job':'사회인'
}
]


class App extends Component {
  render() {
    return (
      <div>
      {
        customers.map(c =>{
          return(
            <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
            />
          );
        })
      }
      </div>
    );
  }
}


export default App;
