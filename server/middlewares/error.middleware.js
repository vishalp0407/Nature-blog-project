const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;

  if (err.name === "CastError" && err.kind === "ObjectId") {
    statusCode = 404;
    message = "Resource not found";
  }
  res.statusCode(statusCode).json({
    message,
    stack: (process.env.NODE_ENV = "development" ? err.statck : null),
  });
};

export { errorHandler };
