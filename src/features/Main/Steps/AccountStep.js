import React from 'react'
import { Form, Input, Button, Typography } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import { ReactComponent as UserCards } from 'common/svg/user-cards.svg'
import { changeStep, updateUser } from './../mainSlice'


const AccountStep = () => {
  const dispatch = useDispatch();
  const step = useSelector((state) => state.main.step)
  const user = useSelector((state) => state.main.user)

  return (
    <>
      <div className="content-column">
        <Typography.Title level={2}>Let's get to know you...</Typography.Title>
        <Typography.Paragraph level={2}>Tell us more about yourself.</Typography.Paragraph>
        <Form
          name="account_form"
          className="form"
          initialValues={{
            ...user,
          }}
          onFinish={() => {
            // Probably make an api call here
            dispatch(changeStep(step + 1))}
          }
          onValuesChange={(changedValues) => {
            dispatch(updateUser(changedValues))
          }}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your Email!',
              },
            ]}
          >
            <Input size="large"
              type="email"
              placeholder="Email"
              autoComplete="email"
            />
          </Form.Item>
          <Form.Item
            style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
            name="firstName"
            rules={[
              {
                required: true,
                message: 'Please input your First Name!',
              },
            ]}
          >
            <Input size="large"
              placeholder="First Name"
              autoComplete="firstName"
            />
          </Form.Item>
          <Form.Item
            style={{ display: 'inline-block', width: 'calc(50% - 8px)', marginLeft: '16px' }}
            name="lastName"
            rules={[
              {
                required: true,
                message: 'Please input your Last Name!',
              },
            ]}
          >
            <Input size="large"
              placeholder="Last Name"
              autoComplete="lastName"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input.Password
              type="password"
              placeholder="Password"
              size="large"
              autoComplete="password"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button"
              size="large">Continue
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className="image-column" >
        <UserCards/>
      </div>
    </>
  )
}

export default AccountStep
