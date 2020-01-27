class App extends React.Component {
    state = {
        value: '',
    }

    handleInputChange(e) {
        this.setState({
            value: e.target.value
        })
    }

    handleReset = () => {
        this.setState({
            value: '',
        })
    }

    render() {
        return (
            <React.Fragment>
                <input value={this.state.value} placeholder='cos tma' onChange={this.handleInputChange.bind(this)} type="text" />
                <button onClick={this.handleReset}>reset</button>
                <h1 className="title">{this.state.value}</h1>
            </React.Fragment>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))