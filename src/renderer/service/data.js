import { getAppById } from './global.service'
const sqlite3 = require('sqlite3')
const db = new sqlite3.Database('spider')
export async function createDataTable (appid) {
  const app = getAppById(appid)
  const params = JSON.parse(app.ruleConfig).params
  let arr = []
  params.forEach(v => {
    arr.push(`${v.name} varchar(255)`)
  })
  db.serialize(() => {
    db.run(`DROP TABLE IF EXISTS 'data-${appid}';CREATE TABLE data-${appid} (
      ${arr.join(',')}
    )`)
  })
  try {
  } catch (e) {}
}
