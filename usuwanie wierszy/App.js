class App extends React.Component {
    state = {
        people: [
            { id: 1, name: 'Jan K.' },
            { id: 2, name: "Michał N." },
            { id: 3, name: "Arkadiusz R." },
            { id: 4, name: "Dorota W." },
        ]
    }
    generatePeople = () => {
        return (
            this.state.people.map(e => {
                return (
                    <Person
                        key={e.id}
                        value={e.name}
                        id={e.id}
                        onClick={this.hendelRemove}
                        name="usuń"
                    />
                )
            })
        )
    }

    hendelRemove = (id) => {
        const people = [...this.state.people]
        const index = people.findIndex(e => e.id === id)
        people.splice(index, 1);

        this.setState({
            people,
        })
    }

    render() {
        var a = []
        return (
            <>
                {this.generatePeople()}
            </>
        );
    }
}

const Person = ({ value, name, onClick, id }) => {
    return (
        <>
            <ul>
                <li>{value}</li>
                <button onClick={() => onClick(id)}>{name}</button>
            </ul>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));