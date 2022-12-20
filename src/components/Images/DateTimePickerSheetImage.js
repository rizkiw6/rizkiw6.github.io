import React from 'react'
import datetimesheet from '/src/assets/images/datetimesheet.png'
import edit_date from '/src/assets/images/edit_date.png'
import datewithtime from '/src/assets/images/datewithtime.png'
import datesingle from '/src/assets/images/datesingle.png'
import daterange from '/src/assets/images/daterange.png'

export const DateTimePickerSheetImage = (props) => (
  <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
    <img src={edit_date} style={{ width: '30%', marginBottom: 32 }} />
    <img src={datetimesheet} style={{ width: '30%'}} />
  </div>
)

export const DateWithTimeImage = (props) => (
  <div style={{ width: '100%', display: 'flex', flexDirection: 'column'}}>
    <img src={datewithtime} style={{ width: '30%'}} />
  </div>
)

export const DateSingleImage = (props) => (
  <div style={{ width: '100%', display: 'flex', flexDirection: 'column',}}>
    <img src={datesingle} style={{ width: '30%'}} />
  </div>
)

export const DateRangeImage = (props) => (
  <div style={{ width: '100%', display: 'flex', flexDirection: 'column',}}>
    <img src={daterange} style={{ width: '30%'}} />
  </div>
)
