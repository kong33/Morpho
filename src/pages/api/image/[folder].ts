/* eslint-disable */
import fs from 'fs';

import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { folder } = req.query;
  if (typeof folder !== 'string') {
    res.status(400).json({ message: 'folder parameter must be a string' });
    return;
  }
  // 이미지가 저장된 디렉토리 경로 설정
  const directoryPath = path.join(process.cwd(), 'public', 'image', 'ProductImage', folder);

  // 디렉토리 내의 모든 파일 읽기
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      return res.status(500).json({ message: 'Failed to read directory' });
    }

    // 이미지 URL로 변환
    const imageUrls = files.map((file) => `/image/ProductImage/${folder}/${file}`);

    // 클라이언트에 이미지 URL 배열 전송
    res.status(200).json(imageUrls);
  });
}