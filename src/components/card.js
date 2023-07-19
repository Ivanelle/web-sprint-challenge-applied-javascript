import axios from 'axios'
const Card = ({ headline, authorPhoto, authorName }) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  // })


  const card = document.createElement('div');
  const headlineDiv = document.createElement('div');
  const authorDiv = document.createElement('div');
  const imgContainer = document.createElement('div');
  const img = document.createElement('img');
  const authorSpan = document.createElement('span');
  
  card.classList.add('card');
  headlineDiv.classList.add('headline');
  authorDiv.classList.add('author');
  imgContainer.classList.add('img-container');

  headlineDiv.textContent = headline;
  img.src = authorPhoto;
  img.alt = 'author photo'
  authorSpan.textContent = `By ${authorName}`

  card.appendChild(headlineDiv);
  card.appendChild(authorDiv);
  authorDiv.appendChild(imgContainer);
  imgContainer.appendChild(img);
  authorDiv.appendChild(authorSpan);

  card.addEventListener('click', () => {
    console.log(headline)
  })

  return card

}



const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  const elem = document.querySelector(selector)
  
  
  axios.get(`http://localhost:5001/api/articles`)
  .then((resp) => {
    for(const key in resp.data.articles) {
      for (const art in resp.data.articles[key]){
        const headline = resp.data.articles[key][art].headline
        const authorPhoto = resp.data.articles[key][art].authorPhoto
        const authorName = resp.data.articles[key][art].authorName
        elem.appendChild(Card({headline, authorPhoto, authorName}))
      }
    }
  })
  .catch(err => console.error(err))
}


export { Card, cardAppender }
