function Artist(name, skill, profession){
    this.name = name
    this.skill = skill
    this.profession = profession
    Object.setPrototypeOf(artistsObject,this)
}
Artist.prototype.getProfession = function(){
    return this.profession
}
Artist.prototype.print =  function(){
    return `I am ${this.name}`
}

var artistsObject = {}
let call = new Artist("sarim","coding","singing")

console.log(call.getProfession())


// Do not change this
export {Artist, artistsObject};
