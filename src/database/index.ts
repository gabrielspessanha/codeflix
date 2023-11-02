import { Sequelize } from 'sequelize'

export const database = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'codeflix_development',
  username: 'codeflix',
  password: 'codeflix',
	define: {
    underscored: true
  }
})