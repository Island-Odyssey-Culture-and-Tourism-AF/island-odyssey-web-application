import React from 'react'

export default function SelectLocation() {
  return (
    <div>
    Destination
      <select className="form-select select-location" aria-label="Default select example">
        <option selected>Location</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  )
}
