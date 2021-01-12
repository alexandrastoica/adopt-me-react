import React from 'react';

const Article = (props) => {
  return (
    <div>
    <pre>
      <code>{JSON.stringify(props, null, 4)}</code>
    </pre>
    </div>
  );
};

export default Article;
