import React from 'react'
import dropdown from '/src/assets/images/dropdown.png'
import dropdownitem from '/src/assets/images/dropdownitem.png'

export const DropDownImage = (props) => (
  <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-start'}}>
    <img src={dropdown} />
  </div>
)

export const DropDownItemImage = (props) => (
  <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-start'}}>
    <img src={dropdownitem} />
  </div>
)