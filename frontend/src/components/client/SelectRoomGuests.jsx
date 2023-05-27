import React from 'react'

export default function SelectRoomGuests() {
  return (
    <div>
    Rooms & Guests
      <select className="form-select select-location" aria-label="Default select example">
        <option selected>1 Room : 1 Adult / Room</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  )
}
