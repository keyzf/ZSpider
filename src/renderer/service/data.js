const sqlite3 = require('sqlite3')
const db = new sqlite3.Database('spider')
export async function setData (appid, data) {
  db.serialize(() => {
    db.run(`CREATE TABLE data-${appid} (
      column_name1 data_type(size),
      column_name2 data_type(size),
      column_name3 data_type(size),
    )`)
  })
  try {
  } catch (e) {}
}
