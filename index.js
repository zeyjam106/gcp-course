//-----------------------------------------------------------------------------
// NodeJS App for GCP Cloud Functions deployed via GCP Cloud Build Triggers
// Copyleft (c) by Denis Astahov
//-----------------------------------------------------------------------------

exports.helloJAM = (req, res) => {
  const message="<font color='blue'>СloudFunction of Jamka Zeynalov!</font><br><b>App Version 5.5</b>";
  res.status(200).send(message);
};
