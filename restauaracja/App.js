class App extends React.Component {
    state = {
        items: [
            { id: 1, name: "herbata", active: true, price: 5 },
            { id: 2, name: 'ziemniaki', active: false, price: 9 },
            { id: 3, name: 'kasza', active: true, price: 7 },
            { id: 4, name: 'zupa z trupa', active: false, price: 22 },
            { id: 5, name: 'wrzątek', active: true, price: 3 },
            { id: 6, name: 'chleb', active: false, price: 6 },
        ]
    }

    handleChangeStatus = (id) => {
        const items = this.state.items.map(e => {
            if (e.id === id) {
                e.active = !e.active
            }
            return e;
        });
        this.setState({
            items
        })

    }

    render() {
        return (
            <>
                <Header items={this.state.items} />
                <ListItems items={this.state.items} changeStatus={this.handleChangeStatus} />
            </>
        );
    }
}
