import React from 'react';
import { Header, Image } from 'semantic-ui-react'

const UserDetail = ({ email, avatar, jobTitle }) => {
  return (<Header as='h4' image>
    <Image rounded size='mini' src={avatar} />
    <Header.Content>
        {email}
        <Header.Subheader>{jobTitle}</Header.Subheader>
    </Header.Content>
    </Header>)
}

export default UserDetail;
