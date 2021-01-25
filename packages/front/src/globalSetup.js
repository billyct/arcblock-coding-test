module.exports = async () => {
  // set jest timezone
  // see https://stackoverflow.com/a/56482581/2202607
  process.env.TZ = 'UTC'
}
