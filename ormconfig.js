console.log('process.env.DATABASE_URL:', process.env.DATABASE_URL);

module.exports = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: ['dist/models/*.js'],
  migrations: ['dist/database/migrations/*.js'],
  seeds: ['./src/database/seeds/*.ts'],
  factories: ['./src/database/factories/*.ts'],
  cli: {
    migrationsDir: './src/database/migrations'
  }
};
