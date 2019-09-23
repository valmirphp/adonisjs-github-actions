'use strict';

const { test, after } = use('Test/Suite')('Mongo');

const Config = use('Config');
const User = use('App/Models/User');

after(async done => {
  User.query()
    .delete()
    .then(() => done())
    .catch(e => {
      console.error('ERROR:', e);
      done();
    });
});

test('Test Create user', async ({ assert }) => {
  console.log(
    'CONFIG====>',
    Config.get('database.connection'),
    Config.get('database.mongodb')
  );

  const countBefore = await User.count();
  assert.isNull(countBefore);

  const user = await User.create({
    email: 'admin@admin.com'
  });

  console.log('CREATED USER', user._id);

  const countAfter = await User.count();
  assert.equal(1, countAfter);
});
