module.exports = {
  "development": {
    "username": "todos-dbuser",
    "password": "database-login-todoist-diy",
    "database": "todos-db",
    "host": "127.0.0.1",
	"dialect": "postgres",
	"port": "5432",
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
