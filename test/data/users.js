const validUser = {
  emailAddress: process.env.EMAIL_ADDRESS,
  password: process.env.PASSWORD,
};

const invalidUser = {
  emailAddress: 'fake.user@test.com',
  password: 'fakeUserPassword',
};

module.exports = {
  validUser,
  invalidUser,
};
