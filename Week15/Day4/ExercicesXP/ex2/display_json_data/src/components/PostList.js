import React from 'react';
import data from '../data.json'; // Import the JSON data

function PostList() {
  return (
    <div>
      <h1>Post List</h1>
      {data.map(post => (
        <div key={post.id}>
          <h2> **{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default PostList;