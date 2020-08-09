import React from 'react';
import Option from './Option'

const Options = (props) => (
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
)

export default Options;