import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Typography, Spin, Empty, Card } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { ReactComponent as JoinOrg } from 'common/svg/join-org.svg'
import { getOrganization } from './../mainSlice'


const JoinStep = () => {
  const dispatch = useDispatch();
  const loader = useSelector(state => state.main.loader)
  const organization = useSelector(state => state.main.organization)

  useEffect(() => {
    dispatch(getOrganization())
  }, [dispatch])

  return (
    <>
      <div className="content-column">
        <Typography.Title level={2}>Join your organization in Village Hub</Typography.Title>
        <Typography.Paragraph>This organization allow anyone from <strong>@villageceed.com</strong> to join:</Typography.Paragraph>
        <br/>
        {loader && <Spin/>}
        {!loader && !organization && <Empty description="No Organization"/>}
        {organization && (
          <Card className="organization-card" bordered={false}>
            <img src={organization.profileImage.url} alt={organization.profileImage.name} />
            <div>
              <Typography.Title level={5}>{organization.name}</Typography.Title>
              <Typography.Paragraph>{organization.memberCount} members</Typography.Paragraph>
            </div>
            <Button
              type="primary"
              size="large"
              onClick={() => {
                console.log('Join organization')
              }}
            >
              Join
            </Button>
          </Card>
        )}
        <br/>
        <Button
          type="dashed"
          icon={<PlusOutlined/>}
          size="large"
          onClick={() => {
            console.log('Create a new organization')
          }}
        >
          Create a new organization
        </Button>
      </div>
      <div className="image-column" >
        <JoinOrg/>
      </div>
    </>
  )
}


export default JoinStep
