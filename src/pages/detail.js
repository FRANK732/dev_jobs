import React from 'react'
import '../App.css'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useLoaderData } from 'react-router-dom'


const Detail =() => {
  // const [job] = useState(data)
  const job = useLoaderData()
 

    return (
      <div className='cards'>
      <Header
        color ={job.logoBackground}
        logo={job.logo}
        company={job.company}
        website={job.website}
      />
      <div className="desc_rectangle">
        <div className="desc_innergroup">
          <div className="desc_postedContract">
            {job.contract}
          </div>
          <div className="desc_role">
           {job.position}
           </div>
           <div className="desc_location">
              {job.location}
           </div>
           <button className="desc_button"><p className="desc_button_text">Apply Now</p></button>
           <p className="desc_description">{job.description}</p>
            <p className="desc_requirements">Requirements</p>
            <p className="desc_description" style={{marginTop:'23px'}}>{job.requirements.content}</p>
            <ul className="desc_description" style={{marginTop:'24px'}}>
            {job.requirements.items.map((elem) => (
          <li style={{marginLeft:'20px'}}>{elem}</li>
        ))}
            </ul>

            <p className="desc_requirements" style={{marginTop:'48px'}}>What You Will Do</p>
            
            <p className="desc_description" style={{marginTop:'28px'}}>{job.role.content}</p>
           
           <ol className="desc_description" style={{marginTop:'24px'}}>
           {job.requirements.items.map((elem) => (
          <li style={{marginLeft:'20px'}}>{elem}</li>
        ))}
           </ol>
       </div>

       
    </div>
    <Footer 
              position={job.position}
              company={job.company}
              />
      </div>    )
  }

export default Detail


export const jobsDetailLoader = async({ params })=>{
  const { id } = params

  const res = await fetch('http://localhost:4000/jobs/' + id)

  return res.json()
}