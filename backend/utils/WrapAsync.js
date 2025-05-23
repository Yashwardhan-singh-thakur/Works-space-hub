const WrapAsync = (fn) => {
  return function (req, res, next) {
    fn(req, res, next).catch((err) => {
      return next(err);
    });
  };
};

export default WrapAsync;
