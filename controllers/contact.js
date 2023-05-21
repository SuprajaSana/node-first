exports.getContactus = (req, res, next) => {
  res.sendFile(path.join(rootpath, "views", "contactus.html"));
};

exports.contactDetails = (req, res, next) => {
  res.redirect("/success");
};