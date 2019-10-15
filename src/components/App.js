import React from 'react';

//function definition - ES5
function App1()
{
    return <h1>Blogger App Component</h1>
}

//function expression - ES5
const App2 = function(){
    return <h1>Function expression for blogger</h1>
}

//arrow functions - ES6
const App3 =() => {
    return <h1>Arrow function Blogger</h1>
}

//advanced arrow functions - ES6
const App =() => <h1>Advanced syntax Arrow function Blogger</h1>;


export default App;