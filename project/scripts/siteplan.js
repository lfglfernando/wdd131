const projects = [
    {
      projectName: "Marriage Proposal",
      languages: "HTML, CSS, JavaScript",
      date: "Nov, 2023",
      imageUrl:
      "images/marriage-proposal.webp",
      projectLink: "https://lfglfernando.github.io/wdd130/proposal/netflix.html"
    },
    {
      projectName: "Temple List",
      languages: "HTML, CSS, JavaScript",
      date: "July, 2024",
      imageUrl:
      "images/temple-list.webp",
      projectLink: "https://lfglfernando.github.io/wdd131/filtered-temples.html"
    },
    {
        projectName: "Manti Utah",
        languages: "Manti, Utah, United States",
        date: "1888, May, 21",
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
        projectLink: "https://lfglfernando.github.io/wdd130/proposal/netflix.html"

    },
    {
        projectName: "Manti Utah",
        languages: "Manti, Utah, United States",
        date: "1888, May, 21",
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
        projectLink: "https://lfglfernando.github.io/wdd130/proposal/netflix.html"

    },
    {
        projectName: "Manti Utah",
        languages: "Manti, Utah, United States",
        date: "1888, May, 21",
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
        projectLink: "https://lfglfernando.github.io/wdd130/proposal/netflix.html"

    },
    {
        projectName: "Manti Utah",
        languages: "Manti, Utah, United States",
        date: "1888, May, 21",
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
        projectLink: "https://lfglfernando.github.io/wdd130/proposal/netflix.html"

    }
  ];

  function createProjectCard(project) {
    const container = document.querySelector('.grid-container');

    const figure = document.createElement('figure');
    figure.classList.add('temple-card');

    const a = document.createElement('a');
    a.classList.add("card-a");
    a.href = project.projectLink;
    a.target = "_blank"
    figure.appendChild(a);

    const title = document.createElement('h2');
    title.textContent = project.projectName;
    a.appendChild(title);

    const language = document.createElement('p');
    language.innerHTML = `<span class="label">Languagues:</span> ${project.languages}`;
    a.appendChild(language);

    const dedicated = document.createElement('p');
    dedicated.innerHTML = `<span class="label">Date:</span> ${project.date}`;
    a.appendChild(dedicated);

    const img = document.createElement('img');
    img.src = project.imageUrl;
    img.alt = project.projectName;
    img.loading = 'lazy';
    a.appendChild(img);

    container.appendChild(figure);
}

  projects.forEach(createProjectCard);


const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

  document.getElementById('currentyear').textContent = new Date().getFullYear();
  document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
