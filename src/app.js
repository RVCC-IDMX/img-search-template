const form = document.querySelector('.search-form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  const response = await fetch('/.netlify/functions/unsplash-search', {
    method: 'POST',
    body: JSON.stringify({
      query: formData.get('query'),
    }),
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));

  const dataObj = response.results[0];

  const postImg = document.querySelector('.post__img');
  postImg.src = dataObj.urls.small;
  const postUser = document.querySelector('.post__user');
  /*
    Add an attribution statement below using the
    postUser element and the photographer's name from dataObj
   */



});