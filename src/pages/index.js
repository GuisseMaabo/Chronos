// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const IndexPage = () => {
  return (

         <Layout pageTitle="Chronos Articles ">
            <h1>Hey, my name is cire welcome to my blog</h1>
            <Link to="/about">About</Link>
          <p>Chronos is a Journey in the time.</p>
          <StaticImage
        alt="Memories, "
        src="../images/clock.jpg"
      />
         </Layout>

  )
}

// Step 3: Export your component
export default IndexPage