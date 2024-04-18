import './App.css';
import logo from './assets/img/logo2.jpg';
import teni from './assets/img/teni2.avif';

function App() {
  return (
    <div class="body">
          <header>
        <img class="logo" src={logo} alt=""/>
    </header>
    <div class="pagina">
        <div class="producto-img">
            <div class="imagen"><img src={teni} alt=""/></div>
        </div>
        <div class="producto">
            <h2 class="producto-nombre">
                TENIS DE RUNNING 4DFWD 3
            </h2>
            <h4 class="producto-precio">
                $5,499
            </h4>
            <div class="producto-detalle">
                <h3>
                    UNISEX, HORMA GRANDE
                </h3>
                <p>
                    Para pies delgados recomendamos comprar la talla inferior.
                </p>
            </div>
        </div>
    </div>
    </div>
  );
}

export default App;
