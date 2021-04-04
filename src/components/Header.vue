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
            <ul v-if="large" class="nav">
              <li class="nav-item"><a class="nav-link" href="#">home</a></li>
              <li class="nav-item"><a class="nav-link" href="#about-us">about us</a></li>
              <li class="nav-item"><a class="nav-link" href="#projects">projects</a></li>
              <li class="nav-item"><a class="nav-link" href="#clients">clients</a></li>
              <li class="nav-item"><a class="nav-link" href="#contact">contact</a></li>
            </ul>
            <img v-else class="hamburger" @click="showMobileMenu" src="img/hamburger.png" alt="logo">
            <div :style="{ display: display }" class="mobile-menu row">
              <ul v-if="!showMenu" class="nav col-12">
                <li class="nav-item"><a class="nav-link" href="#">home</a></li>
                <li class="nav-item"><a class="nav-link" href="#about-us">about us</a></li>
                <li class="nav-item"><a class="nav-link" href="#projects">projects</a></li>
                <li class="nav-item"><a class="nav-link" href="#clients">clients</a></li>
                <li class="nav-item"><a class="nav-link" href="#contact">contact</a></li>
              </ul>
            </div>
          </div>
          <div class="col-xl-2 col-lg-2 col-md-2 col-sm col-find">
            <div class="form-find">
              <input v-if="showInput" v-model="searchStr" type="text" class="input" id="text-to-find" placeholder="Поиск">
              <img @click="findOnPage" src="img/Search.png" class="search" alt="search">
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      searchStr: '',
      showInput: false,
      large: true,
      showMenu: false,
      display: 'none'
    }
  },
  created () {
    this.onResize()
  },
  methods: {
    showMobileMenu () {
      if (this.display === 'none') {
        this.display = 'block'
      } else {
        this.display = 'none'
      }
    },
    onResize () {
      this.large = window.innerWidth >= 600
      console.log(this.large)
      console.log(window.innerWidth)
    },
    findOnPage () {
      this.showInput = !this.showInput
      if (this.showInput) return
      let oldA = document.getElementById('search-anchor')
      if (oldA) {
        oldA.parentNode.removeChild(oldA)
      }
      var all = document.querySelectorAll('body *')
      console.log(all.length)
      for (var i = 0; i < all.length; i++) {
        let tagElem = all[i]
        if (tagElem.nodeType !== Node.ELEMENT_NODE) {
          continue
        }
        const children = tagElem.childNodes

        for (var j = 0; j < children.length; j++) {
          let childElem = children[j]

          if (childElem.nodeType === Node.TEXT_NODE) {
            let text = childElem.nodeValue.toLowerCase()
            let index = text.indexOf(this.searchStr.toLowerCase())
            if (index !== -1) {
              // console.log(childElem)

              let a = document.createElement('a')
              a.setAttribute('id', 'search-anchor')
              a.setAttribute('name', 'search-anchor')

              childElem.parentNode.insertBefore(a, childElem)

              window.location = '#search-anchor'
              return
            }
          }
        }
      }
    }
  }
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
    transition: all .25s ease-in-out;
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
  }
  input {
    border: none;
    outline: none;
  }
  .logo p {
    font-size: 30px;
    position: absolute;
    top: 63px;
    left: 90px;
    font-weight: bold;
  }
  .hamburger {
    width: 50px;
    height: 50px;
    filter: opacity(0.9);
  }
  .col-find {
    display: flex;
    justify-content: flex-end;
  }
  .input {
    transition: all .25s ease-in-out;
  }
  .mobile-menu {
    position: absolute;
  }
</style>
