import React from 'react'
import input_otp from '/src/assets/images/input_otp.png'

export const OtpViewImage = (props) => (
  <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
    <img src={input_otp} style={{ width: '25%' }} />
  </div>
)
