import React from 'react'
import emptylayout from '/src/assets/images/emptymv.png'

export const EmptyLayoutImage = (props) => (
  <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-start'}}>
    <img src={emptylayout} style={{ border: '1px solid #F4F6F8', width: '25%' ,marginRight: 16 }} />
  </div>
)
