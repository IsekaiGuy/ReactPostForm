import React, {Component} from "react";
import styled from 'styled-components';


const BottomPanel = styled.form`
        margin-top: 20px;
        display: flex;
        
        .new-post-label {
            width: auto;
            flex-grow: 1;
            margin-right: 3px;
        }
`

export default class PostAddForm extends Component {
   
state = {
    text:''
}
    

onValueChange = (e) => {
    this.setState({
        text: e.target.value
    })
}

onSubmit = (e) => {
    e.preventDefault();
    if(this.state.text !== '') {
        this.props.onAdd(this.state.text);
        this.setState({
        text: ''
    })
}
}

render() {
    return (
        <BottomPanel
        onSubmit={this.onSubmit}>
            <input
                type="text"
                placeholder="О чем вы думаете сейчас?"
                className="form-control new-post-label"
                onChange={this.onValueChange}
                value={this.state.text}
            />
            <button
                type='submit'
                className='btn btn-outline-secondary'>
                Добавить
                </button>
        </BottomPanel>
    )
}
}