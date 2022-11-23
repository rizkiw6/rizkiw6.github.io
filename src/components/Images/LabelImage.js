import React from 'react'
import label_warning from '/src/assets/images/label_warning.png'
import label_positive from '/src/assets/images/label_positive.png'
import label_important from '/src/assets/images/label_important.png'
import label_neutral from '/src/assets/images/label_neutral.png'
import label_disabled from '/src/assets/images/label_disabled.png'
import label_highlight from '/src/assets/images/label_highlight.png'

export const LabelImage = (props) => (
  <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
    <img src={label_warning} style={{ width: '10%' }} />
    <img src={label_positive} style={{ width: '10%', marginLeft: 16 }} />
    <img src={label_important} style={{ width: '10%', marginLeft: 16 }} />
    <img src={label_neutral} style={{ width: '10%', marginLeft: 16 }} />
    <img src={label_disabled} style={{ width: '10%', marginLeft: 16 }} />
    <img src={label_highlight} style={{ width: '10%', marginLeft: 16 }} />
  </div>
)
