let apiKey = "b428d3ba"


    function loadData() {
        let searchParam = document.getElementById("searchParam").value;

        fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${searchParam}`)

            .then(response => response.json())
            .then(resData => display(resData))
            .catch(error => alert(error))

    }

    function display(movieData) {
        let disContainer = document.getElementById("container");

        disContainer.innerHTML = "";

        if (movieData.Response === "False") {
            let noData = document.createElement('div');
            noData.textContent = "No Result Found!";
            disContainer.appendChild(noData);
        } else {
            movieData.Search.forEach((movie) => {
                const card = document.createElement("div");
                card.className = "card";


                let poster = document.createElement("img")
                poster.src = movie.Poster
                poster.className = "poster"

                
                let title = document.createElement("p")
                title.textContent = "Title : " + movie.Title
                title.className ="title"

                
                let release = document.createElement("p")
                release.textContent = "Year : " + movie.Year;
                release.className = "rel"

                
                let id = document.createElement("p")
                id.textContent = "IMDB-ID : " + movie.imdbID

                id.className="id"

                
                let genre = document.createElement("p")
                genre.textContent = "Type : " + movie.Type

                genre.className = "genre"

                card.append(poster, title, release, genre);

                card.addEventListener('click', function (ele) {
                    localStorage.setItem("imdbId", movie.imdbID);
                    location.href = "index.html";
                });

                disContainer.appendChild(card);
            });
        }
    }