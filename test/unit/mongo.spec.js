'use strict';

async function deleteMongoCollection(collection) {
  const collections =
    typeof collection === 'string' ? [collection] : collection;
  const Database = use('Database');
  const db = await Database.connect('mongodb');
  const promises = collections.map(c => db.collection(c).remove());
  return Promise.all(promises);
}

const { test, afterEach } = use('Test/Suite')('Mongo');

// const Config = use('Config');
const User = use('App/Models/User');

afterEach(() => {
  return deleteMongoCollection('users');
});

// after(done => {
//   User.query()
//     .delete()
//     .then(() => done())
//     .catch(e => {
//       console.error('ERROR:', e);
//       done();
//     });
// });

test('Test Create user', async ({ assert }) => {
  // console.log(
  //   'CONFIG====>',
  //   Config.get('database.connection'),
  //   Config.get('database.mongodb')
  // );

  const countBefore = await User.count();
  assert.isNull(countBefore);

  const user = await User.create({
    email: 'admin@admin.com'
  });

  console.log('CREATED USER', user._id);

  const countAfter = await User.count();
  assert.equal(1, countAfter);
});
