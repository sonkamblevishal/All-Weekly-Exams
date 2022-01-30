var input = document.querySelector("input");
var btn = document.querySelector("button");
var table = document.querySelector("table");
var header = document.querySelector("h2");

 
var api = (country_name) => {
  url = `http://universities.hipolabs.com/search?country=${country_name}`;

  fetch(url)
    .then((Response) => {
        return Response.json();
    })
    .then((data) => {
        console.log(data);
     
      for (var i = 0; i < data.length; i++) 
       {
        let university = data[i].name;
        let domain = data[i].domains;
        let state = data[i]["state-province"];
        let country = data[i].country;
        let head = ["University", "Domain","State"];
        let info=[university,domain,state];
        let tr = document.createElement("tr");
        for(let i in info){
            let td=document.createElement("td");
            td.innerText=info[i];
            tr.appendChild(td);
            td.classList.add("str");
        }

        
         header.innerText = country;
         table.appendChild(tr);
        
      }
    });
};

btn.addEventListener("click", (e) => {
  table.innerHTML="";
var th1 = document.createElement("th");
var th2 = document.createElement("th");
var th3 = document.createElement("th");

th1.innerText = "University";
th2.innerText = "Domain";
th3.innerText = "State";
 
table.append(th1,th2,th3);
  country_name = input.value;
  api(country_name);
});

