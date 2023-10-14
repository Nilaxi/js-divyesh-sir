let jsonData;
const fetchProduct = () => {
        fetch("https://api.escuelajs.co/api/v1/products")
        .then(y=>y.json())
        .then(y=> {
            jsonData = y;
            display(y);
        })
}
fetchProduct();
const display = (data) =>{
    const displayHtml = data.map((v)=>{
        return `
        <div class="col-12 col-md-4 mb-5">
            <div class="card h-100 w-auto">
                <div><img src="${v.category.image}" style="width:100%;height:auto"></div>
                <div class="card-body">
                    <p class="card-text">${v.id}</p>
                    <h5 class="card-title"> ${v.title} </h5><br>
                    <p class="card-text">price : <b>${v.price}</b></p>
                    <p class="card-text">${v.description}</p>
                    <a href="#" class="btn btn-dark ">Buy Now</a>
                </div>
            </div>
        </div>`
    });
    document.getElementById("products").innerHTML = displayHtml.join("");
}
filterData = (e) => {
    const inputData = jsonData.filter((y) => {
        return y.title.includes(e.target.value);
    });
    display(inputData);
}
ascending = ()=>{
    let sortdata = jsonData.sort((a, b)=>{
        if(a.price>b.price){
            return 1
        }
    });
    display(sortdata);
}
decending = ()=>{
    let sortdata = jsonData.sort((a, b)=>{
        if(a.price<b.price){
            return 1
        }
    });
    display(sortdata);
}