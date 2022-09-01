const imgcontainerEl = document.querySelector(".img-container");
const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", ()=>{
     img_num = 10;
    addImg();
})

function addImg(){
    for (let index = 0; index < img_num; index++) 
    {
         const new_img = document.createElement("img");
         new_img.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`;
         imgcontainerEl.appendChild(new_img);
}
}