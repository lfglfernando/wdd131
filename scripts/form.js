const year = new Date().getFullYear();
document.getElementById("currentyear").textContent = year;


const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modification: ${lastModified}`;


const items = [
    {
      id: 'flux capacitor',
      iname: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: 'power laces',
      iname: "power laces",
      averagerating: 4.7
    },
    {
      id: 'time circuits',
      iname: "time circuits",
      averagerating: 3.5
    },
    {
      id: 'low voltage reactor',
      iname: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: 'warp equalizer',
      iname: "warp equalizer",
      averagerating: 5.0
    }
  ];

  function createItem(item) {
    const container = document.getElementById('product-choosen');

    const option = document.createElement('option');
    option.textContent = item.iname;
    option.value = item.id;
    container.appendChild(option);

}

items.forEach(createItem);