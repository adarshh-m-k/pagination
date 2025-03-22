import React, { useState } from 'react'

function Profile({ inputs, setInputs }) {

    const { name, age, email } = inputs

    const changeInput = (e, item) => {
        setInputs((prevState) => ({
            ...prevState,
            [item]: e.target.value

        }))

    }

    return (
        <div>
            <h1>Profile</h1>

            <div>
                <label>Name : </label>
                <input type="text"
                    value={name} onChange={(e) => changeInput(e, "name")} />
            </div>
            <div>
                <label>age : </label>
                <input type="number"

                    value={age}
                    onChange={(e) => changeInput(e, "age")} />
            </div>
            <div>
                <label>Email : </label>
                <input type="text"

                    value={email} onChange={(e) => changeInput(e, "email")} />
            </div>
           
        </div>
    )
}

export default Profile