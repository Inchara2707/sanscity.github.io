import React from "react"
import img from "../images/services.jpg"
import Back from "../common/Back"
import "../home/featured/featured.css"
import FeaturedCard from "../home/featured/FeaturedCard"

const Projects = () => {
  return (
    <>
      <section className='projects mb'>
        <Back name='Projects' title='Projects -All undertaken' cover={img} />
        <div className='featured container'>
          <FeaturedCard />
        </div>
      </section>
    </>
  )
  }

export default Projects