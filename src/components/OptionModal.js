import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#app')
const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        contentLabel="Selected Option"
    >
        <h1>Selected Option</h1>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.handleModalClose}>Ok</button>
    </Modal>
);

export default OptionModal;