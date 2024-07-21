import React from 'react';
import { useState, useEffect } from 'react';
import JobList from './JobList'
const JobListing = ({isHome = false}) => {
const [Job, setJob] = useState([])
const [Loading, setLoading] = useState(true)


useEffect(
  ()=>{
    const fetchJobs = async()=>{
      try {
        const res = await fetch('https://localhost:3000/jobs')
        const data = await res.json()
        setJob(data)
      } catch (error) {
        console.log('error fetching darta', error)
      }finally{
        setLoading(false)
      }
    }
    fetchJobs();
  },
   []
)

  return (
      <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? 'Recent Jobs' : 'Browse Jobs'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {Job.map((job)=>(
                <JobList job = {job} key = {job.id} /> 
            ))}
        </div>
      </div>
    </section>
  )

}

export default JobListing