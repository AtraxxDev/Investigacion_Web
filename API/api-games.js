export function GetAmiibo() {
  const d = document,
    $content = d.querySelector("#gameContent"),
    $search = d.querySelector("#search");

  $search.addEventListener("keyup", async (e) => {
    if (e.key === "Enter") {
      try {
        $content.innerHTML = `<span class="loader"></span>`;

        let query = e.target.value.toLowerCase(),
          res = await fetch(`https://www.amiiboapi.com/api/amiibo/?name=${query}`);

        if (!res.ok) throw "Error escriba otro amiibo";

        let json = await res.json(),
        $template = "";

        console.log(query,json);
        json.amiibo.forEach(el => {
          let poster = el.image;
          $template += `
          <figure class="text-center col-lg-12 py-5 my-4">
            <h2><b>${el.amiiboSeries}</b></h2>
            <h3>${el.name}</h3>
            <img src="${poster}"/>
          </figure>
        `;
        });

        if(json.amiibo.length === 0)
        {
          $template = `<h2 class="text-center"><b>Inserta otro amibo</b></h2>`;
        }
        $content.innerHTML = $template;
      } 
      catch (error) {
        console.log(error);
        $content.innerHTML = `<p><p>${error}</p></b>`;
      }
    }
  });
  $search.addEventListener("search", (e) => {
    console.log(e);
    $shows.innerHTML = "";
  });
}
