import { createConnection, getConnectionOptions, Connection } from 'typeorm';

export default async function (): Promise<Connection> {
  const defaultOptions = await getConnectionOptions();
  return createConnection(defaultOptions);
}
