const { nanoid } = require('nanoid'); // 패키지

const shortId = { // 스키마 안에 default 값으로 return을 nanoid로 생성
  type: String,
  default: () => {
    return nanoid()
  },
  require: true,
  index: true,
}

module.exports = shortId;