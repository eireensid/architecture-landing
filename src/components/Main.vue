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
            <h3 class="fourth-section__blue-text h3-title">How we work</h3>
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
      <div class="fifth-section" id="projects">
        <div class="cobtainer">
          <div class="row no-gutters">
            <h3 class="fifth-section__blue-text h3-title">Latest projects</h3>
          </div>
        </div>
        <div class="container-fluid fifth-section__container-fluid">
          <div class="row no-gutters pb-2">
            <div class="col-5 fifth-section__latest-left">
              <img class="img-fluid fifth-section__latest-projects" :src="curImageSrc" alt="stairs">
              <img class="blue-arrow-left" src="img/blue-arrow-left.png" @click="goBack">
              <img class="blue-arrow-right" src="img/blue-arrow-right.png" @click="goForward">
            </div>
            <div class="col-5">
              <h5 class="fifth-section__latest-right fifth-section__modern-art">Modern art gallery<br>Warsaw, Poland</h5>
              <p class="fifth-section__third-text fifth-section__latest-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed lorem augue.
                Maecenas vehicula metus eros, et pellentesque justo ornare nec. Curabitur volutpat,
                quam in mollis luctus, enim risus ullamcorper libero, eu vehicula sapien nunc et tortor. </p>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row no-gutters mt-4 mb-4">
          <div class="col fifth-section__latest-project-block">
            <img v-for="(image, ind) in images" @click="changeLargeImg(image.imageSrc, ind)" :class="{'latest-project-item_clicked': image.active}" class="img-fluid fifth-section__latest-project-item" :src="image.imageSrc" :key="image.id">
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container sixth-section" id="clients">
        <div class="row no-gutters">
          <div class="col d-flex justify-content-around align-items-center sixth-section__brands">
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
      <div class="container seventh-section" id="contact">
        <div class="row no-gutters">
          <div class="col">
            <form class="seventh-section__form">
              <div class="seventh-section__form-left">
                <span class="seventh-section__top">Contact us</span>
                <div class="seventh-section__grey-line">
                  <label for="name" class="seventh-section__add-input">Name</label>
                  <input type="text" id="name" required>
                </div>
                <div class="seventh-section__grey-line">
                  <label for="phone" class="seventh-section__add-input">Phone</label>
                  <input type="text" id="phone" required pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}">
                </div>
                <div class="seventh-section__grey-line">
                  <label for="email" class="seventh-section__add-input">E-mail</label>
                  <input type="text" id="email" required pattern="\S+@[a-z]+.[a-z]+">
                </div>
                <label for="message" class="seventh-section__add-textarea">Message</label><br>
                <textarea name="message" id="message" cols="60" rows="8"></textarea>
                <div class="d-flex justify-content-center seventh-section__button-div">
                  <button class="seventh-section__btn-grey-line">Send</button>
                </div>
              </div>
              <div class="seventh-section__form-right">
                <div class="seventh-section__form-right-img-wr">
                  <img class="img-fluid seventh-section__img-contact" src="img/contact.png">
                </div>  
              </div>
            </form>
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
    outline: none;
  }
  textarea {
    border-bottom: 2px solid #e6e7ec;
    resize: none;
    outline: none;
  }
  li {
    display: inline-block;
    &:not(:last-child) {
      margin-right: 40px;
    }
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

  .container-fluid {
    padding-right: 0;
    padding-left: 0;
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

  .h3-title {
    text-transform: uppercase;
    font-size: 0.9em;
    color: #97d1eb;
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

  .fourth-section {
    &__how-we-work-wr {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.60);
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

  .fifth-section {
    &__container-fluid {
      position: relative;

      &:before {
        position: absolute;
        width: 100%;
        content: '';
        border: 1px solid #bcc0cd54;
        left: 0;
        top: 600px;
      }
    }

    &__latest-projects {
      width: 400%;
      height: 385px;
      object-fit: cover;
    }

    &__latest-right {
      margin-left: 140px;
    }

    &__modern-art {
      font-weight: bold;
      font-size: 2.2em;
      letter-spacing: 0.07em;
      padding-top: 50px;
    }

    &__latest-project-block {
      display: flex;
      justify-content: center;
    }

    &__latest-project-item:hover, .latest-project-item_clicked {
      outline: 10px solid #97d1eb;
      outline-offset: -10px;
      transition: all .25s ease-in-out;
    }
    &__latest-project-item:not(:last-child) {
      margin-right: 20px;
    }
  }

  .sixth-section {
    &__brands {
      margin: {
        top: 80px;
        bottom: 80px;
      }
    }
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

  .seventh-section {
    margin-bottom: 50px;

    &__form {
      display: flex;
      justify-content: space-between;
      border: 10px solid #97d1eb;
    }

    &__top {
      text-transform: uppercase;
      letter-spacing: 0.3em;
      font-size: 0.9em;
      font-weight: bold;
      color: #97d1eb;
      margin-bottom: 40px;
      display: block;
    }

    &__form-left {
      margin-top: 80px;
      padding-left: 80px;
    }

    &__form-right-img-wr {
      height: 630px;
      width: 490px;
    }

    &__img-contact {
      height: 100%;
      width: 100%;
    }

    &__grey-line {
      border-bottom: 2px solid #e6e7ec;
      margin-bottom: 0.5rem;
      display: flex;
      align-items: center;
    }

    &__add-input {
      color: #e6e7ec;
      font-weight: bold;
      font-size: 1.6em;
      letter-spacing: 0.03em;
      margin-right: 10px;
      margin-bottom: 0;
    }

    &__add-textarea {
      color: #e6e7ec;
      font-weight: bold;
      font-size: 1.4em;
      letter-spacing: 0.03em;
    }

    &__btn-grey-line {
      color: $greyColor;
      background: #fff;
      border: 2px solid #e6e7ec;
      text-transform: uppercase;
      letter-spacing: 0.07em;
      font-weight: bold;
      padding: 15px 50px 10px 50px;
      margin-top: 30px;
      transition: all 0.25 ease-out;

      &:hover {
        border: 2px solid #97d1eb;
        color: #97d1eb;
      }
    }
  }
</style>
