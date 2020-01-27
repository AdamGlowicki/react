class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messageIsActive: false,
        }
        this.handleMessageBtn = this.handleMessageBtn.bind(this)
    }

    handleMessageBtn() {
        this.setState({
            messageIsActive: !this.state.messageIsActive
        })
    }

    changeButton = () => {
        debugger
        return this.state.messageIsActive ? 'Ukryj' : "Pokaż";
    }

    showHidde = (text) => {
        // return this.state.messageIsActive ? <p>{text}</p> : null;
        return this.state.messageIsActive && <p>{text}</p>;
    }

    render() {
        console.log(this.state.messageIsActive)
        const text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus nam laudantium harum repellendus aperiam architecto consectetur veniam, voluptate fuga eum. Quisquam, aut similique quis neque quibusdam quam reprehenderit ab? Magnam.';
        return (
            <>
                <button onClick={this.handleMessageBtn}>
                    {this.changeButton()}
                </button>
                {this.showHidde(text)}
            </>
        );
    }
}

ReactDOM.render(<Message />, document.getElementById('root'))