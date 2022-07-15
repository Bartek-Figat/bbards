const { MongoClient } = require('mongodb');

describe('insert', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect('mongodb://localhost:27017', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = await connection.db(globalThis.__MONGO_DB_NAME__);
  });

  afterAll(async () => {
    // await db.collection('users').deleteOne({ _id: 'some-user-id' });
    await connection.close();
  });

  it('should insert a doc into collection', async () => {
    const users = db.collection('users');

    const mockUser = { _id: 'some-user-id', name: 'John' };
    await users.insertOne(mockUser);

    const insertedUser = await users.findOne({ _id: 'some-user-id' });
    expect(insertedUser).toEqual(mockUser);
  });

  it('should find into collection id and update token array', async () => {
    const users = db.collection('users');

    const mockUser = { _id: 'some-user-id', name: 'John' };

    const insertedUser = await users.findOne({ _id: 'some-user-id' });
    expect(insertedUser).toEqual(mockUser);

    await users.updateOne(
      { _id: mockUser._id },
      {
        $addToSet: { token: { $each: ['token_one', 'toke_two'] } },
      },
      {}
    );
  });

  it('should delete specific value in array ', async () => {
    const users = db.collection('users');

    const updateToken = await users.updateOne({ _id: 'some-user-id' }, { $pull: { token: 'token_one' } });
    console.log(updateToken);
    expect(updateToken).toEqual({
      matchedCount: 1,
      acknowledged: true,
      modifiedCount: 1,
      upsertedCount: 0,
      upsertedId: null,
    });
  });
});
