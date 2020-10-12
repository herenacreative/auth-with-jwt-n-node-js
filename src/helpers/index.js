module.exports = {
  response: ((res = {}, data = {}, statusExecution = "", statusCode = 0, message = "") => {
    const result = {};
    result.data = data || "";
    result.message = message;
    result.statusCode = statusCode || 200;
    result.statusExecution = statusExecution === "success" ? "success" : "failed";

    if (result.statusExecution == "success") {
      return res.status(result.statusCode).json({
        statusExecution: result.statusExecution,
        statusCode: result.statusCode,
        message: result.message,
        data: result.data
      });
    } else {
      return res.status(result.statusCode).json({
        statusExecution: result.statusExecution,
        statusCode: result.statusCode,
        message: result.message
      });
    }
  })
}