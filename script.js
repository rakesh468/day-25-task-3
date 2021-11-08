document.body.innerHTML=`
<section>
<div class="title">
<p class="name">Digimon</p>
<div class="row">
</div>
</section>`
async function finalspace(){
    const data=await fetch("https://digimon-api.vercel.app/api/digimon",{metod:"GET"});
    const users=await data.json();
    const container=document.querySelector(".row");
    users.forEach((user)=>{
        container.innerHTML+=`
        <div class="col-xs-12 col-sm-6 col-lg-4 col-xlg-3">
        <div class="pic">
        <img src="${user.img}"  alt="${user.name}"class="edit"/>
        <div class="details">
        <h3><b>Name:</b> ${user.name}</h3>
        <p><b>Level:</b> ${user.level}</p>
        </div>       
        </div>
        </div>
        `;
    });
console.log(users);
}
finalspace();