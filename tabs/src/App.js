import logo from './logo.svg';
import './App.css';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { useEffect, useState } from 'react';
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const[loading, setLoading] = useState(true)
  const[jobs, setJobs] = useState([])
  const[value, setValue] = useState(0)
  const fetchJobs = async () => {
    const reponse = await fetch(url)
    const newJobs = await reponse.json()
    setJobs(newJobs)
    setLoading(false)
  }
  useEffect(() => {
    fetchJobs()
  }, [])
  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    )
  }
  const { company, dates, duties, title } = jobs[value]

  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((item, index)=>{
              return(
                <button key={item.id} 
                onClick={()=>setValue(index)} 
                className={`job-btn ${index===value && 'active-btn'}`}>{item.company}
                </button>
              )
            })
          }
        </div>
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-dates">{dates}</p>
          {duties.map((duty, index)=>{
            return(
              <div className="job-desc" key={index}>
                <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            )
          })}
        </article>
      </div>
      <button className="btn" type='button'>More Info</button>

    </section>
   
  );
}

export default App;
