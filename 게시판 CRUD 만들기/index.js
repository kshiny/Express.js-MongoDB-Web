const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  // 첫 페이지에 접근할 경우 /posts 페이지로 redirect 하도록 수정
  res.redirect('/posts');
});

module.exports = router;