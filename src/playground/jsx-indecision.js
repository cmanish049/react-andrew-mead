const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in hands of a computer',
    options: [],
}

const submit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
}

const removeAll = () => {
    app.options = [];
    render();
}

const makeDecision = () => {
    const randomNumber = Math.floor(Math.random() * app.options.length);
    console.log(randomNumber);
    const option = app.options[randomNumber];
    alert(option);
    render();
}

var appRoot = document.getElementById('app');


const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <p></p>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length}</p>
            <button disabled={app.options.length == 0} onClick={makeDecision}>What should I do</button>
            <button onClick={removeAll}>Reset Option</button>
            
            <ol>
            {
                app.options.map((option) => <li key="{option}">{option}</li>)
            }
            </ol>
            <form onSubmit={submit}>
            <input type="text" name="option"></input>
            <button>Add Option</button>
            </form>
        </div>    
    );
    ReactDOM.render(template, appRoot);
}
render();