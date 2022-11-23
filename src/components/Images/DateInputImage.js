import React from 'react'
import input_date from '/src/assets/images/input_date.png'
import input_date_filled from '/src/assets/images/input_date_filled.png'

export const DateInputImage = (props) => (
  <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
    <img src={input_date} style={{ width: '20%' }} />
    <img src={input_date_filled} style={{ width: '20%', marginLeft: 16 }} />
  </div>
)
