const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in hands of a computer',
    options: ['One', 'Two'],
}
const template = (
    <div>
        <h1>{app.title}</h1>
        <p></p>
        {app.subtitle && <p>{app.subtitle}</p>}
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
    
)

let count = 0;
const addOne = () => {
    count++;
    console.log('plus one' + count)
    renderCounterApp();
};

const minusOne = () => {
    count--;
    console.log('minus one' + count)
    renderCounterApp();
};

const reset = () => {
    count = 0;
    console.log('reset' + count)
    renderCounterApp();
};

var appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count {count}</h1>
            <button id="my-id" className="button" onClick={addOne}>+1</button>
            <button className="button" onClick={minusOne}>-1</button>
            <button className="button" onClick={reset}>reset</button>
        </div>
        
    )
    ReactDOM.render(templateTwo, appRoot);
};
renderCounterApp();