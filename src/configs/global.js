const config = {
  mysql: {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
  },
  jwtSecretKey: process.env.JWT_SECRET_KEY,
  jwtTokenLoginLifeTime: "120",
  jwtTokenRefreshLifeTime: "7d",
}
module.exports = config