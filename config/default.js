module.exports = {
  port: 5000,
  secretKey: process.env.SECRET_KEY,
  mongoUri: `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.kq2zj.mongodb.net/app?retryWrites=true&w=majority`,
};
