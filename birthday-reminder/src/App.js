import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import List from './list';
import data from './data';

function App() {
  const[people, setPeople] = useState(data);
  return <main>
    <section className='container'>
      <h3>{people.length} birthdays today</h3>
      <List people={people}/>
      <button onClick={()=> setPeople([])}>clear all</button>
    </section>

  </main>
  
}

export default App;
