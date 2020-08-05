'use strict';

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in hands of a computer',
    options: ['One', 'Two']
};
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement('p', null),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);

var count = 0;
var addOne = function addOne() {
    count++;
    console.log('plus one' + count);
    renderCounterApp();
};

var minusOne = function minusOne() {
    count--;
    console.log('minus one' + count);
    renderCounterApp();
};

var reset = function reset() {
    count = 0;
    console.log('reset' + count);
    renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
    var templateTwo = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count ',
            count
        ),
        React.createElement(
            'button',
            { id: 'my-id', className: 'button', onClick: addOne },
            '+1'
        ),
        React.createElement(
            'button',
            { className: 'button', onClick: minusOne },
            '-1'
        ),
        React.createElement(
            'button',
            { className: 'button', onClick: reset },
            'reset'
        )
    );
    ReactDOM.render(templateTwo, appRoot);
};
renderCounterApp();
