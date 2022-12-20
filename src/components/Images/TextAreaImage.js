import React from 'react'
import text_area_regular from '/src/assets/images/textarea_regular.png'
import text_area_error from '/src/assets/images/textarea_error.png'
import text_area_disabled from '/src/assets/images/textarea_disabled.png'

export const TextAreaImage = (props) => (
  <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-start' }}>
    <img src={text_area_regular} style={{ width: '30%', marginRight: 16 }} />
    <img src={text_area_error} style={{ width: '30%', marginRight: 16 }} />
    <img src={text_area_disabled} style={{ width: '30%', marginRight: 16 }} />
  </div>
)