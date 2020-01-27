class App extends React.Component {
    state = {
        predications: ['wrozba1', 'wrozba2', 'wrozba3'],
        omen: '',
        value: '',
    }

    showOmen = () => {
        const omen = this.state.predications[randomArrayIndex(this.state.predications)]
        this.setState({
            omen
        })
    }

    handleInputChnage = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    hendleAddOmen = (e) => {
        e.preventDefault()
        console.log(this.state.value);
        let predications = this.state.predications;
        predications.push(this.state.value)
        console.log(predications);
        this.setState({
            predications
        })
        // alert("dodano wrozbe")
    }

    render() {
        return (
            <>
                <Button name='Zobacz wróżbę' onClick={this.showOmen} />
                <Add name='Dodaj wróżbę' onSubmit={this.hendleAddOmen} value={this.state.value} onChange={this.handleInputChnage} />
                <Render text={this.state.omen} />
            </>
        );
    }
}

function randomArrayIndex(array) {
    return Math.floor(Math.random() * array.length);
}
