class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleRemoveOption = this.handleRemoveOption.bind(this);

        this.state = {
            options: props.options
        }
    }

    handleDeleteOptions() {
        this.setState(() => ({ options: [] }))
    }

    handlePick() {
        const randomNumber = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNumber];
        alert(option);
    }

    handleAddOption(option) {
        if (!option) {
            return 'enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }
        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }));
    }

    handleRemoveOption(option) {
        this.setState((prevState) => ({
            options: prevState.options.filter((opt) => opt !== option),
        }));
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options)
                this.setState(() => ({ options }));
        } catch(e) {
            // do nothing
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    render() {
        const subtitle = "Put your life in hand of computer";
        return (
            <div>
                <Header subtitle={subtitle} />
                <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleRemoveOption={this.handleRemoveOption}
                />
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        );
    };
};
IndecisionApp.defaultProps = {
    options: []
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
}

// default props value
Header.defaultProps = {
    title: 'Indecision'
};

// class Header extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         );
//     }
// }

const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should I do?
            </button>
        </div>
    );
}
// class Action extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button 
//                     onClick={this.props.handlePick}
//                     disabled={!this.props.hasOptions}
//                 >
//                     What should I do?
//                 </button>
//             </div>
//         );
//     }
// }

const Options = (props) => {
    return (
        <div>
            <p>{props.options.length}</p>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add an option to get started</p>}
            <ol>
                {
                    props.options.map((option) => (
                        <Option
                            key={option}
                            optionText={option}
                            handleRemoveOption={props.handleRemoveOption}
                        />
                    ))
                }
            </ol>
        </div>

    );
}
// class Options extends React.Component {

//     render() {
//         return (
//             <div>
//                 <p>{this.props.options.length}</p>
//                 <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//                 <ol>
//                     {
//                         this.props.options.map((option) => <Option optionText={option} />)
//                     }
//                 </ol>
//             </div>

//         );
//     }
// }

const Option = (props) => {
    return (
        <li>
            {props.optionText}
            <button
                onClick={(e) => {
                    props.handleRemoveOption(props.optionText)
                }}>
                remove
            </button>
        </li>
    );
}
// class Option extends React.Component {
//     render() {
//         return (
//             <li>{this.props.optionText}</li>
//         );
//     }
// }

class AddOption extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined,
        }
    }

    handleAddOption(e) {
        e.preventDefault()
        const option = e.target.elements.option.value;
        const error = this.props.handleAddOption(option);
        this.setState(() => ({ error }));
        if (!error) {
            e.target.elements.option.value = '';
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"></input>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));