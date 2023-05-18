import React from 'react';
import { useRouter } from 'next/router';

const Article = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>Article: {slug}</h1>
      <p>This is the content of {slug}.</p>
    </div>
  );
};

export default Article;
