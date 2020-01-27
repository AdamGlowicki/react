const Header = () => {
    return (
        <div>
            <h1>Pierwszy komponent</h1>
        </div>
    )
}

class Blog extends React.Component {

    // state = {
    //     number: 0,
    // }
    render() {
        return (
            <section>
                <h2>Artykuł</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eveniet porro consequatur perferendis amet velit! Officiis cupiditate maxime possimus corporis. Odit cumque praesentium laborum? Beatae nemo corrupti minima sequi illum.</p>
            </section>
        )
    }
}

const App = () => {
    return (
        <>
            <Header />
            <Blog />
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));