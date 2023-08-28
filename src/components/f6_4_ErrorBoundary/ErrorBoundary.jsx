import React, {Component} from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error){
        // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
        return { hasError: true }
    }
    componentDidCatch(error, errorInfo) {
        // Можно также вывести в консоль или как либо обработать информацию об ошибке
        console.log(error, errorInfo)
    }

    render() {
        if (this.state.hasError){
            // Можно отрендерить запасной UI произвольного вида
            return <h1>Something wrong!</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary;