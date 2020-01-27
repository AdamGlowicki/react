const header = <h1 className="tittle">Witaj na stronie</h1>;

const classBig = 'big';

const handleClick = () => alert("klik!");
const main = (
    <div>
        <h1 onClick={handleClick} className='name'>Pierwszy artykół</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, dolore nisi magnam dignissimos sit ut deleniti optio fugit iste obcaecati, voluptate repellendus commodi veniam aspernatur at, accusantium enim. Consequatur, vitae.</p>
    </div>
);
const footer = (
    <footer className={classBig}>
        <p>Stopka</p>
    </footer>
)

const app = [header, main, footer];

ReactDOM.render(app, document.getElementById('root'))