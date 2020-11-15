const cheerio = require('cheerio')
const request = require('request')
const URL = 'https://www.codewars.com/users/leaderboard'

const solution = () => {
  return new Promise(function (resolve, reject) {
    const leaderboard = {
      position: {}
    }
    request({
      method: 'GET',
      url: URL
    }, (err, response, body) => {
      if (err) reject(err)
      const $ = cheerio.load(body)
      $('.leaderboard table tr').each((i, el) => {
        if (el.attribs['data-username']) {
          const player = {
            name: el.attribs['data-username'],
            clan: el.children[2].children[0] ? el.children[2].children[0].data : '',
            honor: parseInt(el.children[3].children[0].data.replace(/,/g, ''))
          }
          leaderboard.position[i] = player
        }
      })
      resolve(leaderboard)
    })
  })
}

solution().then((res) => console.log(res))
