class App extends React.Component {
    state = {
        text: '',

    }

    hendle = () => {
        this.setState({
            text: this.state.text += 'a',
        })
    }
    render() {
        return (
            <>
                <button onClick={this.hendle}>Dodaj A</button>
                <h1>{this.state.text}</h1>
            </>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))