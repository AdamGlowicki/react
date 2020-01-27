class App extends React.Component {

    state = {
        text: '',
        rndmNumber: 0,
    }

    randomNumber = () => {
        return Math.floor(Math.random() * 10)
    }

    handleClick = () => {
        const letter = 'a';
        this.setState({
            text: this.state.text + letter,
            rndmNumber: this.state.rndmNumber + this.randomNumber()
        })
    }

    render() {
        return (
            <>
                <button onClick={this.handleClick}>{this.props.btnTittle}</button>
                <PanelResult text={this.state.text} number={this.state.rndmNumber} />
            </>
        )
    }
}

const PanelResult = (props) => {
    return <h1>{props.text}{props.number}</h1>;
}

ReactDOM.render(<App btnTittle='Dodaj cyfre i litere' />, document.getElementById('root'));