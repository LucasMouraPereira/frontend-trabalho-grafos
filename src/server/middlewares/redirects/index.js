const url = require("url");
const general = require("./general");

module.exports = (req, res, next) => {
  const parsedUrl = url.parse(req.url, true);
  const { pathname } = parsedUrl;
  const redirect =
    general.find((x) => x.source === pathname);

  if (redirect) {
    const type = redirect.permanent ? 301 : 302;
    res.redirect(type, redirect.destination);
  } else {
    next();
  }
};
