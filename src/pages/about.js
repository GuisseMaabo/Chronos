// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="Me"> 
      <h1>Ciré</h1>
      <p>Hi there! I'm a human lost in the space time.</p>
      <Link to="/">Back to blog</Link>
    </Layout>

  )
}

// Step 3: Export your component
export default AboutPage