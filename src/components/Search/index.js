import './style.scss'

function Search() {

  return (
    <div className="search-fields">
      <div class="input-field col">
        <input id="first_name" type="text" class="validate" />
        <label for="first_name">Procure seu drink favorito</label>
      </div>

      <div className="categories-tabs">
        <ul id="tabs-swipe-demo tabs-fixed-width" class="tabs">
          <li class="tab col s3"><a class="active" href="#swipe-1">Drinks</a></li>
          <li class="tab col s3"><a href="#swipe-2">Cocktails</a></li>
          <li class="tab col s3"><a href="#swipe-3">MilkShakes</a></li>
          <li class="tab col s3"><a href="#swipe-4">Cocoas</a></li>
          <li class="tab col s3"><a href="#swipe-5">Others</a></li>
        </ul>
      </div>

      <div id="swipe-1" class="categories-content col s12 ">
        <div className="cards-categories-container">
          <div className="modal-trigger slideanim" href="#modal">card</div>
          <div className="modal-trigger slideanim" href="#modal">card</div>
          <div className="modal-trigger slideanim" href="#modal">card</div>
          <div className="modal-trigger slideanim" href="#modal">card</div>
          <div className="modal-trigger slideanim" href="#modal">card</div>
          <div className="modal-trigger slideanim" href="#modal">card</div>
          <div className="modal-trigger slideanim" href="#modal">card</div>
          <div className="modal-trigger slideanim" href="#modal">card</div>
        </div>
      </div>
      <div id="swipe-2" class="categories-content col s12 red">Cocktails</div>
      <div id="swipe-3" class="categories-content col s12 green">MilkShakes</div>
      <div id="swipe-4" class="categories-content col s12 pink">Cocoas</div>
      <div id="swipe-5" class="categories-content col s12 teal">Others</div>


      {/* <div className="search-result"></div> APARECER ESSE AO ENVES DO SWIPE QUANDO PESQUISAR */}
    </div>
  )
}

export default Search;