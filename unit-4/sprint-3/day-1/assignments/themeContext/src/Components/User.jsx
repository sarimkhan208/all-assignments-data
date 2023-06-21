import React from 'react'

export default function User({obj,isDarkTheme}) {
    let white = {background:'white',color:'black'}
    let dark = {background:'black',color:'white'}
    return (
        <div data-testid = "user" style={isDarkTheme?dark:white} >
            <input data-testid = "level" type = "range"/>
            <img src={obj.img} alt={obj.name}/>
            <h1>{obj.name}</h1>
            <h3>{obj.position}</h3>
            <p>Proffessional Level {obj.level}</p>
            <p>{obj.points} Points</p>
        </div>
    )
}
