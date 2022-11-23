import React, { useRef } from 'react'
import { useClipboard } from 'use-clipboard-copy'
import Highlight, { defaultProps } from 'prism-react-renderer'

import themeCode from '../highlight-themes/customTheme'
import themeView from 'prism-react-renderer/themes/nightOwl'

export const Code = ({ codeString, language, ...props }) => {
  const clipboard = useClipboard()
  return (
    <div style={{ position: 'relative',paddingLeft: 16, paddingRight: 16, paddingTop: 16, paddingBottom: 2, marginBottom: 16, backgroundColor: '#292d3e', borderRadius: 8 }}>
      <button
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          backgroundColor: 'black',
          opacity: 0.5,
          color: 'white',
          zIndex: 1,
          borderRadius: 8,
        }}
        onClick={(e) => {
          clipboard.copy(codeString)
        }}
      >
        Copy
      </button>
      <Highlight
        {...defaultProps}
        code={codeString}
        language={language}
        theme={themeCode}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  )
}
