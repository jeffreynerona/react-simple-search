import React from 'react';
import UserDetail from './UserDetail';
import { Item } from 'semantic-ui-react'

const FlagCard = ({ user }) => {
  const flagImage = `https://www.countryflags.io/${user.countryCode.toLowerCase()}/flat/64.png`;
  return <div>
      <Item>
          <Item.Image src={flagImage} />
          <Item.Content>
            <Item.Description>
              {user.content}
            </Item.Description>
          </Item.Content>
        </Item>
      <UserDetail email={user.email} avatar={user.avatar} jobTitle={user.jobTitle} />
  </div>
}

export default FlagCard;
