class ListItems extends React.Component {
    state = {
        behaviour: [],
    }

    createBtn = (names) => {
        this.addCondition(names);
        return (
            names.map(e => {
                return (
                    <Btn
                        name={e}
                        key={e}
                        click={() => this.buttonHandel()}
                    />
                )
            })
        )
    }

    addCondition = (names) => {
        const buttons = [];
        names.map(e => {
            buttons.push({ name: e, click: false })
        });
        console.log(buttons);
        debugger
        this.setState({
            behaviour: buttons
        })
    }



    generatePerson = (users, command) => {
        return users
            .filter(e => e.sex === command)
            .map(e => {
                return (
                    <Item
                        age={e.age}
                        name={e.name}
                        key={e.id}
                    />
                )
            })
    }

    buttonHandle = (name) => {



    }

    render() {
        const users = this.props.data.users
        const names = this.props.names.names
        return (
            <>
                {this.createBtn(names)}

            </>
        );
    }
}

const Item = ({ age, name, sex }) => {
    // const { id, age, name } = props
    return (
        <div className='userInfo'>
            <h1>{name}</h1>
            <p>Info o uzytowniku</p>
            <p>Wiek uzytkownika: {age}</p>
            <p>Płeć użytkownika: {sex}</p>
        </div>
    )
}

const Btn = ({ name, click }) => {
    return <button onClick={click}>{name}</button>
}

const names = {
    names: ['Pokaż kobity', "Pokaz chłopów"]
}

const data = {
    users: [
        {
            id: 1,
            age: 29,
            name: "wiesiek",
            sex: 'male',
        },
        {
            id: 2,
            age: 12,
            name: "Hania",
            sex: 'female',
        },
        {
            id: 3,
            age: 55,
            name: "Gerwazy",
            sex: 'male',
        },
        {
            id: 4,
            age: 55,
            name: "Lodzia",
            sex: 'female',
        },
    ]
}

ReactDOM.render(<ListItems data={data} names={names} />, document.getElementById('root'));