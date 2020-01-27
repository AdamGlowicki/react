const Item = ({ name, active, changeStatus, id }) => {
    return (
        <li
            style={changeAfterClick(active)}
            onClick={() => changeStatus(id)}
        >{name}</li>
    )
}

function changeAfterClick(active) {
    return active ? { fontWeight: 'bold' } : { color: 'grey' }
}