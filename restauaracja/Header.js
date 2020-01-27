const Header = ({ items }) => {
    return (
        <header>
            <h2>
                Podsumowanie zamówienia: {countOrderSize(items)}
            </h2>
            <h2>
                Koszt: {countOrderPrice(items)}
            </h2>
        </header>
    )
}

function countOrdered(list) {
    // debugger
    return list.filter(e => e.active === true);
}

function countOrderSize(list) {
    return countOrdered(list).length;
}

function countOrderPrice(list) {
    return countOrdered(list).map(e => e.price).reduce((a, b) => a + b, 0)

}

