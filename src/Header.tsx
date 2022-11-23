import React, { Component } from 'react'
import { Link } from 'gatsby'
import { Button, Menu, Row } from 'antd'
import { GithubOutlined, TwitterOutlined } from '@ant-design/icons'

interface Props {
  siteTitle: string
}

export class AppHeader extends Component<Props> {
  render() {
    const { siteTitle } = this.props
    return (
      <Row>
        <Link to="/docs/template/get-started/introduction/">{siteTitle}</Link>
      </Row>
    )
  }
}
