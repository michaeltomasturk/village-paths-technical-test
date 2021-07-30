import React from 'react'
import {  Button } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { useSelector } from 'react-redux'
import AccountStep from './Steps/AccountStep'
import JoinStep from './Steps/JoinStep'

const MainPage = () => {
  const step = useSelector((state) => state.main.step)

  let StepComponent = null

  switch(step) {
    case 0:
      StepComponent = <AccountStep />
      break;
    case 1:
      StepComponent = <JoinStep />
      break;
    default:
      StepComponent = null
  }

  return (
    <div className="main-page">
      <div className="back-btn-column">
        <Button shape="circle"><ArrowLeftOutlined /></Button>
      </div>
      <div className="main-content">
        {StepComponent}
      </div>
    </div>
  )
}

export default MainPage
