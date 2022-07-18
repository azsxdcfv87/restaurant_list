const http = require('http')
const express = require('express')
const exphbs = require('express-handlebars')
const restaurantList = require('./restaurant.json')
const app = express()
const port = 3000
// express 預設 hostname = localhost

// 加入樣板引擎
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
// 設定靜態樣式
app.use(express.static('public'))
// 以下為各種網址請求位置
app.get('/', (req, res) => {
  res.render('index', { restaurant: restaurantList.results })
})

// 設定網址位置
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})