'use strict';

const { test, after } = use('Test/Suite')('Mongo');

const Config = use('Config');
const User = use('App/Models/User');

after(async () => {
  return User.query().delete();
});

test('Test Create user', async ({ assert }) => {
  console.log(
    'CONFIG====>',
    Config.get('database.connection'),
    Config.get('database.mongodb')
  );

  const countBefore = await User.count();
  assert.isNull(countBefore);

  await User.create({
    email: 'admin@admin.com'
  });

  const countAfter = await User.count();
  assert.equal(1, countAfter);
});
