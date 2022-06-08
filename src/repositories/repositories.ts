import dotenv from 'dotenv';
import { Document, Collection, MongoClient } from 'mongodb';
import { DataBase } from '../db/db';
dotenv.config();

const { dbURI } = process.env;

export class Repository {
  constructor(private db: DataBase = new DataBase()) {}

  async findOne<T>(query: T, projection: T): Promise<Document> {
    const { collection, client } = await this.db.connect('mongodb://mongo:27017', { useNewUrlParser: true });
    try {
      const result = await collection.findOne(query, { projection });
      return result;
    } catch (err) {
      console.log(err);
    } finally {
      await client.close();
    }
  }

  async find<T>(query: T, projection?: T): Promise<Document[]> {
    const { collection, client } = await this.db.connect('mongodb://mongo:27017', { useNewUrlParser: true });
    try {
      const result = await collection.find(query, { projection }).toArray();
      return result;
    } catch (err) {
      console.log(err);
    } finally {
      await client.close();
    }
  }

  async insertOne<T>(document: T): Promise<Document> {
    const { collection, client } = await this.db.connect('mongodb://mongo:27017', { useNewUrlParser: true });
    try {
      const result = await collection.insertOne(document);
      return result;
    } catch (err) {
      console.log(err);
    } finally {
      await client.close();
    }
  }

  async updateOne<T>(filter: T, update: T, options: T): Promise<Document> {
    const { collection, client } = await this.db.connect('mongodb://mongo:27017', { useNewUrlParser: true });
    try {
      const result = await collection.updateOne(filter, update, options);
      return result;
    } catch (err) {
      console.log(err);
    } finally {
      await client.close();
    }
  }
}
