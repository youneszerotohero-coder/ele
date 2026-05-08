import { MongoClient, ServerApiVersion } from 'mongodb';

let clientPromise;

export function getMongoConfig() {
  return {
    uri: process.env.MONGODB_URI,
    dbName: process.env.MONGODB_DB_NAME || 'saleg',
    collectionName: process.env.MONGODB_PROJECTS_COLLECTION || 'projects',
  };
}

export async function getProjectsCollection() {
  const { uri, dbName, collectionName } = getMongoConfig();

  if (!uri) {
    throw new Error('MONGODB_URI is not configured');
  }

  if (!clientPromise) {
    const client = new MongoClient(uri, {
      serverApi: ServerApiVersion.v1,
      connectTimeoutMS: 20000,
      serverSelectionTimeoutMS: 20000,
    });

    clientPromise = client.connect().catch((error) => {
      clientPromise = undefined;
      throw error;
    });
  }

  const client = await clientPromise;
  return client.db(dbName).collection(collectionName);
}
