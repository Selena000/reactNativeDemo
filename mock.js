// 模拟接口
const express = require('express')
const app = express()

app.get('/api/react/getMovieList', (req, res) => {
  res.json({
    code: 0,
    list: [
      {
        title: "标题1",
        year: "2015",
        posters: { thumbnail: "https://dss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=3427062652,615024910&fm=202&src=780&ernie&mola=new&crop=v1" }
      },
      {
        title: "标题2",
        year: "2015",
        posters: { thumbnail: "http://i.imgur.com/UePbdph.jpg" }
      },
      {
        title: "标题3",
        year: "2015",
        posters: { thumbnail: "http://i.imgur.com/UePbdph.jpg" }
      },
    ]
  })
})

app.get('/api/course/list', (req, res) => {
  // res.header('Access-Control-Allow-Origin', '*')
  // res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
  // res.header('Content-Type', 'application/json;charset=utf-8')

  res.json({
    code: 0,
    list: [
      { title: 'A', releaseYear: 1 },
      { title: 'B', releaseYear: 2 },
      { title: 'C', releaseYear: 3 },
      { title: 'D', releaseYear: 4 }
    ]
  })
})

app.get('/api/user/userInfo', (req, res) => {
  // res.header('Access-Control-Allow-Origin', '*')
  // res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
  // res.header('Content-Type', 'application/json;charset=utf-8')

  res.json({
    code: 0,
    data: {
      name: 'suhong',
      best: '你是最棒的！'
    }
  })
})

app.listen(9090, () => {
  console.log('mock数据启动完毕！')
})