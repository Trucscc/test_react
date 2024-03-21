// class component
// function component

import React from "react";

class MyComponent extends React.Component{
    //JSX
    render(){
        return(
            <>
            <div>
                my first component
            </div>
            <div>
                {Math.random()}
            </div>
            </>
        );
    }
}

export default MyComponent;