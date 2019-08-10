import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    
    <center>
    <h1>Chun Ping Great Eastern</h1>
    <p style={{ color: 'black   ',
            textDecoration: 'no',
            }}
            >Welcome to my empire</p>
    <p>lets me awesome!!</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    </center>
    
  </Layout>
)

export default IndexPage
