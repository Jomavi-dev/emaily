module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({ Error: 'You must login to be able to do this!' })
  }
  next()
}