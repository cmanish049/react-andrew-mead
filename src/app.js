class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision App';
        const subtitle = "Put your life in hand of computer";
        const options = ['Option 1', 'Option 2'];
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
                <AddOption />
            </div>
        );
    };
};
class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    handlePick() {
        alert('Handle Pick');
    }

    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {

    constructor(props) {
        super(props);
        // method binding
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }

    //event methods
    handleRemoveAll() {
        console.log(this.props.options);
    }
    render() {
        return (
            <div>
                <p>{this.props.options.length}</p>
                <button onClick={this.handleRemoveAll}>Remove All</button>
                <ol>
                    {
                        this.props.options.map((option) => <Option optionText={option} />)
                    }
                </ol>
            </div>

        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <li>{this.props.optionText}</li>
        );
    }
}

class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault()
        const option = e.target.elements.option.value;
        if (option)
            alert(option);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"></input>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));