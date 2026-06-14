const obj = {
    main : document.getElementById('divs-droper')
}
const addMovies = async () => {
  const load = await fetch(
    "http://raw.githubusercontent.com/lomsadze123/movie-api/refs/heads/main/data.json",
  );
  if (!load.ok) {
    throw (document.body.textContent = "Error type: 404");
  }
  const date = await load.json();
  console.log(date);
  for (let i in date) {
    const imgPicture = document.createElement("img");
    imgPicture.className = 'imgPicture';
    const Maindiv = document.createElement("div");
    Maindiv.className = 'Maindiv';
    const title = document.createElement("h4");
    title.className = 'title';
    const descriptionDiv = document.createElement("div");
    descriptionDiv.className = 'descriptionDiv';
    const year = document.createElement("p");
    year.className = 'year';
    const pg = document.createElement("p");
    pg.className = 'pg';
    const categori = document.createElement("p");
    categori.className = 'category';

    title.textContent = date[i].title;
    year.textContent = date[i].year;
    pg.textContent = date[i].rating;
    imgPicture.src = date[i].thumbnail.regular.large;

    Maindiv.appendChild(imgPicture);
    Maindiv.appendChild(descriptionDiv);
    Maindiv.appendChild(title)

    descriptionDiv.append(year,categori,pg)

    obj.main.appendChild(Maindiv)
  }
};
addMovies();

