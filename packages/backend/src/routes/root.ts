import express from 'express';

export const router = express.Router();

router.get('/', (_req, res) => {
  res.status(200).send('API Running');
});

export default router;
