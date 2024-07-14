const projects = [
    {
      projectName: "Marriage Proposal",
      languages: "HTML, CSS, JavaScript",
      date: "Nov, 2023",
      imageUrl:
      "images/marriage-proposal.webp"
    },
    {
      projectName: "Temple List",
      languages: "HTML, CSS, JavaScript",
      date: "July, 2024",
      imageUrl:
      "images/temple-list.webp"
    },
    {
        projectName: "Manti Utah",
        languages: "Manti, Utah, United States",
        date: "1888, May, 21",
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        projectName: "Manti Utah",
        languages: "Manti, Utah, United States",
        date: "1888, May, 21",
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        projectName: "Manti Utah",
        languages: "Manti, Utah, United States",
        date: "1888, May, 21",
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        projectName: "Manti Utah",
        languages: "Manti, Utah, United States",
        date: "1888, May, 21",
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    }
  ];

  function createTempleCard(project) {
    const container = document.querySelector('.grid-container');

    const figure = document.createElement('figure');
    figure.classList.add('temple-card');

    const title = document.createElement('h2');
    title.textContent = project.projectName;
    figure.appendChild(title);

    const language = document.createElement('p');
    language.innerHTML = `<span class="label">Languagues:</span> ${project.languages}`;
    figure.appendChild(language);

    const dedicated = document.createElement('p');
    dedicated.innerHTML = `<span class="label">Date:</span> ${project.date}`;
    figure.appendChild(dedicated);

    const img = document.createElement('img');
    img.src = project.imageUrl;
    img.alt = project.projectName;
    img.loading = 'lazy';
    figure.appendChild(img);

    container.appendChild(figure);
}

  projects.forEach(createTempleCard);

  document.querySelector('nav').addEventListener('click', function(event) {
    if (event.target.tagName === 'A') {
        const filter = event.target.textContent.toLowerCase();
        const container = document.querySelector('.grid-container');
        container.innerHTML = ''; //Clear existing content

        let filteredTemples;

        switch (filter) {
            case 'home':
                filteredTemples = projects;
                break;
            case 'old':
                filteredTemples = projects.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
                break;
            case 'new':
                filteredTemples = projects.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
                break;
            case 'large':
                filteredTemples = projects.filter(temple => temple.area > 90000);
                break;
            case 'small':
                filteredTemples = projects.filter(temple => temple.area < 10000);
                break;
            default:
                filteredTemples = projects;

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
