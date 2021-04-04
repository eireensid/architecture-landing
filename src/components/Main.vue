<template>
  <div id="app">
   <section>
      <div class="container-fluid first-section">
        <div class="row no-gutters">
          <div class="col-9 first-section__col">
            <div class="first-section__title-first-letter">A</div>
            <h1 class="first-section__title">Architecture<span class="first-section__title--lower-letter"> aims at eternity</span></h1>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container-fluid second-section" id="about-us">
        <div class="row no-gutters">
          <div class="col-4 offset-1">
            <h3>Curabitur voluptat</h3>
            <p class="second-section__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed lorem augue. Maecenas vehicula metus eros, et pellentesque justo ornare nec. Curabitur volutpat, quam in mollis luctus, enim risus ullamcorper libero, eu vehicula sapien nunc et tortor. </p>
          </div>
          <div class="col-6 offset-1">
            <h1 class="second-section__we-create wow animate__animated animate__fadeInRight">We create <span class="second-section__lower-letter"><br>cool ideas</span></h1>
            <img class="img-fluid second-section__cool-ideas wow animate__animated animate__fadeInUpBig" src="img/cool-ideas.png" alt="house">
            <!-- <img class="img-fluid house-border" src="img/house.svg" alt="border"> -->
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container-fluid third-section">
        <div class="row no-gutters">
          <div class="col-3 third-section__photo">
            <div class="third-section__idea third-section__photo-item wow animate__animated animate__fadeInUpBig" :style="{'background-image': 'url(img/idea.png)'}"></div>
            <span class="third-section__photo-text">Idea</span>
          </div>
          <div class="col-3 third-section__photo">
            <img class="img-fluid third-section__concept wow animate__animated animate__fadeInUpBig" src="img/concept.png" alt="concept">
            <span class="third-section__photo-text third-section__concept-text">Concept</span>
          </div>
          <div class="col-3 third-section__photo">
            <img class="img-fluid third-section__design wow animate__animated animate__fadeInUpBig" src="img/design.png" alt="design">
            <span class="third-section__photo-text third-section__design-text">Design</span>
          </div>
          <div class="col-3 third-section__photo">
            <img class="img-fluid third-section__develop wow animate__animated animate__fadeInUpBig" src="img/develop.png" alt="develop">
            <span class="third-section__photo-text third-section__develop-text">Develop</span>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="fourth-section">
        <div class="container">
          <div class="row no-gutters">
            <h3 class="fourth-section__blue-text">How we work</h3>
          </div>
        </div>
        <div class="container-fluid fourth-section__how-we-work-wr" id="scene">
          <div class="row no-gutters">
            <div class="fourth-section__how-we-work">
              <span class="col-4 fourth-section__how-we-work-item">Dexterity</span>
              <span class="col-4 fourth-section__how-we-work-item">Team</span>
              <span class="col-4 fourth-section__how-we-work-item">Partnership</span>
            </div>
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
            <img v-for="(image, ind) in images" @click="changeLargeImg(image.imageSrc, ind)" :class="{'latest-project-item_clicked': image.active}" class="img-fluid latest-project-item" :src="image.imageSrc" :key="image.id">
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
                  <input type="text" id="name" required>
                </div>
                <div class="grey-line">
                  <label for="phone" class="add-input">Phone</label>
                  <input type="text" id="phone" required pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}">
                </div>
                <div class="grey-line">
                  <label for="email" class="add-input">E-mail</label>
                  <input type="text" id="email" required pattern="\S+@[a-z]+.[a-z]+">
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
          imageSrc: 'img/latest-project1.png',
          active: false
        },
        {
          imageSrc: 'img/latest-project2.png',
          active: false
        },
        {
          imageSrc: 'img/latest-project3.png',
          active: false
        },
        {
          imageSrc: 'img/latest-project4.png',
          active: false
        }
      ]
    }
  },
  methods: {
    changeLargeImg (src, ind) {
      this.curImageSrc = src
      this.images.forEach(image => {
        image.active = false
      })
      let curImage = this.images[ind]
      curImage.active = true
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
    resize: none;
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
  .first-section {
    position: relative;
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
    top: 25%; // 50%
    left: 7%;
    // width: 100%;
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

  .first-section {
    background-image: url('Photo1.png');
    background-repeat: no-repeat;
    background-position: right;
    background-size: 65.7%;
    height: 724px;
    display: flex;
    align-items: center;

    &__col {
      display: flex;
      align-items: center;
    }

    &__title-first-letter {
      color: #fff;
      font-size: 7em;
      background: #97d1eb;
      line-height: 1;
      height: 120px;
      transform: scale(1.4);
      margin-left: 100px;
      padding: 10px 25px;
    }

    &__title {
      max-width: 1300px;
      width: 100%;
      border-bottom: 10px solid #97d1eb;
      margin-left: 70px;
    }
  }

  .second-section {
    margin-top: 230px;
    margin-bottom: 150px;

    h3 {
      color: $greyColor;
      font-size: 3.2em;
      font-weight: bold;
      margin-left: -10px;
    }

    &__text {
      color: $greyColor;
      font-size: 0.9em;
      font-weight: bold;
      line-height: 2.0em;
      padding-top: 40px;
      text-align: justify;
      margin-left: -2%;
    }

    &__we-create {
      margin-left: -60px;
      padding-top: 5px;
    }
    &__cool-ideas {
      position: absolute;
      top: -70%;
      right: 0%;
    }

    &__lower-letter {
      font-size: 0.8em;
    }
  }

  .fourth-section {
    &__blue-text {
      text-transform: uppercase;
      font-size: 0.9em;
      color: #97d1eb;
      // justify-content: center;
      // display: flex;
      letter-spacing: 0.2em;
      font-weight: 600;
      padding: {
        top: 70px;
        bottom: 70px;
      }
      margin: 0 auto;
      position: relative;

      &:before {
        content: '';
        position: absolute;
        left: -110px;
        top: 48%;
        border: 1px solid #97d1eb;
        width: 100px;
      }

      &:after {
        content: '';
        position: absolute;
        right: -110px;
        top: 48%;
        border: 1px solid #97d1eb;
        width: 100px;
      }
    }

    &__how-we-work-wr {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.80);
    }

    &__how-we-work {
      opacity: 0.4;
      width: 90%;
      justify-content: center;
      padding: 50px;
      display: flex;
      height: 230px;
      align-items: flex-end;
      margin: 0 auto;
    }

    &__how-we-work-item {
      font-weight: bold;
      font-size: 3.750em;
      display: flex;
    }

    &__how-we-work-item:nth-child(2) {
      justify-content: center;
    }

    &__how-we-work-item:last-child {
      justify-content: flex-end;
    }
  }

  .blue-text {
    text-transform: uppercase;
    font-size: 0.9em;
    color: #97d1eb;
    justify-content: center;
    display: flex;
    letter-spacing: 0.2em;
    font-weight: 600;
    // margin: 70px auto;
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
  // .h-line-blue-text {
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  // }
  // .h-line {
  //   max-height: 1px;
  //   margin: 10px;
  //   margin-bottom: 12px;
  // }
  // .how-we-work {
  //   opacity: 0.4;
  //   width: 110%;
  //   padding: 50px;
  //   display: flex;
  //   justify-content: center;
  //   box-shadow: 0 0 10px rgba(0, 0, 0, 0.80);
  // }
  // .dexterity-team-partnership {
  //   width: 80%;
  // }
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

  .third-section {
    &__photo {
      &:hover {
        .third-section__photo-item {
          transition: all .25s ease-in-out;
          outline: 10px solid #97d1eb;
          outline-offset: -20px;
        }

        img {
          transition: all .25s ease-in-out;
          outline: 10px solid #97d1eb;
          outline-offset: -20px;
        }
      }
    }

    &__idea {
      background-size: cover;
      height: 100%;
      background-position: center;
      position: relative;
    }

    &__photo-text {
      position: absolute;
      top: 45%;
      left: 30%;
      font-size: 3.750em;
      color: white;
      background: #97d1eb;
      padding: 0 10px;
    }

    &__concept-text {
      left: 14%;
    }

    &__design-text {
      left: 20%;
    }

    &__develop-text {
      left: 15%;
    }
  }

  // .third-text {
  //   color: $greyColor;
  //   font-size: 0.9em;
  //   font-weight: bold;
  //   line-height: 2.0em;
  //   padding-top: 20px;
  //   padding-bottom: 20px;
  // }
  .latest-project-item:hover, .latest-project-item_clicked {
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
