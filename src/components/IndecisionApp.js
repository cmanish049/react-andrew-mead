import React from 'react';
import AddOption from './AddOption'
import Header from './Header'
import Action from './Action'
import Options from './Options'
import OptionModal from './OptionModal'

export default class IndecisionApp extends React.Component {    
    state = {
        options: [],
        selectedOption: undefined,
        closeModal: undefined
    }

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }))
    }

    handlePick = () => {
        const randomNumber = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNumber];
        this.setState(() => ({ selectedOption: option }))
    }

    handleAddOption = (option) => {
        if (!option) {
            return 'enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }
        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }));
    }

    handleRemoveOption = (option) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((opt) => opt !== option),
        }));
    }

    handleModalClose = () => {
        this.setState((prevState) => ({
            selectedOption: undefined,
        }));
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options)
                this.setState(() => ({ options }));
        } catch (e) {
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
                <OptionModal selectedOption={this.state.selectedOption} handleModalClose={this.handleModalClose} />
            </div>
        );
    };
};

IndecisionApp.defaultProps = {
    options: []
}