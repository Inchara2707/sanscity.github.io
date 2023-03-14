import React from "react"
import Heading from "../../common/Heading"
import "./featured.css"
import FeaturedCard from "./FeaturedCard"

const Featured = () => {
  return (
    <>
      <section className='featured background'>
        <div className='container'>
          <Heading title='Projects we Undertake' subtitle='Find All Type of Projects.' />
          <FeaturedCard />
        </div>
      </section>
    </>
  )
}

export default Featured