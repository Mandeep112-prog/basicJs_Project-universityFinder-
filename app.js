let url = "http://universities.hipolabs.com/search?country=";

let btn = document.querySelector("button");

async function getColleges(country) {
  try {
    let res = await axios.get(url+country);
    return res.data;
  } catch (err) {
    console.log("error : ", err);
    return [];
  }
};

btn.addEventListener("click", async () => {
    let input = document.querySelector("input");
    let country = input.value;
    console.log(country);
   let collArr = await getColleges(country);
   console.log(collArr);
   show(collArr);

   input.value = "";
});

function show(collArr){
    let list = document.querySelector("#list");
    list.innerText = "";
    if(collArr.length == 0){
      let li =  document.createElement("li");
       li.innerText = "No university found";
       list.appendChild(li);
    }
    for(college of collArr){
       let li =  document.createElement("li");
       li.innerText = college.name;
       list.appendChild(li);
    }
    
};


