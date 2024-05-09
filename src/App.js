import './App.css';
import logo from './assets/img/logo2.jpg';
import teni from './assets/img/teni2.avif';
import teni1 from './assets/img/teni1.avif';
import teni3 from './assets/img/teni3.avif';
import teni4 from './assets/img/tenis4.avif';

function App() {
  return (
    <div class="body">
          <header>
          <a href="https://www.adidas.mx/">
          <img class="logo" src={logo} alt=""/>
          </a>
    </header>
    <div class="pagina">
        <div class="producto-img">
            <div class="imagen"><img src={teni} alt="" height="500px"  width="500px"/></div>
            <div class="imagen"><img src={teni1} alt="" height="500px"  width="500px"/></div>
            <div class="imagen"><img src={teni3} alt="" height="500px"  width="500px"/></div>
            <div class="imagen"><img src={teni4} alt="" height="500px"  width="500px"/></div>
            
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
            <div class="producto-compra">
                <a href="https://www.adidas.mx/tenis-de-running-4dfwd-3/ID0853.html">Comprar</a>
            </div>
        </div>
    </div>
    <footer>
        <nav class="lista">
            <ul class="lista-contenido">
                <li class="contenido">Configuración de las cookies</li>
                <li class="contenido">Nuestros Datos</li>
                <li class="contenido">Términos y Condiciones</li>
                <li class="contenido">Uso del Sitio</li>
                <li class="contenido">Términos y Condiciones Promociones</li>
                <li class="contenido">Privacidad de Videovigilancia</li>
            </ul>
        </nav>
    </footer>
    </div>
  );
}

export default App;
