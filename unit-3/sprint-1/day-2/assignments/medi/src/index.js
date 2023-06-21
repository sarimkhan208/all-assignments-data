let obj = {}
function studentData(firstname,lastname,age,marks,...rest) {
  let obj = {
    fullName : `${firstname} ${lastname}`,
    age : age,
    hobbies : rest,
    getInfo : function(){
      return `${firstname} ${lastname}'s age is ${age}.`
    },
    getResult : function(){
      let total=0
      for(let i=0; i<marks.length; i++){
        total+=marks[i]
      }
      let avg = total/marks.length;
      if(avg<50){return "Result: FAIL"}
      else{return "Result: PASS"}
    }
  }
  return obj
}

export {
  studentData
}
studentData('Vivek', 'Agarwal', 38, [50,60,70] , 'Singing', 'Coding', 'Meditating');
