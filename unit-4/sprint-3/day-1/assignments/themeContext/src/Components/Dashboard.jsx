import React, { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContextProvider'
import data from '../db.json'
import User from './User'

export const Dashboard = () => {
    const {isDarkTheme,setIsDarkTheme} = useContext(ThemeContext)

    const handleSelect = (s)=>{
        if(s=="Dark Theme"){
            setIsDarkTheme(true)
        }
        else{
            setIsDarkTheme(false)
        }
    }

    return (
        <div data-testid = "dashboard-cont" onChange={(e)=>handleSelect(e.target.value)} id="select" >
            <select data-testid = "select-theme">
                <option >Light Theme</option>
                <option >Dark Theme</option>
            </select>
            {data.map((el)=>(
                <User key={el.id}  obj={el} isDarkTheme={isDarkTheme} />
            ))}
        </div>
)
}
