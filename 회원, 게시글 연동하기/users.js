// users.js

const { Router } = require('express');

const { User, Post } = require('../models');
const asyncHandler = require('../utils/async-handler');

const router = Router();

router.get('/:shortId/posts', asyncHandler(async (req, res) => {
  const { shortId } = req.params;
  // 유저 검색을 해야하므로 다음 코드를 추가
  const user = await User.findOne({ shortId });
  if (!user) {
   throw new Error('사용자가 없습니다.');
  }
  
  // 유저 게시글 모아보기 기능 완성하기
  // 다음 코드를 posts.js에서 가져오면 목록 기능을 하게 됨
  const page = Number(req.query.page || 1);
  const perPage = Number(req.query.perPage || 10);
  
  const [posts, totalPage] = await
Post.getPaginatedPosts({ author: user }, page, perPage);

  res.render('post/list', { posts, page, perPage, totalPage, user, path: req.baseUrl + req.url });
}));

module.exports = router;