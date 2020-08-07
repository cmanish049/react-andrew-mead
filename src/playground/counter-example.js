class Counter extends React.Component {

    constructor(props) {
        // this is important
        super(props);
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count : 0
        }
    }

    handleIncrement() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
      
    }

    handleDecrement() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }

    handleReset() {
        this.setState(() => {
            return {
                count: 0
            };
        });
        // absolute method to uodate state
        // this.setState({
        //         count: 0
        // });
    }

    render() {
        return (
            <div>
                <h2>Counter: {this.state.count}</h2>
                <button onClick={this.handleIncrement}>+1</button>
                <button onClick={this.handleDecrement}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));
// let count = 0;
// const addOne = () => {
//     count++;
//     console.log('plus one' + count)
//     renderCounterApp();
// };

// const minusOne = () => {
//     count--;
//     console.log('minus one' + count)
//     renderCounterApp();
// };

// const reset = () => {
//     count = 0;
//     console.log('reset' + count)
//     renderCounterApp();
// };

// var appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count {count}</h1>
//             <button id="my-id" className="button" onClick={addOne}>+1</button>
//             <button className="button" onClick={minusOne}>-1</button>
//             <button className="button" onClick={reset}>reset</button>
//         </div>
        
//     )
//     ReactDOM.render(templateTwo, appRoot);
// };
// renderCounterApp();