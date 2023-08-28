import React, {Component} from 'react';

class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { error: null };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        try{
            console.log(a)
        }catch (error){
            this.setState({error})
        }
    }

    render() {
        if (this.state.error) {
            return <h1>Отловил ошибку.</h1>
        }
        return <button onClick={this.handleClick}>Нажми на меня</button>
    }
}

export default MyComponent;