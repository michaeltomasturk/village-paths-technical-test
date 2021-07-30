import React, { useMemo, useCallback } from 'react'
import {  Button } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { useSelector, useDispatch } from 'react-redux'
import AccountStep from './Steps/AccountStep'
import JoinStep from './Steps/JoinStep'
import { changeStep } from './mainSlice'
import './style.scss'

const MainPage = () => {
  const dispatch = useDispatch()
  const step = useSelector((state) => state.main.step)

  const StepComponent = useMemo(() => {
    switch(step) {
      case 0:
        return <AccountStep />
      case 1:
        return <JoinStep />
      default:
        return null
    }
  }, [step])

  const onBackBtnClick = useCallback(
    () => {
      if(step === 0) {
        // Probably take user to previous screen
        console.log('Already On first step!');
      } else {
        dispatch(changeStep(step - 1));
      }
    },
    [dispatch, step],
  )

  return (
    <div className="main-page">
      <div className="back-btn-column">
        <Button shape="circle" size="large" onClick={onBackBtnClick}><ArrowLeftOutlined /></Button>
      </div>
      <div className="main-content">
        {StepComponent}
      </div>
    </div>
  )
}

export default MainPage
