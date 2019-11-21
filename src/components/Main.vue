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
              <img class="img-fluid blue-rect" src="img/blue-rect.png" alt="page">
              <h1>Architecture<br><span class="lower-letter">aims at eternity</span></h1>
              <img class="img-fluid blue-line" src="img/blue-line.png" alt="line">
            </div>
            <!-- <ul class="hero-pages">
              <li class="grey">01</li>
              <li class="grey">02</li>
              <li class="grey">03</li>
              <li class="grey">04</li>
            </ul> -->
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container-fluid second-section" id="about-us">
        <div class="row no-gutters">
          <div class="col-4 offset-1">
            <h3>Curabitur voluptat</h3>
            <p class="second-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed lorem augue. Maecenas vehicula metus eros, et pellentesque justo ornare nec. Curabitur volutpat, quam in mollis luctus, enim risus ullamcorper libero, eu vehicula sapien nunc et tortor. </p>
          </div>
          <div class="col-6 offset-1">
            <h1 class="we-create">We create <span class="lower-letter"><br>cool ideas</span></h1>
            <img class="img-fluid cool-ideas" src="img/cool-ideas.png" alt="house">
            <!-- <img class="img-fluid house-border" src="img/house.svg" alt="border"> -->
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container-fluid">
        <div class="row no-gutters">
          <div class="col-3 photos">
            <div class="idea photos" :style="{'background-image': 'url(img/idea.png)'}"></div>
            <span class="photo-text">Idea</span>
          </div>
          <div class="col-3 photos">
            <img class="img-fluid concept" src="img/concept.png" alt="concept">
            <span class="photo-text concept-text">Concept</span>
          </div>
          <div class="col-3 photos">
            <img class="img-fluid design" src="img/design.png" alt="design">
            <span class="photo-text design-text">Design</span>
          </div>
          <div class="col-3 photos">
            <img class="img-fluid develop" src="img/develop.png" alt="develop">
            <span class="photo-text develop-text">Develop</span>
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
      </div>
      <div class="container-fluid">
        <div class="row no-gutters">
          <div class="col-12 how-we-work" :style="{'background-image': 'url(img/how-we-work.png)'}">
            <img class="img-fluid dexterity-team-partnership" src="img/dexterity-team-partnership.png">
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container" id="projects">
        <div class="row no-gutters">
          <div class="col-12 h-line-blue-text">
            <img class="img-fluid h-line" src="img/h-line.png" alt="line">
            <span class="blue-text">Latest projects</span>
            <img class="img-fluid h-line" src="img/h-line.png" alt="line">
          </div>
        </div>
        <div class="row no-gutters pb-2">
          <div class="col-6 latest-left">
            <img class="img-fluid latest-projects" :src="curImageSrc" alt="stairs">
            <img class="blue-arrow-left" src="img/blue-arrow-left.png" @click="goBack">
            <img class="blue-arrow-right" src="img/blue-arrow-right.png" @click="goForward">
          </div>
          <div class="col-6">
            <h5 class="latest-right modern-art">Modern art gallery<br>Warsaw, Poland</h5>
            <p class="third-text latest-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed lorem augue.
              Maecenas vehicula metus eros, et pellentesque justo ornare nec. Curabitur volutpat,
              quam in mollis luctus, enim risus ullamcorper libero, eu vehicula sapien nunc et tortor. </p>
            <!-- <button class="latest-right btn-grey-line">Case study</button> -->
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row no-gutters mt-4 mb-4">
          <div class="col latest-project-block">
            <!-- <img class="img-fluid latest-project-item mr-4" src="img/latest-project1.png" alt="1">
            <img class="img-fluid latest-project-item mr-4" src="img/latest-project2.png" alt="2">
            <img class="img-fluid latest-project-item mr-4" src="img/latest-project3.png" alt="3">
            <img class="img-fluid latest-project-item" src="img/latest-project4.png" alt="4"> -->
            <img v-for="image in images" @click="changeLargeImg(image.imageSrc)" class="img-fluid latest-project-item" :src="image.imageSrc" :key="image.id">
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
      <div class="container" id="clients">
        <div class="row no-gutters">
          <div class="col d-flex justify-content-around align-items-center brands">
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
      <div class="container before-footer" id="contact">
        <div class="row no-gutters">
          <div class="col-7 leftside-form">
            <form>
              <ul>
                <li class="add-menu">Contact us</li>
                <!-- <li class="add-menu">Phone</li>
                <li class="add-menu">E-mail</li><br> -->
                <div class="grey-line">
                  <label for="name" class="add-input">Name</label>
                  <input type="text" id="name">
                </div>
                <div class="grey-line">
                  <label for="phone" class="add-input">Phone</label>
                  <input type="text" id="phone">
                </div>
                <div class="grey-line">
                  <label for="email" class="add-input">E-mail</label>
                  <input type="text" id="email">
                </div>
                <label for="message" class="add-textarea">Message</label><br>
                <textarea name="message" id="message" cols="70" rows="9"></textarea>
                <div class="d-flex justify-content-center button-div">
                  <button class="btn-grey-line">Send</button>
                </div>
              </ul>
            </form>
          </div>
          <div class="col-5">
            <img class="img-fluid img-contact" src="img/contact.png" alt="glass">
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
  name: 'Main',
  data () {
    return {
      curImageSrc: 'img/latest-projects.png',
      imageIndex: 3,
      images: [
        {
          imageSrc: 'img/latest-project1.png'
        },
        {
          imageSrc: 'img/latest-project2.png'
        },
        {
          imageSrc: 'img/latest-project3.png'
        },
        {
          imageSrc: 'img/latest-project4.png'
        }
      ]
    }
  },
  methods: {
    changeLargeImg (src) {
      this.curImageSrc = src
    },
    goBack () {
      this.imageIndex = this.imageIndex - 1
      if (this.imageIndex < 0) {
        this.imageIndex = this.images.length - 1
      }
      let curImage = this.images[this.imageIndex]
      this.curImageSrc = curImage.imageSrc
    },
    goForward () {
      this.imageIndex = (this.imageIndex + 1) % this.images.length
      let curImage = this.images[this.imageIndex]
      this.curImageSrc = curImage.imageSrc
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  $fontFamily: 'Raleway-ExtraBold', AdobeInvisFont, 'MyriadPro-Regular';
  $greyColor: rgba(188, 192, 205, 255);

  * {
    font-family: $fontFamily;
  }
  ul {
    padding-left: 70px;
  }
  input, textarea {
    border: none;
  }
  textarea {
    border-bottom: 2px solid #e6e7ec;
  }
  li {
    display: inline-block;
    &:not(:last-child) {
      margin-right: 40px;
    }
  }
  .background {
    padding-left: 15px;
  }
  h1 {
    font-size: 5.6em;
    color: rgba(0, 0, 0, 255);
    font-weight: bold;
    margin-left: 38px;
    position: relative;
    z-index: 1;
    letter-spacing: 0.05em;
    padding-top: 40px;
  }
  .we-create {
    margin-left: -60px;
    padding-top: 5px;
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
    top: 50%;
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
    left: 20.5%;
    color: $greyColor;
    font-size: 1.125em;
    font-weight: bold;
  }
  .blue-line {
    position: absolute;
    left: 19%;
    top: 100%;
    width: 50%;
  }
  .blue-rect {
    padding-top: 40px;
  }
  .grey {
    color: $greyColor;
    font-size: 1.125em;
    font-weight: bold;
  }
  .second-section {
    margin-top: 230px;
    margin-bottom: 150px;
  }
  h3 {
    color: $greyColor;
    font-size: 3.2em;
    font-weight: bold;
    margin-left: -10px;
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
      top: 70px;
      bottom: 70px;
    }
  }
  .add-input {
    color: #e6e7ec;
    font-weight: bold;
    font-size: 1.6em;
    letter-spacing: 0.03em;
  }
  .add-textarea {
    color: #e6e7ec;
    font-weight: bold;
    font-size: 1.4em;
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
  .how-we-work {
    opacity: 0.4;
    width: 110%;
    padding: 50px;
    display: flex;
    justify-content: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.80);
  }
  .dexterity-team-partnership {
    width: 80%;
  }
  .blue-arrow-left {
    position: absolute;
    top: 25%;
    left: 91.5%;
    z-index: 100;
    width: 17%;
  }
  .blue-arrow-right {
    position: absolute;
    top: 50.5%;
    left: 91.5%;
    z-index: 100;
    width: 17%;
  }
  .latest-projects {
    width: 400%;
  }
  .latest-project-block {
    display: flex;
    justify-content: center;
  }
  .latest-left {
    margin-left: -160px;
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
    letter-spacing: 0.3em;
    font-size: 0.9em;
    font-weight: bold;
    color: $greyColor;
    margin-bottom: 40px;
    &:hover {
      color: #97d1eb;
      border-bottom: 1px solid #97d1eb;
    }
  }
  .btn-grey-line {
    color: $greyColor;
    background: #fff;
    border: 2px solid #e6e7ec;
    text-transform: uppercase;
    letter-spacing: 0.07em;
    font-weight: bold;
    padding: 15px 50px 10px 50px;
    margin-top: 30px;
  }
  .photos:hover {
    outline: 10px solid #97d1eb;
    outline-offset: -20px;
  }
  .idea {
    background-size: cover;
    height: 100%;
    background-position: center;
    position: relative;
  }
  .photo-text {
    position: absolute;
    top: 45%;
    left: 30%;
    font-size: 3.750em;
    color: white;
    background: #97d1eb;
    padding: 0 10px;
  }
  .concept-text {
    left: 14%;
  }
  .design-text {
    left: 20%;
  }
  .develop-text {
    left: 15%;
  }
  .third-text {
    color: $greyColor;
    font-size: 0.9em;
    font-weight: bold;
    line-height: 2.0em;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .latest-project-item:hover {
    outline: 10px solid #97d1eb;
    outline-offset: -10px;
  }
  .latest-project-item:not(:last-child) {
    margin-right: 20px;
  }
  .brands {
    margin: {
      top: 80px;
      bottom: 80px;
    }
  }
  .before-footer {
    margin-bottom: 50px;
  }
  .form-border {
    position: absolute;
    bottom: 10%;
  }
  .leftside-form {
    margin-top: 100px;
    z-index: 100;
  }
  .grey-line {
    border-bottom: 2px solid #e6e7ec;
    width: 85%;
  }
  .button-div {
    margin-left: -70px;
  }

  @media (max-width: 1200px) {
    h1 {
      font-size: 5.5em;
    }
    .blue-rect {
      width: 17%;
    }
    .we-create {
      margin-left: -90px;
      font-size: 5.3em;
    }
    textarea {
      width: 85%;
      height: 80px;
    }
    .blue-arrow-left {
      width: 15%;
      top: 23.5%;
    }
    .blue-arrow-right {
      width: 15%;
      top: 40%;
    }
    .modern-art {
      padding-top: 0;
    }
    .photo-text {
      font-size: 3em;
    }
    .cool-ideas {
      top: -40%;
    }
  }
  @media (max-width: 1000px) {
    .cool-ideas {
      top: -20%;
    }
    .we-create {
      margin-left: -70px;
      font-size: 4.5em;
      margin-top: 60px;
    }
    .latest-right {
      width: 450px;
    }
    .blue-arrow-right {
      top: 43%;
    }
    textarea {
      height: 0px;
    }
    .img-contact {
      padding-top: 35px;
    }
  }
</style>
