const Add = ({ name, onSubmit, value, onChange }) => {
    return (
        <form onSubmit={onSubmit}>
            <input type="text" value={value} onChange={onChange} />
            <button>{name}</button>
        </form>
    )

}