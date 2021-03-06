exports.success = (res, code, json) => {
  return res.status(code).json({
    status: 'ok',
    data: json
  });
};

exports.fail = (res, httpError) => {
  return res.status(httpError.code).json({
    status: 'failed',
    code: httpError.code,
    message: httpError.message
  });
};
