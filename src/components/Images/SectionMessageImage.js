import React from 'react'
import section_close from '/src/assets/images/section_message_close.png'
import section_normal from '/src/assets/images/section_message_normal.png'

export const SectionCloseImage = (props) => (
  <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-start'}}>
    <img src={section_close} />
    <img src={section_normal} style={{marginBottom: 4, marginLeft: 16}}/>
  </div>
)