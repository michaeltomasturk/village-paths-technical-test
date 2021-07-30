import React from 'react'
import { useSelector } from 'react-redux'

const MainPage = () => {
  const step = useSelector((state) => state.main.step)

  return (
    <div>{step}</div>
  )
}

export default MainPage
