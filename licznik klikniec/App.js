class Counter extends React.Component {

    state = {
        count: 0,
        result: 0,
    }

    handleMathClick = (type, number) => {
        let equal = 0;
        if (type === '-') {
            equal = -number;
        } else if (type === '+') {
            equal = number;
        } else if (type === "reset") {
            this.setState(p => ({
                result: 0,
            }))
        } else {
            throw new Error("Nieprawidłowa dana");
        }

        this.setState(p => ({
            count: p.count + 1,
            result: p.result + equal
        }))
    }
    render() {
        return (
            <>
                <MathBtn
                    name='-10'
                    number={10}
                    type='-'
                    click={this.handleMathClick}
                />
                <MathBtn
                    name='10'
                    number={10}
                    type='+'
                    click={this.handleMathClick}
                />
                <MathBtn
                    name='reset'
                    type='reset'
                    click={this.handleMathClick}
                />
                <ResultPanel
                    name='Liczba Kliknięć:'
                    result={this.state.count}
                />
                <ResultPanel
                    name='Wynik:'
                    result={this.state.result}
                />
            </>
        );
    }

}

const MathBtn = (props) => {
    return (
        <button onClick={() => props.click(props.type, props.number)}>{props.name}</button>
    )
}

const ResultPanel = (props) => {
    return (
        <>
            <h1>{props.name} {props.result}</h1>
        </>
    )
}

ReactDOM.render(<Counter />, document.getElementById('root'));