import React, { useState } from 'react'
import Card from '../components/Cards'
import data from '../../src/data.json'
import { NavLink } from 'react-router-dom'
import SearchBar from '../components/SearchBar'

function HomePage () {
  // Hook(useState) to store the current state of data in jobs variable
  const [jobs,setJobs] = useState(data.Jobs)

  const filterJobs = ({ term, location, fullTime }) => {
    let filteredJobs = jobs;

// Filter by location
    if (location){
      filteredJobs = filteredJobs.filter((job) =>
        job.location.toLocaleLowerCase().includes(location.toLocaleLowerCase())
      )}
      
      // Filter by Full Time
    if (fullTime){
      filteredJobs = filteredJobs.filter((job) => job.contract === "Full Time")
    }


      // Filter jobs by position and company based on input
    if (term){
      filteredJobs = filteredJobs.filter((job) => {
        const string = (job.position + job.company).toLocaleLowerCase();
        return string.includes(term.toLocaleLowerCase());
      })}

    // Refresh entire components only if term, location and fuulTime are empty
    if (!term && !fullTime && !location){
        window.location.reload(false)
    }
    
    // Updating Jobs by calling filteredJobs using setJobs 
    setJobs(filteredJobs);
  };

  return (

    <div>
        <div className="cards">
        <SearchBar filter={(searchFields) => filterJobs(searchFields)}/>
          </div>
          <div className="cards">
          {jobs.map(job => (
          <NavLink to={job.id.toString()} key={job.id}>
          <Card
                logo={job.logo}
                key={job.id}
                color={job.logoBackground}
                posted={job.postedAt}
                contract={job.contract}
                position={job.position}
                company={job.company}
                location={job.location}
                  
                />
          </NavLink>
        ))}
          </div>
          <div className="button_LM">
              
              <button className="LM-button">
              <p className="LM-button-text">Learn More</p>
              </button>
              </div>
          </div>

 
    
  )
}

export default HomePage