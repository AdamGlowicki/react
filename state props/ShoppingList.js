class ShoppingList extends React.Component {
    state = {
        items1: 'ogórki',
        items2: 'sok',
        items3: 'piwsko',
    }

    render() {
        return (
            <>
                <h1>Lista zakupó</h1>
                <ul>
                    <ItemList name={this.state.items1} />
                    <ItemList name={this.state.items2} />
                    <ItemList name={this.state.items3} />
                </ul>
            </>
        )
    }
}

const ItemList = (props) => {
    return <li>{props.name}</li>
}

ReactDOM.render(<ShoppingList />, document.getElementById('root'));