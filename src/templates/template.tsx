import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'
import { Code } from '../components'
import { RootLayout as Layout } from '../Layout'
import { preToCodeBlock } from 'mdx-utils'
import Prism from 'prism-react-renderer/prism'
import { Typography } from 'antd'
import 'katex/dist/katex.min.css'

;(typeof global !== 'undefined' ? global : window).Prism = Prism
require('prismjs/components/prism-kotlin')
const { Title, Text, Paragraph } = Typography
const components = {
  pre: (preProps) => {
    const props = preToCodeBlock(preProps)
    // if there's a codeString and some props, we passed the test
    if (props) {
      return <Code {...props} />
    } else {
      // it's possible to have a pre without a code in it
      console.log('test : not code')
      return <pre {...preProps} />
    }
  },
  inlineCode: (props) => {
    console.log(props)
    return <Text code {...props} />
  },
  h1: (props) => <Title {...props} />,
  h2: (props) => <Title level={2} {...props} />,
  h3: (props) => <Title level={3} {...props} />,
  h4: (props) => <Title level={4} {...props} />,
  h5: (props) => <Title level={5} {...props} />,
  p: (props) => <Paragraph style={{ fontSize: 16 }} {...props} />,
}

function PageTemplate({ data: { mdx } }: any) {
  return (
    <MDXProvider components={components}>
      <Layout sidebarRoot={mdx.frontmatter.root}>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </Layout>
    </MDXProvider>
  )
}
export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        root
      }
      body
    }
  }
`
export default PageTemplate
