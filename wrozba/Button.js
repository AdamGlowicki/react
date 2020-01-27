const Button = ({ onClick, name }) => {
    return (
        <button
            className="show"
            onClick={onClick}
        >
            {name}
        </button>
    )
}