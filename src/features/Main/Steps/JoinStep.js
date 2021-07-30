import React from 'react'
import { Button, Typography } from 'antd';
import { ReactComponent as JoinOrg } from 'common/svg/join-org.svg'


const JoinStep = () => (
  < >
    <div className="content-column">
      <Typography.Title level={2}>Join your orginiztion in Village Hub.</Typography.Title>
      <Typography.Paragraph level={2}>This organization allow anyone from <strong>@villageceed.com</strong> to join:</Typography.Paragraph>
    </div>
    <div className="image-column" >
      <JoinOrg/>
    </div>
  </>
)


export default JoinStep
