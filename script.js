async function foo(){

    var res = await fetch("https://zoo-animal-api.herokuapp.com/animals/rand");
    var res1 =await res.json();
    console.log(res1);
  
    try{
      var container=document.createElement("div");
     container.setAttribute("class","container");

    var row=document.createElement("div");
    row.classList.add("row","m-3");


    row.innerHTML+=`
    <div class="col mb-12">
    <div class="card"style ="width:502px";>
      <img src=" ${res1.image_link}" class="card-img-top" alt="Animals" style ="width:500px"; height:100px;>
      <div class="card-body">
        <h2 class="card-title">${res1.name}:</h5>
        <div class="in">
        <p>Latin Name  : ${res1.latin_name}</p>
        <p>ID          : ${res1.id}</p>
        <p>active_time : ${res1.active_time}</p>
        <p>Animal Type : ${res1.animal_type}</p>
        <p>Diet        : ${res1.diet}</p>
        <p>geo Range   :${res1.geo_range}</p>
        <p>Habitat     :${res1.habitat}</p>
        <p>Length Max  : ${res1.length_max}</p>
        <p>Length Min  : ${res1.length_min}</p>
        <p>Lifespan    : ${res1.lifespan}</p>
        <p>Weight Max  : ${res1.weight_max}</p>
        <p>Weight Min  : ${res1.weight_min}</p>
        </div>
      </div>
    </div>
  </div>`;
       

  container.append(row);
  document.body.append(container);
    }
    catch(error){
        console.log(error);
    }

    }
    foo();  
    