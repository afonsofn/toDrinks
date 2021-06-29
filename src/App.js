import './style.scss'

function App() {

  window.addEventListener('scroll', function() {
    Object.values(document.querySelectorAll('.slideanim')).map(test => test.classList.add('slide'))
  });

  return (
    <div className="App">
      
      {/* HEADER PARALAX */}
      <div className="parallax-container">
        <div className="parallax"><img src="drinks.png" alt="tes2te" /></div>
        <div className="header">
          <div>
            <h1>toDrinks</h1>
            <p>Refresh your life withs our drinks</p>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}

      <div className="main-content">
        <h3>Principais Drinks</h3>

        <div className="cards-container">
          <div className="modal-trigger slideanim" href="#modal">card</div>
          <div className="modal-trigger slideanim" href="#modal">card</div>
          <div className="modal-trigger slideanim" href="#modal">card</div>
          <div className="modal-trigger slideanim" href="#modal">card</div>
        </div>
      </div>

      <div className="search-fields">
        <div class="input-field col s6">
          <input id="first_name" type="text" class="validate" />
          <label for="first_name">Procure seu drink favorito</label>
        </div>

        <div className="categories">
          <ul id="tabs-swipe-demo tabs-fixed-width" class="tabs">
            <li class="tab col s3"><a class="active" href="#test-swipe-1">Drinks</a></li>
            <li class="tab col s3"><a href="#test-swipe-2">Cocktails</a></li>
            <li class="tab col s3"><a href="#test-swipe-3">MilkShakes</a></li>
            <li class="tab col s3"><a href="#test-swipe-4">Cocoas</a></li>
            <li class="tab col s3"><a href="#test-swipe-5">Others</a></li>
          </ul>
        </div>


        <div id="test-swipe-1" class="categ-cont col s12 blue">Drinks</div>
        <div id="test-swipe-2" class="categ-cont col s12 red">Cocktails</div>
        <div id="test-swipe-3" class="categ-cont col s12 green">MilkShakes</div>
        <div id="test-swipe-4" class="categ-cont col s12 pink">Cocoas</div>
        <div id="test-swipe-5" class="categ-cont col s12 teal">Others</div>


        {/* <div className="search-result"></div> APARECER ESSE AO ENVES DO SWIPE QUANDO PESQUISAR */}
      </div>


      <div id="modal" class="modal">
        <div class="modal-content">
          
          <div className="img"></div>
          
          <div className="img-info">
            <h4>Nome do drink</h4>
            <p>lorem askdnoajbfkjbadjl fboabfbapfibpiasbpi bdpaibdpiabsipdbap sibdpiasbfi pbapisfbpiasbfipbasip bfsaibfipbaspibfipasb fia fhpia spifhpi ashfpi aspifhpiahsp ihapsi hpiashpiha iph paish piashpihppiash piahs</p>
          </div>

        </div>
      </div>
      
    </div>
  );
}

export default App;
