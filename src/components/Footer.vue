<template>
  <div>
    <footer>
      <div class="container">
        <div class="row no-gutters">
          <div class="col d-flex justify-content-center">
            <div class="logo">
              <img class="img-fluid" src="img/logo-footer.png" alt="logo">
            </div>
          </div>
        </div>
        <div class="row no-gutters">
          <div class="col d-flex justify-content-center">
            <p class="copyright">Copyright 2019. All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  $fontFamily: 'Raleway-ExtraBold', AdobeInvisFont, 'MyriadPro-Regular';
  $greyColor: rgba(188, 192, 205, 255);

  * {
    background: black;
    font-family: $fontFamily;
  }

  .logo {
    margin: {
      top: 40px;
      bottom: 20px;
    }
  }
  .copyright {
    color: #2a2a2a;
    margin-bottom: 50px;
  }
</style>
