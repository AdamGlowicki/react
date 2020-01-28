class App extends React.Component {
    state = {
        active: true
    }

    handleClick = () => {
        this.setState(state => ({
            active: !state.active,
        }))
    }

    render() {
        return (
            <>
                <SwitchButton active={this.state.active} click={this.handleClick} />
                {this.state.active && <Clock />}
            </>
        );
    }
}

const SwitchButton = ({ active, click }) => (
    <button onClick={click}>{active ? 'Wyłącz' : "Włącz"}</button>
)





class Clock extends React.Component {
    state = {
        time: () => this.getTime()
    }

    getTime = () => {
        const currentDate = new Date();
        return ({
            hours: currentDate.getHours(),
            minutes: currentDate.getMinutes(),
            seconds: currentDate.getSeconds()
        }
        )
    }

    setTime = (time) => {
        this.setState({
            time
        })
    }

    componentDidMount() {
        this.interval = setInterval(() => this.setTime(this.getTime()), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }
    render() {
        const { hours, minutes, seconds } = this.state.time
        return (
            <div>
                {hours} : {minutes} : {seconds}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'))