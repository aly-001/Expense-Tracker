import React from 'react'

interface Props {
    cartItemsCount: number;
}

const NavBar = ({cartItemsCount} : Props) => {
  return (
    <div>Nav Bar: {cartItemsCount} </div>
  )
}

export default NavBar