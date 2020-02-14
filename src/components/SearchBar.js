import React from 'react';
import { Container, Header, Input } from 'semantic-ui-react'

const SearchBar = ({ text, setText }) => (
  <Container>
      <Header size='medium'>Search by Email</Header>
      <Input value={text} placeholder='Search...' onChange={(e) => setText(e.target.value)}/>
  </Container>
);

export default SearchBar;
