import * as React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import { Affix, Menu, Layout } from 'antd'
import 'antd/lib/menu/style/css'
import { pathPrefix } from '../../gatsby-config'

interface LinkItem {
  id: string
  name: string
  link: string
}
interface ParentItem {
  id: string
  name: string
  items: MenuItem[] | null
}

type MenuItem = LinkItem | ParentItem

type Query = { allSidebarJson: { edges: { node: MenuItem }[] } }

function isLinkItem(item: MenuItem): item is LinkItem {
  const result = Boolean((item as LinkItem).link)
  return result
}

function render(item: MenuItem, id: string) {
  if (isLinkItem(item)) {
    return (
      <Menu.Item key={item.link}>
        <Link to={item.link}>
          <div>{item.name}</div>
        </Link>
      </Menu.Item>
    )
  } else {
    return (
      <Menu.SubMenu
        key={id}
        title={<span style={{ fontWeight: 900 }}>{item.name}</span>}
      >
        {item.items && item.items.map((v, i) => render(v, id + '.' + i))}
      </Menu.SubMenu>
    )
  }
}

export function Sidebar() {
  const [sidebarOverflow, setSidebarOverflow] = React.useState('hidden')
  const { Sider } = Layout
  return (
    <StaticQuery
      query={graphql`
        query MyQuery {
          allSidebarJson {
            edges {
              node {
                id
                name
                link
                items {
                  name
                  link
                }
              }
            }
          }
        }
      `}
      render={(data: Query) => {
        const { Sider } = Layout
        const rootItems = data.allSidebarJson.edges.map((v) => v.node)
        const currentPath =
          typeof window !== 'undefined'
            ? window.location.pathname.replace(pathPrefix, '')
            : '/'
        const defaultOpenKeys = rootItems.map((item) => item.id)

        return (
          <Sider
            style={{
              position: 'fixed',
              height: 'calc(100vh - 64px)',
              backgroundColor: 'white',
              overflow: sidebarOverflow,
              top: 64,
            }}
          >
            <Menu
              style={{ minHeight: '100%' }}
              onMouseEnter={() => setSidebarOverflow('auto')}
              onMouseLeave={() => setSidebarOverflow('hidden')}
              mode="inline"
              defaultOpenKeys={defaultOpenKeys}
              selectedKeys={[currentPath]}
            >
              {rootItems.map((v) => render(v, v.id))}
            </Menu>
          </Sider>
        )
      }}
    />
  )
}
