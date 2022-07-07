const user = process.env.DB_USER;
const pass = process.env.DB_PASS;
const host = process.env.DB_HOST;
const port = process.env.DB_PORT || 27017;

export const connectionString = `mongodb://${user}:${pass}@${host}:${port}`