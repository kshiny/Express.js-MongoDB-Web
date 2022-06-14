const { Schema } = require('mongoose');
// 1. short-id.js에 있는 shortId 속성을 추가
const shortId = require('./types/short-id');

// PostSchema에 shortId 속성을 추가
const PostSchema = new Schema({
  shortId, // 기본값으로 nanoid를 생성
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    default: '작성자',
  }
}, {
  timestamps: true,
});

module.exports = PostSchema;