import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { AppHeader } from './Header'
import { pathPrefix } from '../gatsby-config'
import { Layout, Affix } from 'antd'
import { Sidebar } from './sidebar'
import { TableOfContents } from './TableOfContents'

const { Content, Header } = Layout

export function RootLayout({ children }: React.PropsWithChildren<{}>) {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
          allMdx {
            edges {
              node {
                fields {
                  slug
                }
              }
            }
          }
        }
      `}
      render={(data) => {
        const allPosts = data.allMdx.edges.map(
          (edge: any) => edge.node.fields.slug
        )
        let onPostPage
        if (typeof window !== 'undefined') {
          const path = window.location.pathname.replace(
            pathPrefix.slice(0, -1),
            ''
          )
          if (
            allPosts.indexOf(path) >= 0 ||
            allPosts.indexOf(path.slice(0, -1)) >= 0
          ) {
            onPostPage = true
          } else {
            onPostPage = false
          }
        }

        const { title } = data.site.siteMetadata

        return (
          <Layout style={{ minHeight: '100vh' }}>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' },
              ]}
            >
              <html lang="en" />
            </Helmet>
            <Affix>
              <Header style={{ height: 64 }}>
                <AppHeader siteTitle="Waresix" />
              </Header>
            </Affix>
            <Layout hasSider>
              <Sidebar />
              <Layout style={{ marginLeft: 200 }}>
                <Content
                  style={{
                    padding: 24,
                    background: 'white',
                    margin: 0,
                    marginLeft: '10%',
                    marginRight: '10%',
                  }}
                >
                  {children}
                </Content>
              </Layout>
            </Layout>
          </Layout>
        )
      }}
    />
  )
}

export default RootLayout
