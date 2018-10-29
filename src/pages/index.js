import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <h1>Hello beautiful people</h1>
    <p>My name is Dussadee Wang</p>
    <p>I enjoy coding and building with frameworks such as React</p>
    <p>When I'm not coding, you can find me trying out the newest foods, listening to music, or playing video games!</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
