const { Test } = require("../models")
const { to, ReE, ReS } = require("../services/util.service")

const create = async (req, res) => {
  res.setHeader("Content-Type", "application/json")

  let err, test;

  [err, test] = await to(Test.create(req.body))
  if(err) return ReE(res, err, 422)

  return ReS(res, {
    message: "success fully add yay!",
    test: test
  }, 201)
}
module.exports.create = create

const get = async (req, res) => {
  res.setHeader("Content-Type", "application/json")

  let err, test;

  [err, test] = await to(Test.find())
  if(err) return ReE(res, err, 422)

  return ReS(res, {
    message: "found it!",
    test: test
  }, 201)
}
module.exports.get = get
