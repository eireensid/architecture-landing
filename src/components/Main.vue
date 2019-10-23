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
            <!-- <img class="img-fluid house-border" src="img/house.svg" alt="border"> -->
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container-fluid">
        <div class="row no-gutters">
          <div class="col-3">
            <div class="idea" :style="{'background-image': 'url(img/idea.png)'}"></div>
          </div>
          <div class="col-3">
            <img class="img-fluid" src="img/concept.png" alt="concept">
          </div>
          <div class="col-3">
            <img class="img-fluid" src="img/design.png" alt="design">
          </div>
          <div class="col-3">
            <img class="img-fluid" src="img/develop.png" alt="develop">
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="row no-gutters">
          <div class="col-12 h-line-blue-text">
            <img class="img-fluid h-line" src="img/h-line.png" alt="line">
            <span class="blue-text">How we work</span>
            <img class="img-fluid h-line" src="img/h-line.png" alt="line">
          </div>
        </div>
        <div class="row no-gutters">
          <div class="col-12" :style="{'background-image': 'url(img/background.png)'}">
            <img class="img-fluid" src="img/dexterity-team-partnership.png" alt="line">
          </div>
          <!-- <div class="col-4">
            <span>Dexterity</span>
          </div>
          <div class="col-4">
            <span>Team</span>
          </div>
          <div class="col-4">
            <span>Parthnership</span>
          </div> -->
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="row no-gutters">
          <div class="col-12 h-line-blue-text">
            <img class="img-fluid h-line" src="img/h-line.png" alt="line">
            <span class="blue-text">Latest projects</span>
            <img class="img-fluid h-line" src="img/h-line.png" alt="line">
          </div>
        </div>
        <div class="row no-gutters">
          <div class="col-6 latest-left">
            <img class="img-fluid latest-projects" src="img/latest-projects.png" alt="stairs">
          </div>
          <div class="col-6">
            <h5 class="latest-right modern-art">Modern art gallery<br>Warsaw, Poland</h5>
            <p class="third-text latest-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed lorem augue.
              Maecenas vehicula metus eros, et pellentesque justo ornare nec. Curabitur volutpat,
              quam in mollis luctus, enim risus ullamcorper libero, eu vehicula sapien nunc et tortor. </p>
            <button class="latest-right btn-grey-line">Case study</button>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="row no-gutters mt-4 mb-2">
          <div class="col latest-project-block">
            <img class="img-fluid mr-4" src="img/latest-project1.png" alt="1">
            <img class="img-fluid mr-4" src="img/latest-project2.png" alt="2">
            <img class="img-fluid mr-4" src="img/latest-project3.png" alt="3">
            <img class="img-fluid" src="img/latest-project4.png" alt="4">
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <div class="row no-gutters">
          <div class="col">
            <hr>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="row no-gutters">
          <div class="col d-flex justify-content-around brands">
            <img class="img-fluid" src="img/zeus.png" alt="zeus">
            <img class="img-fluid" src="img/p.png" alt="p">
            <img class="img-fluid" src="img/cratia.png" alt="cratia">
            <img class="img-fluid" src="img/e.png" alt="e">
            <img class="img-fluid" src="img/luna.png" alt="luna">
            <img class="img-fluid" src="img/n.png" alt="n">
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container before-footer">
        <div class="row no-gutters">
          <div class="col-7 leftside-form">
            <form>
              <ul>
                <li class="add-menu">Contact us</li>
                <li class="add-menu">Phone</li>
                <li class="add-menu">E-mail</li><br>
                <label for="name" class="add-input">Name</label>
                <input type="text" id="name"><br>
                <label for="phone" class="add-input">Phone</label>
                <input type="text" id="phone"><br>
                <label for="email" class="add-input">E-mail</label>
                <input type="text" id="email"><br>
                <label for="message" class="add-textarea">Message</label><br>
                <textarea name="message" id="message" cols="70" rows="10"></textarea><br>
                <button class="btn-grey-line">Send</button>
              </ul>
            </form>
          </div>
          <div class="col-5">
            <img class="img-fluid" src="img/contact.png" alt="glass">
          </div>
          <div class="col-12">
            <img class="img-fluid form-border" src="img/form.svg" alt="border">
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
    width: 45%;
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
  .blue-text {
    text-transform: uppercase;
    font-size: 0.9em;
    color: #97d1eb;
    justify-content: center;
    display: flex;
    letter-spacing: 0.2em;
    font-weight: 600;
    margin: {
      top: 50px;
      bottom: 50px;
    }
  }
  .add-input {
    color: #e6e7ec;
    font-weight: bold;
    font-size: 1.8em;
    letter-spacing: 0.03em;
  }
  .add-textarea {
    color: #e6e7ec;
    font-weight: bold;
    font-size: 1.5em;
    letter-spacing: 0.03em;
  }
  .h-line-blue-text {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .h-line {
    max-height: 1px;
    margin: 10px;
    margin-bottom: 12px;
  }
  .latest-project-block {
    display: flex;
    justify-content: center;
  }
  .latest-left {
    margin-left: -140px;
  }
  .latest-right {
    margin-left: 140px;
  }
  .modern-art {
    font-weight: bold;
    font-size: 2.2em;
    letter-spacing: 0.07em;
    padding-top: 50px;
  }
  .add-menu {
    text-transform: uppercase;
    letter-spacing: 0.15em;
    font-weight: bold;
    color: $greyColor;
    &:hover {
      color: #97d1eb;
      text-decoration: underline;
    }
  }
  .btn-grey-line {
    color: $greyColor;
    background: #fff;
    border: 2px solid $greyColor;
    text-transform: uppercase;
    letter-spacing: 0.07em;
    font-weight: bold;
    padding: 10px 30px;
  }
  .idea {
    background-size: cover;
    height: 100%;
    background-position: center;
  }
  .third-text {
    color: $greyColor;
    font-size: 0.9em;
    font-weight: bold;
    line-height: 2.0em;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .brands {
    margin: {
      top: 100px;
      bottom: 100px;
    }
  }
  .before-footer {
    margin-bottom: 50px;
  }
  // .house-border {
  //   position: absolute;
  // }
  .form-border {
    position: absolute;
    bottom: 10%;
  }
  .leftside-form {
    margin-top: 100px;
  }
  ul {
    padding-left: 70px;
  }
</style>
