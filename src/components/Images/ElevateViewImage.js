import React from 'react'
import elevate_view_low from '/src/assets/images/elevate_view_low.png'
import elevate_view_high from '/src/assets/images/elevate_view_high.png'

export const ElevateViewImage = (props) => (
  <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
    <img src={elevate_view_low} style={{ width: '40%' }} />
    <img src={elevate_view_high} style={{ width: '40%', marginLeft: 16 }} />
  </div>
)
