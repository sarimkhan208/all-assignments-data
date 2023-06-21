// Problem 1. complete the below function
function school(name,city,est,eng,hindi,math,a,b) {
  let obj = {
    name : `${name}`,
    getGeneralInfo : function(){
      return `${name} was established in ${est} at ${city}.`
    },
    getSubjectsInfo : function(){
      return `At ${name} we teach ${eng}, ${hindi}, ${math}, ${a}, ${b}.`
    }
  }
  return obj

}
// "At ABC School we teach English, Hindi, Mathematics."
// "ABC School was established in 1991 at New Delhi.
school('ABC School', 'New Delhi', 1991, 'English', 'Hindi', 'Mathematics');

// Problem 2.
let categoriesDirectory = {
  3: "Dessert",
  1: "MainCourse",
  2: "Starter"
};

let areas = [
  { id: 1, name: "British" },
  { id: 2, name: "Malaysian" }
];

let areasDirectory = areas.reduce((acc, item) => {
  acc[item.id] = item.name;
  return acc;
}, {});

let inputArray = [
  {
    idMeal: "52768",
    strMeal: "Apple Frangipan Tart",
    Category: 3,
    Area: 1,
  },

  {
    idMeal: "53049",
    strMeal: "Apam balik",
    Category: 3,
    Area: 2,
  },
  {
    idMeal: "52767",
    strMeal: "Bakewell tart",
    Category: 3,
    Area: 1,
  }
];

let outputArray = inputArray.reduce(function(acc,item){
  let obj = {};
  obj.productId = item.idMeal;
  obj.productTitle = item.strMeal;
  
  for(let key in categoriesDirectory){
    if(item.Category == key){
      obj.Category = categoriesDirectory[key]
    }
  }
  for(let i=0; i<areas.length; i++){
    if(areas[i].id == item.Area){
      obj.Area = areas[i].name
    }
  }
  acc.push(obj)
  return acc
},[])
// console.log(outputArray)

export { inputArray, outputArray, school, categoriesDirectory, areas, areasDirectory };
// [
//   { productId:"52768", productTitle:"Apple Frangipan Tart", Category:"Dessert", Area:"British" }, 
//   { productId:"53049", productTitle:"Apam balik", Category:"Dessert", Area:"Malaysian" },
//   { productId:"52767", productTitle:"Bakewell tart", Category:"Dessert", Area:"British" }
// ]