console.log('process.env.DATABASE_URL:', process.env.DATABASE_URL);

module.exports = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: ['dist/models/*.js'],
  migrations: ['dist/database/migrations/*.js'],
  seeds: ['dist/database/seeds/*.js'],
  factories: ['dist/database/factories/*.js'],
  cli: {
    migrationsDir: './src/database/migrations'
  }
};
