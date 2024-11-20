import logo from './logo.svg';
import './App.css';
import data from './data';
import SingleQuestion from './Questions';
import { useState } from 'react';

function App() {
  const[questions, setQuestions] = useState(data);
  return <main>
      <div className="container">
        <h3>Questions and answes about login</h3>
      
      <section className="info">
        {
          questions.map((question)=>{
            return <SingleQuestion key={question.id} {...question}/>;
          })
        }
      </section>
      </div>
    </main>
  
}

export default App;
