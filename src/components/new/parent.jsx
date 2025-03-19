import { useState } from "react";

const Parent = () => {
    const [parentState, setParentState] = useState('I am the state of the parent!');

    return (
        <div>
            <h1>This is passing data through Props Drilling</h1><br></br>
            <h2>Parent Component</h2>
            <p>{parentState}</p>
            <Child name="John" stateData={parentState} />
        </div>
    );
};

// Child Component
const Child = ({ name, stateData }) => {
    const [childState, setChildState] = useState('I am the state of the child!');

    const updateChildState = () => {
        setChildState('Child state has been updated!');
    };

    return (
        <div>
            <h2>Child Component</h2>
            <p>Prop (name): {name}</p> {/* name is passed from parent as a prop */}
            <p>Prop (stateData): {stateData}</p> {/* stateData is passed from parent as a prop */}
            <p>State (childState): {childState}</p> {/* state maintained by this component */}
            <button onClick={updateChildState}>Update Child State</button>
        </div>
    );
};

export default Parent;