var person=[{
    "first_name":"vishnu",
    "gender":"female",
    "age":"24",
    "phone":"9994734372",
    "area":"salem",
   
},
{
    "first_name":"priya",
    "gender":"female",
    "age":"24",
    "phone":"9786675667",
    "area":"chennai",
    
}
];

//Using For loop
for(var i=0;i<person.length;i++){
   
    console.log("Name:"+(person[i].first_name)+"."+" age:"+(person[i].age)+" from:"+(person[i].area));
}

// Using For in loop

for(var a in person){
   
    console.log(a+"") +("Name: ")+(person[a].first_name)+"."+" from "+(person[a].area)}