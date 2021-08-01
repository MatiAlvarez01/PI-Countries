import React, { useEffect, useState } from "react";
import axios from "axios";

function CreateActivity() {
    const [newActivity, setNewActivity] = useState({})

    function onInputChange(event) {
        setNewActivity(prevState => {
            return {
                ...prevState,
                [event.target.name] : event.target.value
            }
        })
    }

    useEffect(() => {

    }, [])
    
    return (
        <form>
            <label>Name:</label>
            <input 
                type="text" 
                name="name" 
                value={newActivity.name} 
                onChange={onInputChange}/>
            <label>Difficulty:</label>
            <input 
                type="text" 
                name="difficulty" 
                value={newActivity.difficulty} 
                onChange={onInputChange}/>
            <label>Duration:</label>
            <input 
                type="text" 
                name="duration" 
                value={newActivity.duration} 
                onChange={onInputChange}/>
            <label>Season:</label>
            <input 
                type="text" 
                name="season" 
                value={newActivity.season} 
                onChange={onInputChange}/>
        </form>
    )
}

export default CreateActivity;