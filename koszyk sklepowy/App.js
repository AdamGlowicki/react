class App extends React.Component {
    state = {
        availableProducts: 5,
        shoppingCart: 0,
    }

    render() {
        const { shoppingCart, availableProducts } = this.state;

        this.checkIfCartIsBiggerThanAvailablr(shoppingCart, availableProducts);
        console.log(this.state.availableProducts)
        return (
            <>
                <BasketHendle
                    shoppingCart={shoppingCart}
                    availableProducts={availableProducts}
                    actionPlus={() => this.buttonHandle(shoppingCart, availableProducts, '+')}
                    actionMinus={() => this.buttonHandle(shoppingCart, availableProducts, '-')}
                    grey={!this.state.shoppingCart ? 'grey' : ''}
                />
                {this.addBuyBtn("Kup")}
            </>
        );
    }

    checkIfCartIsBiggerThanAvailablr = (cart, available) => {
        // if (cart > available) throw new Error("nic sie nie znacie na koszyku");
    }

    buttonHandle = (value, availability, action) => {


        if (action === '+' && availability !== 0) {
            value++;
            availability--;
        }
        if (action === '-' && value !== 0) {
            value--;
            availability++;
        }

        this.setState({
            availableProducts: availability,
            shoppingCart: value,
        })
    }

    buyHandler = (bought) => {
        console.log(bought);
        this.setState({
            shoppingCart: 0,
        })
    }

    addBuyBtn = (name) => {
        if (this.state.shoppingCart) {
            return (
                <Buy
                    name={name}
                    buyHandler={() => this.buyHandler(this.state.shoppingCart)}

                />
            )
        }
    }
}



const BasketHendle = (props) => {
    const { availableProducts, shoppingCart, actionPlus, actionMinus, grey } = props;

    return (
        <>
            <button disabled={!shoppingCart} onClick={actionMinus}>-</button>
            <span className={grey}> {shoppingCart} </span>
            <button disabled={!availableProducts} onClick={actionPlus}>+</button>
        </>
    )
}

const Buy = (props) => {
    const { name, buyHandler } = props;
    return (
        <>
            <button
                onClick={buyHandler}>
                {name}
            </button>
        </>
    )
}



ReactDOM.render(<App />, document.getElementById('root'));