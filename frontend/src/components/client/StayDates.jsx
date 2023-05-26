import React from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './styles.css'

export default function (props) {
  return (
    <div>
      <DatePicker placeholderText={props.placeholderText} className="custom-datepicker-input"/>
    </div>
  )
}
