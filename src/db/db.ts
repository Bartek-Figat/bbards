import { Collection, MongoClient } from 'mongodb';
import { Index } from '../enum';

export class DataBase {
  async connect(dbURI: string, dbOptions: any): Promise<{ collection: Collection; client: MongoClient }> {
    const client: MongoClient = new MongoClient(dbURI, dbOptions);
    await client.connect();
    const collection: Collection = client.db(Index.Db).collection(Index.Users);
    return { collection, client };
  }
}
