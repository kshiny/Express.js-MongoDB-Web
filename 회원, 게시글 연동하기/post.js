// post.js

const { Schema } = require('mongoose');
const shortId = require('./types/short-id');

const PostSchema = new Schema({
  shortId,
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    // 자동으로 index 생성, 검색할 때 MongoDB에서 index를 사용하여 검색 가능
    index: true,
  },
}, {
  timestamps: true,
});

module.exports = PostSchema;