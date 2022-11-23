import * as React from 'react'
import { Link } from 'gatsby'
import { Button } from 'antd'
import { GithubOutlined, TwitterOutlined } from '@ant-design/icons'

const IndexPage = () => {
  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <p
        style={{
          color: '#03222F',
          fontSize: 50,
          fontWeight: 'bold',
          marginBottom: 0,
        }}
      >
        Waresix Android UI Component
      </p>
      <h2>A component library which android dev can use.</h2>
      <br />
      <Button.Group size="large">
        <Button ghost type="primary" size="large">
          <Link to="/docs/template/get-started/introduction">Get Started</Link>
        </Button>
      </Button.Group>
    </div>
  )
}

export default IndexPage
