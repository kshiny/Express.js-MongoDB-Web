const { Router } = require('express');
const { Post } = require('../models');

const router = Router();

router.get('/', async (req, res, next) => {
  if (req.query.write) {
    res.render('post/edit');
    return;
  }
  
  const posts = await Post.find({}); // 전체 게시글 목록
  
  res.render('post/list', { posts }); // 위의 포스트를 템플릿으로 전달
});

router.get('/:shortId', async (req, res, next) => {
  const { shortId } = req.params;
  const post = await Post.findOne({ // shortId 로 게시글 찾기
    shortId, // 전달 받은 shortId에 일치하는 게시글 하나를 찾고, 찾은 게시글을 query.edit이 있다면 edit 페이지로 아니면 view 페이지로 이동
  });
  
  if (req.query.edit) {
    res.render('post/edit', { post });
    return;
  }
  
  res.render('post/view', { post });
});

router.post('/', async (req, res, next) => {
  const { title, content } = req.body;
  
  try {
    if (!title || !content) {
      throw new Error('제목과 내용을 입력해 주세요');
    }
    
    const post = await Post.create({ // 게시글 생성
      title,
      content, 
    });
    res.redirect(`/posts/${post.shortId}`); // 게시글 상세 페이지로 작성된 게시글을 바로 상세 페이지로 보내줌 
  } catch (err) {
    next(err);
  }
});

router.post('/:shortId', async (req, res, next) => {
  const { shortId } = req.params;
  const { title, content } = req.body;
  
  try {
    if (!title || !content) {
      throw new Error('제목과 내용을 입력해 주세요');
    }
    
    await Post.updateOne({ shortId }, { // shortId 로 게시글 수정
      title,
      content,
    });
    
    res.redirect(`/posts/${shortId}`);
  } catch (err) {
    next(err);
  }
});

router.delete('/:shortId', async (req, res, next) => {
  const { shortId } = req.params;
  await Post.deleteOne({ shortId }); // shortId 로 게시글 삭제
  res.send('OK');
});

module.exports = router;