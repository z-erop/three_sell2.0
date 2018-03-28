var map = new Map();

map.set("10",{name:'king',number:1});

// console.log(map.get('10').name);

if(map.get('9')==null){
    // console.log("the data is null");
    map.set("9",{name:'test'});
    // console.log(map.get('9').name);
}else{
   map.get('10').number++;
   // console.log(map.get('10').number);
}

map.forEach(function (item) {
    console.log(item.name);
})
