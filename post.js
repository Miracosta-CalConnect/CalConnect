// post.js
async function loadPost() {
  const urlParams = new URLSearchParams(window.location.search);
  const postId = urlParams.get('id');
  const response = await fetch('posts.json');
  const posts = await response.json();
  const post = posts.find(p => p.id === postId);

  const container = document.getElementById('post-container');

  if (!post) {
    container.innerHTML = '<p>Post not found.</p>';
    return;
  }

  // Build the main post content
  let html = `
    <h2>${post.title}</h2>
    <p class="author">By ${post.author}</p>
    <div class="tags">
      ${post.tags.map(tag => `<span>${tag}</span>`).join('')}
    </div>
    <p class="desc">${post.description}</p>
  `;

  // Add extra details
  if (post.details) {
    html += post.details.map(p => `<p class="desc">${p}</p>`).join('');
  }

  // Add image if available
  if (post.image) {
    html += `<img src="${post.image}" class="post-img" alt="${post.title}">`;
  }

  // Add date
  html += `<p class="date">${post.date}</p>`;

  // Add comments
  if (post.comments && post.comments.length > 0) {
    html += `
      <div class="comments-section">
        <h4>Comments (${post.comments.length}):</h4>
        ${post.comments.map(c => `
          <div class="comment">
            <p><b>${c.name}:</b></p>
            <p>${c.text}</p>
          </div>
        `).join('')}
      </div>
    `;
  } else {
    html += `<div class="comments-section"><h4>Comments (0):</h4><p>No comments yet.</p></div>`;
  }

  container.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', loadPost);