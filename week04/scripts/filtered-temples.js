const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Oakland California",
      location: "Oakland, California, United States",
      dedicated: "1964, November, 17",
      area: 94602,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/oakland-california/400x250/01-Oakland-Temple-Exterior-2236889.jpg"
    },
    {
      templeName: "Tampico Mexico",
      location: "Tamaulipas, Mexico",
      dedicated: "2000, May, 20",
      area: 89480,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tampico-mexico/400x250/tampico-mexico-temple-lds-129826-wallpaper.jpg"
    }
  ];

  function createTempleCard(temple) {
    const container = document.querySelector('.grid-container');

    const figure = document.createElement('figure');
    figure.classList.add('temple-card'); // Add a class for easier styling

    const title = document.createElement('h2');
    title.textContent = temple.templeName;
    figure.appendChild(title);

    const location = document.createElement('p');
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    figure.appendChild(location);

    const dedicated = document.createElement('p');
    dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    figure.appendChild(dedicated);

    const size = document.createElement('p');
    size.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
    figure.appendChild(size);

    const img = document.createElement('img');
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = 'lazy';
    figure.appendChild(img);

    container.appendChild(figure);
}

  temples.forEach(createTempleCard);

  document.querySelector('nav').addEventListener('click', function(event) {
    if (event.target.tagName === 'A') {
        const filter = event.target.textContent.toLowerCase();
        const container = document.querySelector('.grid-container');
        container.innerHTML = ''; //Clear existing content

        let filteredTemples;

        switch (filter) {
            case 'home':
                filteredTemples = temples;
                break;
            case 'old':
                filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
                break;
            case 'new':
                filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
                break;
            case 'large':
                filteredTemples = temples.filter(temple => temple.area > 90000);
                break;
            case 'small':
                filteredTemples = temples.filter(temple => temple.area < 10000);
                break;
            default:
                filteredTemples = temples;

        }

        filteredTemples.forEach(createTempleCard);
    }
  });

  const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

  document.getElementById('currentyear').textContent = new Date().getFullYear();
  document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
