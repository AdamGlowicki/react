class Form extends React.Component {
    state = {
        city: '',
        text: '',
        isLoved: false,
        number: 0
    }

    handleChange = (e) => {
        console.log([e.target.name])
    }

    render() {
        return (
            <>
                <label>
                    Podaj miasto
                <input name='city' value={this.state.city} onChange={this.handleChange} type="text" />
                </label>
                <br />
                <label>
                    Napisz cos o tym miescie
                    <textarea name='city' value={this.state.city} onChange={this.handleChange} type="text"></textarea>
                </label>
                <br />
                <label>
                    Czy lubisz to miasto
                <input name='city' value={this.state.city} onChange={this.handleChange} type="checkbox" />
                </label>
                <br />
                <label >
                    Ile razy byles w tym moescie?
                    <select name="number" value={this.state.number} onChange={this.handleChange}>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="more">wiecy</option>
                    </select>
                </label>
            </>
        );
    }
}

ReactDOM.render(<Form />, document.getElementById('root'))
