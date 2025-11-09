// home.js
async function loadPosts() {
  const response = await fetch('posts.json');
  const posts = await response.json();
  const feed = document.getElementById('feed');

  posts.forEach(post => {
    const div = document.createElement('a');
    div.href = `post.html?id=${post.id}`;
    div.className = 'post-link';
    div.innerHTML = `
      <div class="post">
        <h3>${post.title}</h3>
        <p class="author">By ${post.author}</p>
        <div class="tags">
          ${post.tags.map(tag => `<span>${tag}</span>`).join('')}
        </div>
        <p class="desc">${post.description}</p>
        ${post.image ? `<img src="${post.image}" class="post-img" alt="${post.title}">` : ''}
        <p class="date">${post.date}</p>
      </div>
    `;
    feed.appendChild(div);
  });
}

document.addEventListener('DOMContentLoaded', loadPosts);