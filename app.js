function saveDraft(){

let data={};

document.querySelectorAll(
"input,select,textarea"
).forEach(field=>{

if(field.id){
data[field.id]=field.value;
}

});

localStorage.setItem(
"HoSeLDraft",
JSON.stringify(data)
);

alert("Draft Saved Successfully");

}


window.onload=function(){

const saved=JSON.parse(
localStorage.getItem("HoSeLDraft")
);

if(!saved) return;

document.querySelectorAll(
"input,select,textarea"
).forEach(field=>{

if(field.id && saved[field.id]){
field.value=saved[field.id];
}

});

}


function nextBod(){

if(document.getElementById("fname").value===""){

alert("Please enter First Name");

return;

}

document.getElementById(
"bod1"
).classList.add(
"hidden"
);

document.getElementById(
"bod2"
).classList.remove(
"hidden"
);

window.scrollTo({

top:0,

behavior:"smooth"

});

}


function submitForm(){

alert(
"Application Submitted Successfully"
);

localStorage.removeItem(
"HoSeLDraft"
);

location.reload();

}
