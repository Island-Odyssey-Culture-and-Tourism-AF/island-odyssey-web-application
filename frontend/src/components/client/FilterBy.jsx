import React from 'react'

export default function FilterBy() {
  return (
    <div>
      <select className="form-select select-location" aria-label="Default select example">
        <option selected>Hotel Type</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  )
}
