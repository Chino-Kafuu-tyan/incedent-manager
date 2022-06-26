const cors = async (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Ответ, который указывает браузеру разрешить доступ к ресурсу из любого источника
  res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE"); // метод или методы доступа к ресурсам
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization"); // Заголовок ответа Access-Control-Allow-Headers используется в ответ на preflight request (en-US), чтобы указать, какие заголовки HTTP могут использоваться во время фактического запроса.
  next();
};
module.exports = cors;
