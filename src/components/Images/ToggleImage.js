import React from 'react'
import toggle_selected from '/src/assets/images/toggle_selected.png'
import toggle_unselected from '/src/assets/images/toggle_unselected.png'
import toggle_selected_disabled from '/src/assets/images/toggle_selected_disabled.png'
import toggle_unselected_disabled from '/src/assets/images/toggle_unselected_disabled.png'

export const ToggleImage = (props) => (
  <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
    <img src={toggle_selected} style={{ width: '5%', marginRight: 16 }} />
    <img src={toggle_unselected} style={{ width: '5%', marginRight: 16 }} />
    <img src={toggle_selected_disabled} style={{ width: '5%', marginRight: 16 }} />
    <img src={toggle_unselected_disabled} style={{ width: '5%' }} />
  </div>
)
