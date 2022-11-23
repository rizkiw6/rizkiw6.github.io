import React from 'react'
import sample_box from '/src/assets/images/input_field_box.png'
import sample_nude from '/src/assets/images/input_field_nude.png'
import box_variants from '/src/assets/images/input_field_box_variants.png'
import box_regular from '/src/assets/images/input_field_box_regular.png'
import box_helper from '/src/assets/images/input_field_box_helper.png'
import box_error from '/src/assets/images/input_field_box_error.png'

import nude_regular from '/src/assets/images/input_field_nude_regular.png'
import nude_regular_icon from '/src/assets/images/input_field_nude_regular_icon.png'
import nude_error from '/src/assets/images/input_field_nude_error.png'
import nude_helper from '/src/assets/images/input_field_nude_helper.png'
import nude_phone from '/src/assets/images/input_field_nude_phone.png'
import nude_currency from '/src/assets/images/input_field_nude_currency.png'
import nude_password from '/src/assets/images/input_field_nude_password.png'

export const SampleInputFieldBox = (props) => (
  <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-start' }}>
    <img src={sample_box} style={{ width: '35%', marginRight: 16 }} />
  </div>
)

export const SampleInputFieldNude = (props) => (
  <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-start' }}>
    <img src={sample_nude} style={{ width: '35%', marginRight: 16 }} />
  </div>
)

export const InputFieldBoxRegular = (props) => (
  <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-start' }}>
    <img src={box_regular} style={{ width: '40%', marginRight: 16 }} />
  </div>
)

export const InputFieldBoxHelper = (props) => (
  <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-start' }}>
    <img src={box_helper} style={{ width: '40%', marginRight: 16 }} />
  </div>
)

export const InputFieldBoxError = (props) => (
  <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-start' }}>
    <img src={box_error} style={{ width: '40%', marginRight: 16 }} />
  </div>
)

export const InputFieldBoxVariants = (props) => (
  <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
    <img src={box_variants} style={{ width: '75%', marginRight: 16 }} />
  </div>
)

export const InputFieldNudeRegular = (props) => (
  <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-start' }}>
    <img src={nude_regular} style={{ width: '40%', marginRight: 16 }} />
  </div>
)

export const InputFieldNudeRegularIcon = (props) => (
  <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-start' }}>
    <img src={nude_regular_icon} style={{ width: '40%', marginRight: 16 }} />
  </div>
)

export const InputFieldNudeError = (props) => (
  <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-start' }}>
    <img src={nude_error} style={{ width: '40%', marginRight: 16 }} />
  </div>
)

export const InputFieldNudeHelper = (props) => (
  <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-start' }}>
    <img src={nude_helper} style={{ width: '40%', marginRight: 16 }} />
  </div>
)

export const InputFieldNudePhone = (props) => (
  <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-start' }}>
    <img src={nude_phone} style={{ width: '40%', marginRight: 16 }} />
  </div>
)

export const InputFieldNudeCurrency = (props) => (
  <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-start' }}>
    <img src={nude_currency} style={{ width: '40%', marginRight: 16 }} />
  </div>
)

export const InputFieldNudePassword = (props) => (
  <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-start' }}>
    <img src={nude_password} style={{ width: '40%', marginRight: 16 }} />
  </div>
)