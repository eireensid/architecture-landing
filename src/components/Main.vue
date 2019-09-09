<template>
  <div id="app">
    <section>
      <div class="container-fluid first-section">
        <div class="row no-gutters">
          <div class="col-xl-8 offset-xl-4 col-lg-8 offset-lg-4 col-md-8 offset-md-4 col-sm">
            <img class="img-fluid background" src="img/Photo1.png" alt="">
          </div>
        </div>
        <div class="row no-gutters">
          <div class="col-11 heading">
            <span class="doe">John Doe</span>
            <div class="img-h1">
              <img class="img-fluid" src="img/01.png" alt="page">
              <h1>Architecture<br><span class="lower-letter">aims at eternity</span></h1>
              <img class="img-fluid blue-line" src="img/blue-line.png" alt="line">
            </div>
            <ul class="hero-pages">
              <li class="grey">01</li>
              <li class="grey">02</li>
              <li class="grey">03</li>
              <li class="grey">04</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container-fluid second-section">
        <div class="row no-gutters">
          <div class="col-4 offset-2">
            <h3>Curabitur voluptat</h3>
            <p class="second-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed lorem augue. Maecenas vehicula metus eros, et pellentesque justo ornare nec. Curabitur volutpat, quam in mollis luctus, enim risus ullamcorper libero, eu vehicula sapien nunc et tortor. </p>
          </div>
          <div class="col-6">
            <h1>We create <span class="lower-letter"><br>cool ideas</span></h1>
            <img class="img-fluid cool-ideas" src="img/cool-ideas.png" alt="house">
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="row no-gutters">
          <div class="col-12">
            <h6>How we work</h6>
          </div>
          <div class="col-4">
            <span>Dexterity</span>
          </div>
          <div class="col-4">
            <span>Team</span>
          </div>
          <div class="col-4">
            <span>Parthnership</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Main'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  $fontFamily: 'Raleway-ExtraBold', AdobeInvisFont, 'MyriadPro-Regular';
  $greyColor: rgba(188, 192, 205, 255);

  * {
    font-family: $fontFamily;
  }

  li {
    display: inline-block;
    &:not(:last-child) {
      margin-right: 40px;
    }
  }
  h1 {
    font-size: 5.7em;
    color: rgba(0, 0, 0, 255);
    font-weight: bold;
    margin-left: 38px;
    position: relative;
    z-index: 1;
    letter-spacing: 0.05em;
  }
  .container-fluid {
    padding-right: 0;
    padding-left: 0;
  }
  .img-h1 {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .heading {
    position: absolute;
    top: 71%;
    left: 7%;
    // width: 100%;
  }
  .lower-letter {
    font-size: 0.8em;
  }
  .hero-pages {
    position: absolute;
    left: 7%;
    top: 150%;
    letter-spacing: 0.05em;
  }
  .doe {
    position: absolute;
    left: 21%;
    color: $greyColor;
    font-size: 1.125em;
    font-weight: bold;
  }
  .blue-line {
    position: absolute;
    left: 20%;
    top: 85%;
    width: 55%;
  }
  .grey {
    color: $greyColor;
    font-size: 1.125em;
    font-weight: bold;
  }

  .second-section {
    margin-top: 230px;
    margin-bottom: 100px;
  }
  h3 {
    color: $greyColor;
    font-size: 3.2em;
    font-weight: bold;
    padding-left: -2%;
  }
  .second-text {
    color: $greyColor;
    font-size: 0.9em;
    font-weight: bold;
    line-height: 2.0em;
    padding-top: 40px;
    text-align: justify;
    margin-left: -2%;
  }
  .cool-ideas {
    position: absolute;
    top: -70%;
    right: 0%;
  }
</style>
