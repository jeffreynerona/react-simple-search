import React, { useState, useEffect } from 'react';
import { Container } from 'semantic-ui-react'
import SearchBar from './SearchBar';
import Spinner from './Spinner';
import FlagCard from './FlagCard';

import mockUsers from '../lib/mockUsers';

const App = () => {
  const [users] = useState(mockUsers(10));
  const [searchTerm, setSearchTerm] = useState('');
  const [mockSearching, setMockSearching] = useState(false);
  const [activeUser, setActiveUser] = useState(null);

  const onSearch = (newTerm) => {
    setMockSearching(true);
    setSearchTerm(newTerm);
    const foundUser = users.find((u) => u.email.toLowerCase() === newTerm.toLowerCase());
    setActiveUser(foundUser);
    setTimeout(() => {
      setMockSearching(false);
    }, 1500);
  };
  useEffect(() => {
    console.log(users);
  }, [users]);
  return (
    <Container>
      <SearchBar text={searchTerm} setText={onSearch} />
      {mockSearching ? <Spinner /> : (activeUser ? <FlagCard user={activeUser} /> : 'No Results.')}
    </Container>
  );
}

export default App;
