import React from 'react'

function Settings({ inputs, setInputs }) {

    const { theme } = inputs

    const changeTheme = (e) => {
        setInputs((prevState) => ({ ...prevState, theme: e.target.name }))
    }
    return (
        <div>Settings
            <label >
                <input
                    type="radio"
                    checked={theme === "dark"} onChange={changeTheme}
                    name='dark' />
                Dark
            </label>
            <label >
                <input
                    type="radio"
                    checked={theme === "light"} onChange={changeTheme}
                    name='light' />
                Light
            </label>
        </div>
    )
}

export default Settings