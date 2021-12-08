module.exports = (req, res, next) => {
  if (req.user.credits < 1) {
    // 402 will be more apropriate
    return res.status(403).send({ Error: 'Not enough credits!' })
  }
  next()
}
