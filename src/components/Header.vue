<template>
  <div id="app">
    <header>
      <div class="container-fluid">
        <div class="row no-gutters d-flex align-items-center">
          <div class="col-xl-2 col-lg-2 col-md-2 col-sm">
            <div class="logo">
              <img src="img/svg-editor-image.svg" alt="logo">
              <p>Selene.</p>
            </div>
          </div>
          <div class="col-xl-6 offset-xl-2 col-lg-6 offset-lg-2 col-md-6 offset-md-2 col-sm">
            <ul class="nav">
              <li class="nav-item"><a class="nav-link" href="#">home</a></li>
              <li class="nav-item"><a class="nav-link" href="#about-us">about us</a></li>
              <li class="nav-item"><a class="nav-link" href="#projects">projects</a></li>
              <li class="nav-item"><a class="nav-link" href="#clients">clients</a></li>
              <li class="nav-item"><a class="nav-link" href="#contact">contact</a></li>
            </ul>
          </div>
          <div class="col-xl-2 col-lg-2 col-md-2 col-sm col-find">
            <div class="form-find">
              <input type="text" class="input" placeholder="Поиск">
              <img src="img/Search.png" class="search" alt="search" aria-hidden="true">
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  $fontFamily: 'Raleway-ExtraBold', AdobeInvisFont, 'MyriadPro-Regular';
  $creamColor: #f2f2f2;
  * {
    font-family: $fontFamily;
  }
  ul {
    display: flex;
  }
  li {
   list-style-type: none;
   margin-right: 5px;
   font-size: 18px;
   font-weight: bold;
  }
  a {
    color: black;
  }
  a:hover {
    position: relative;
    margin: 0 auto;
  }
  a:hover:after {
    content: '';
    width: 48px;
    height: 6px;
    background: #F2F2F2;
    position: absolute;
    top: 0;
    left: 0;
    // border-bottom: 7px solid #F2F2F2;
  }
  .logo p {
    font-size: 30px;
    position: absolute;
    top: 63px;
    left: 90px;
    font-weight: bold;
  }
  .col-find {
    display: flex;
    // justify-content: flex-end;
  }
</style>
