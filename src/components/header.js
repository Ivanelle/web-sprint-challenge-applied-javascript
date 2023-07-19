const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The html tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

 
  const header = document.createElement('div');
  const spanDate = document.createElement('span');
  const headTitle = document.createElement('h1');
  const spanTemp = document.createElement('span');

  header.classList.add('header');
  spanDate.classList.add('date');
  spanTemp.classList.add('temp');

  spanDate.textContent = `${date}`;
  headTitle.textContent = `${title}`
  spanTemp.textContent = `${temp}`

  header.appendChild(spanDate);
  header.appendChild(headTitle);
  header.appendChild(spanTemp);

  return header
}


const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

  // HINT: querySelector can take in a string (ie querySelector("#wrapper")) 
  // but it can also take in a variable (ie querySelector(selector))
  // We are taking care of passing in the correct selector on line 16,
  // so all that you need to do is pass it into the querySelector method
  // for the tests to work!

  document.querySelector(selector)
  .appendChild(Header('What your dog actually thinks about you!', '12.31.23', 'below freezing'))
}

export { Header, headerAppender }
