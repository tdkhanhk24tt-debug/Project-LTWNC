import React, {useState, useEffect} from 'react';
const tabs = ['posts', 'comments', 'albums', 'photos', 'users', 'todos'];
export function ContactPage() {
  const [title, setTitle] = useState('');
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState('posts'); 

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(res => res.json())
      .then(posts => setPosts(posts));
  }, [type]); 
  return (
    <div>
      {tabs.map(tab => (
        <button
          key={tab}
          style={type === tab ? {
            color: '#fff',
            backgroundColor: '#333' 
          } : {}}
          onClick={() => setType(tab)} 
        >
          {tab}
        </button> 
      ))}

      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      <ul>
  {posts.map((post, index) => (
    <li key={post.id}>
      {index + 1}. {post.title || post.name}
    </li>
  ))}
</ul>
    </div>
  );
}
export default ContactPage;