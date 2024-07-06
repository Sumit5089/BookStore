import React from 'react'
import List from '../../public/list.json'

export const Freebook = () => {
    const filteredList = List.filter((item) => item.category === "Fiction")
    console.log(filteredList)
  return (
    <>
        <h1>Freebook</h1>
    </>
  )
}