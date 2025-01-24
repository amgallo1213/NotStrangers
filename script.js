displayPerfumes()

async function displayPerfumes() {
    const perfumes = await getPerfumes()
    console.log(perfumes)

    const cardContainer = document.querySelector("#product_container")

    const perfumeCards = () => {
        perfumes.map((perfume) => {
            cardContainer.innerHTML += `
        <div class="card">
          <img src="${perfume.img}" class="card_img">
          <h2 class="card_name">${perfume.name}</h2>
          <p class="keyWords">${perfume.keyWords}</p>
        </div>
      `
        })
    }
    perfumeCards()

}

async function getPerfumes() {
    const res = await fetch("perfume.json")
    const data = await res.json()
    return data
}

