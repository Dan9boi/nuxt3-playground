<script>
export default {
  props: {
    content: Object,
    navLink: String,
  },
  data: () => ({
    showReadMoreText: false,
  }),
  methods: {
    readMore(event) {
      const parentElement = event.target.parentElement;
      parentElement.classList.toggle("section-right--expand");
      const content = parentElement.querySelector(
        ".content-block__text-wrapper"
      );
      // this.showReadMoreText !== this.showReadMoreText;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        this.showReadMoreText = false;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
        this.showReadMoreText = true;
      }
    },
  },
  setup(props) {},
};
</script>

<template>
  <section class="content-block" :id="navLink">
    <div class="content-block__triangle-shadow">
      <div class="content-block__triangle"></div>
    </div>
    <article class="content-block__wrapper">
      <div class="content-block__section-left">
        <h2 class="content-block__title">{{ content.title }}</h2>
        <div class="content-block__text" v-html="content.text"></div>
      </div>

      <div class="content-block__section-right">
        <div class="content-block__text-wrapper">
          <h2 class="content-block__title-right">
            {{ content.titleRight }}
          </h2>
          <div
            class="content-block__text-right"
            v-html="content.textRight"
          ></div>
        </div>

        <a class="content-block__download-button" :href="content.downloadePDF"
          >Download PDF</a
        >
        <button class="content-block__button" @click="readMore">
          <div class="content-block__button-content">
            <span class="content-block__read" v-if="showReadMoreText"
              >Read Less</span
            >
            <span class="content-block__read" v-else>Read More</span>
            <svg
              class="content-block__svg-icon"
              width="21"
              height="13"
              viewBox="0 0 21 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.7331 10.5396L10.5 2.43164L19.2669 10.5396"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </button>
      </div>
    </article>
    <div class="content-block__triangle-shadow-two">
      <div class="content-block__triangle-two"></div>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
.content-block {
  color: #fff;
  background-color: #f3aaa1;
  position: relative;
  z-index: 2;

  @media (--viewport-md-min) {
    padding: 75px 100px;
    background-color: #f05a4e;
  }

  @media (--viewport-md-min) {
    &__wrapper {
      display: flex;
      align-items: center;
    }
  }

  &__section-left {
    background: #f05a4e;
    color: #fff;
    padding: 30px 30px;
    margin-top: -24px;

    @media (--viewport-md-min) {
      width: 100%;
      max-width: 540px;
      margin-left: auto;
    }
  }

  &__section-right {
    background: #f3aaa1;
    padding: 45px 30px 10px;
    margin-bottom: -18px;

    @media (--viewport-md-min) {
      width: 100%;
      max-width: 540px;
      margin-left: auto;
      background: #f05a4e;
      margin-right: auto;
    }
  }

  &__text-wrapper {
    overflow: hidden;
    transition: max-height 0.4s ease-out;
    max-height: 0;

    @media (--viewport-md-min) {
      max-height: 100%;
    }
  }

  &__title {
    font-size: 20px;

    @media (--viewport-md-min) {
      font-size: 37px;
    }
  }

  &__text {
    line-height: 25px;
    font-size: 13px;

    @media (--viewport-md-min) {
      font-size: 20px;
      line-height: 30px;
    }
  }
  &__text-right {
    line-height: 25px;
    font-size: 13px;

    @media (--viewport-md-min) {
      font-size: 20px;
      line-height: 30px;
    }
  }

  &__download-button {
    display: none;

    @media (--viewport-md-min) {
      display: block;
      display: flex;
      justify-content: center;
      background: #f05a4e;
      border: 4px solid #ba1412;
      box-sizing: border-box;
      border-radius: 5px;
      text-decoration: none;
      padding: 15px 36px;
      font-weight: bold;
      font-size: 23px;
      line-height: 25px;
      color: #ffff;
      margin-top: 50px;
      max-width: 330px;
      width: 100%;
      transition: 0.2s;
      box-shadow: 0px 12px 25px rgb(0 0 0 / 25%);

      &:hover {
        background: #b4433a !important ;
        transition: 0.1s;
        border: 4px solid #680b0a;
        color: #f0d9d8;
      }
    }
  }

  &__button {
    background: transparent;
    color: white;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    border: none;
    display: flex;

    @media (--viewport-md-min) {
      display: none;
    }
  }

  &__button-content {
    pointer-events: none;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-weight: bold;
  }

  &__svg-icon {
    margin-top: 15px;
    transform: rotate(180deg);
    transition: 0.6s ease-out;
  }

  &__triangle-shadow {
    filter: drop-shadow(0px -3px 7px rgba(50, 50, 0, 0.5));
    height: 50px;
    position: absolute;
    top: -49px;
    width: 100%;
    z-index: -1;
    left: 0;

    @media (--viewport-md-min) {
      filter: none;
    }
  }

  &__triangle {
    clip-path: polygon(0 0, 0% 100%, 100% 100%);
    background: #f05a4e;
    width: 100%;
    height: 50px;
  }

  &__triangle-shadow-two {
    filter: drop-shadow(0 3px 7px rgba(50, 50, 0, 0.5));
    height: 30px;
    position: absolute;
    bottom: -30px;
    width: 100%;
    z-index: -5;
    left: 0;

    @media (--viewport-md-min) {
      filter: none;
      bottom: -29px;
    }
  }

  &__triangle-two {
    clip-path: polygon(0 0, 0 100%, 100% 0);
    background: #f3aaa1;
    width: 100%;
    height: 50px;

    @media (--viewport-md-min) {
      background: #f05a4e;
      height: 50px;
    }
  }
}
/* 
.content-block::before {
  content: " ";
  width: 0;
  height: 0;
  border-bottom: 30px solid #f05a4e;
  border-right: 416px solid transparent;
  position: relative;
  top: -50px;
}

@media (--viewport-md-min) {
  .content-block::before {
    display: none;
  }
} */
/* .content-block::after {
  content: " ";
  width: 0;
  height: 0;
  border-top: 30px solid #f3aaa1;
  border-right: 416px solid transparent;
  position: relative;
  top: 51px;
}

@media (--viewport-md-min) {
  .content-block::after {
    display: none;
  }
} */

/* .content-block__section-left::after {
  content: " ";
  width: 0;
  height: 0;
  border-top: 30px solid #f05a4e;
  border-right: 416px solid transparent;
  position: relative;
  top: 76px;
  margin-left: -30px;
}

@media (--viewport-md-min) {
  .content-block__section-left::after {
    display: none;
  }
} */

/* @media (--viewport-md-min) {
  .content-block__download-button:hover {
    background: rgba(rgba(230, 226, 226, 0.5));
  }
} */

.section-right--expand .content-block__svg-icon {
  transform: rotate(0deg);
}
</style>
