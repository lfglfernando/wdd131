
//select 
const article = document.querySelector('article');

//change
article.innerHTML = 'innerHTML supports <strong>HTML</strong> tags. The textContent property does not.';

//change inline CSS
article.style.textAlign = 'right';

//change an attribute
article.setAttribute('class', 'active');

//alternative to change the attribute
articleElement.classList.add('active');


//to create an Element
const paragraph = document.createElement('p');

//to append an Element
article.appendChild(paragraph);
article.append(paragraph, 'Hello World Addition!');

//to remove an Element
article.removeChild(paragraph);
article.remove();