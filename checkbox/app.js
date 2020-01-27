class TicketOffice extends React.Component {
    state = {
        isConfirmed: false,
        isFormSubmited: false,
    }

    handleCheckbocChange = () => {
        this.setState({
            isConfirmed: !this.state.isConfirmed,
            isFormSubmited: false,
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        if (!this.state.isFormSubmited) {
            this.setState({
                isFormSubmited: !this.state.isFormSubmited,
            })
        }
    }

    displayMessage = () => {
        const approved = 'Możesz obejżeć film!';
        const disapproved = 'Nie możesz obejżeć filmu!';
        let message = '';
        if (this.state.isFormSubmited) {
            if (this.state.isConfirmed) {
                message = approved;
            } else {
                message = disapproved;
            }

            return (
                <Message message={message} />
            )
        }
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleFormSubmit}>
                    <h1>Kup bilet</h1>
                    <input type="checkbox" id='age' checked={this.state.isConfirmed} onChange={this.handleCheckbocChange} />
                    <label htmlFor="agr">Mam wiecej niż 16 lat</label>
                    <br />
                    <button>Kup bilet</button>
                    {this.displayMessage()}
                </form>
            </>
        )
    }
}

const Message = (props) => {
    return (
        <>
            <p>{props.message}</p>
        </>
    )
}

ReactDOM.render(<TicketOffice />, document.getElementById('root'));