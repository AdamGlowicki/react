const ListItems = ({ items, changeStatus }) => {

    const itemList = items.map(e => (
        <Item
            key={e.id}
            name={e.name}
            active={e.active}
            id={e.id}
            changeStatus={changeStatus}
        />
    ))
    console.log(itemList);
    return (

        <div className="list">
            <h1>Twoje zamówienie:</h1>
            <ul>
                {itemList}
            </ul>
        </div>

    );
}