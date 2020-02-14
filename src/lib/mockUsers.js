import faker from 'faker';

const user = (id) => ({
  id,
  email: faker.internet.email(),
  name: faker.name.findName(),
  avatar: faker.image.avatar(),
  content: faker.lorem.sentences(),
  jobTitle: faker.name.jobTitle(),
  countryCode: faker.address.countryCode(),
});

const mockUsers = (n) => Array.from(Array(n), (_, i) => user(i));
export default mockUsers;
