import React from 'react'

function Interest({ inputs, setInputs }) {
    const { interests } = inputs
    return (
        <div>
            <label >
                <input 
                type="checkbox"
                checked={interests.includes("anime")}
                name='anime' />
                Anime
            </label>
            <label >
                <input 
                type="checkbox"
                checked={interests.includes("series")}
                name='series' />
                Series
            </label>
            <label >
                <input 
                type="checkbox"
                checked={interests.includes("music")}
                name='music' />
                Music
            </label>
        </div>
    )
}

export default Interest