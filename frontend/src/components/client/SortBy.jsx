import React from 'react'

export default function SortBy() {
  return (
    <div>
      <select className="form-select sort-by" aria-label="Default select example">
        <option selected>City</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  )
}
