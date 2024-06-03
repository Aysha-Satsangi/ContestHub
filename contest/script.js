let url = "https://kontests.net/api/v1/all";

let response = fetch(url)
response.then((v) =>{
    return v.json()
}).then((contests)=>{
    console.log(contests)
    const images = ["image1.jpeg", "image2.jpeg"]; // Add more image URLs here

    ihtml =""
    for(item in contests){
        console.log(contests[item])
        const randomImage = images[Math.floor(Math.random() * images.length)];
        
        ihtml +=`<div class="card" style="width: 22rem; margin: 5px;">
                    <img src="${randomImage}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title"></h5>
                    <p class="card-text">Status is ${contests[item].status} and site is ${contests[item].site}</p>
                    <p class="card-text">In 24 Hours? ${contests[item].in_24_hours}</p>
                    <p>Starts at:${contests[item].start_time}</p>
                    <p>Ends at:${contests[item].end_time}</p>

                    <a href="${contests[item].url}" class="btn btn-primary">Visit page</a>
                    </div>
                </div>`


    } 
    cardContainer.innerHTML = ihtml

})

