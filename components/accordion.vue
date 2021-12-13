<script>
export default {
  props: {
    content: Object,
    navLink: String,
  },
  methods: {
    readMore(event) {
      const parentElement = event.target.parentElement;
      parentElement.classList.toggle("accordion--expand");
      const content = parentElement.querySelector(
        ".accordion__items-description-wrapper"
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
  <section class="accordion" :id="navLink">
    <svg
      class="accordion-animation-mobile-top"
      width="102"
      height="101"
      viewBox="0 0 102 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g class="group-one">
        <rect
          x="59.4431"
          y="83.9076"
          width="16.9406"
          height="17"
          transform="rotate(90 59.4431 83.9076)"
          fill="#439A0E"
          fill-opacity="0.2"
        />
      </g>
      <g class="group-two">
        <rect
          x="17.4431"
          y="83.9076"
          width="16.9406"
          height="17"
          transform="rotate(90 17.4431 83.9076)"
          fill="#439A0E"
          fill-opacity="0.2"
        />
      </g>
      <g class="group-three">
        <rect
          x="17.4431"
          y="0.201538"
          width="16.9406"
          height="17"
          transform="rotate(90 17.4431 0.201538)"
          fill="#439A0E"
          fill-opacity="0.2"
        />
      </g>
      <g class="group-four">
        <rect
          x="59.4431"
          y="0.201538"
          width="16.9406"
          height="17"
          transform="rotate(90 59.4431 0.201538)"
          fill="#439A0E"
          fill-opacity="0.2"
        />
      </g>
      <g class="group-five">
        <rect
          x="101.443"
          y="0.20166"
          width="16.9406"
          height="17"
          transform="rotate(90 101.443 0.20166)"
          fill="#439A0E"
          fill-opacity="0.2"
        />
      </g>
    </svg>
    <svg
      class="accordion-animation-mobile-left-bottom"
      width="143"
      height="102"
      viewBox="0 0 143 102"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g class="group-four">
        <rect
          x="17"
          y="17.9521"
          width="17"
          height="17"
          transform="rotate(-180 17 17.9521)"
          fill="#439A0E"
          fill-opacity="0.2"
        />
        <rect
          x="59"
          y="101.952"
          width="17"
          height="17"
          transform="rotate(-180 59 101.952)"
          fill="#439A0E"
          fill-opacity="0.2"
        />
      </g>
      <g class="group-three">
        <rect
          x="59"
          y="59.9521"
          width="17"
          height="17"
          transform="rotate(-180 59 59.9521)"
          fill="#439A0E"
          fill-opacity="0.2"
        />
        <rect
          x="17"
          y="59.9521"
          width="17"
          height="17"
          transform="rotate(-180 17 59.9521)"
          fill="#439A0E"
          fill-opacity="0.2"
        />
      </g>
      <g class="group-two">
        <rect
          x="101"
          y="59.9521"
          width="17"
          height="17"
          transform="rotate(-180 101 59.9521)"
          fill="#439A0E"
          fill-opacity="0.2"
        />
        <rect
          x="101"
          y="17.9521"
          width="17"
          height="17"
          transform="rotate(-180 101 17.9521)"
          fill="#439A0E"
          fill-opacity="0.2"
        />
      </g>
      <g class="group-one">
        <rect
          x="143"
          y="101.952"
          width="17"
          height="17"
          transform="rotate(-180 143 101.952)"
          fill="#439A0E"
          fill-opacity="0.2"
        />
      </g>
    </svg>

    <svg
      class="accordion-animation-mobile-right-bottom"
      width="143"
      height="102"
      viewBox="0 0 143 102"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g class="group-one">
        <rect
          x="58.9998"
          y="17.9521"
          width="17"
          height="17"
          transform="rotate(-180 58.9998 17.9521)"
          fill="#439A0E"
          fill-opacity="0.2"
        />
        <rect
          x="59"
          y="101.952"
          width="17"
          height="17"
          transform="rotate(-180 59 101.952)"
          fill="#439A0E"
          fill-opacity="0.2"
        />
      </g>

      <g class="group-two">
        <rect
          x="143"
          y="59.9521"
          width="17"
          height="17"
          transform="rotate(-180 143 59.9521)"
          fill="#439A0E"
          fill-opacity="0.2"
        />
        <rect
          x="59"
          y="59.9521"
          width="17"
          height="17"
          transform="rotate(-180 59 59.9521)"
          fill="#439A0E"
          fill-opacity="0.2"
        />
      </g>

      <g class="group-three">
        <rect
          x="17"
          y="59.9521"
          width="17"
          height="17"
          transform="rotate(-180 17 59.9521)"
          fill="#439A0E"
          fill-opacity="0.2"
        />
        <rect
          x="101"
          y="59.9521"
          width="17"
          height="17"
          transform="rotate(-180 101 59.9521)"
          fill="#439A0E"
          fill-opacity="0.2"
        />
      </g>

      <g class="group-four">
        <rect
          x="101"
          y="17.9521"
          width="17"
          height="17"
          transform="rotate(-180 101 17.9521)"
          fill="#439A0E"
          fill-opacity="0.2"
        />
        <rect
          x="143"
          y="17.9521"
          width="17"
          height="17"
          transform="rotate(-180 143 17.9521)"
          fill="#439A0E"
          fill-opacity="0.2"
        />
      </g>

      <g class="group-five">
        <rect
          x="143"
          y="101.952"
          width="17"
          height="17"
          transform="rotate(-180 143 101.952)"
          fill="#439A0E"
          fill-opacity="0.2"
        />
      </g>
    </svg>

    <svg
      class="accordion-animation"
      width="206"
      height="573"
      viewBox="0 0 206 573"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g class="group-one">
        <rect
          x="60.291"
          y="547.369"
          width="25"
          height="25"
          fill="#439A0E"
          fill-opacity="0.2"
        />
        <rect
          x="180.291"
          y="545.534"
          width="25"
          height="25"
          fill="#439A0E"
          fill-opacity="0.2"
        />
        <rect
          x="60.291"
          y="365.534"
          width="25"
          height="25"
          fill="#439A0E"
          fill-opacity="0.2"
        />
      </g>
      <g class="group-two">
        <rect
          x="120.291"
          y="365.534"
          width="25"
          height="25"
          fill="#439A0E"
          fill-opacity="0.2"
        />
        <rect
          x="120.291"
          y="425.534"
          width="25"
          height="25"
          fill="#439A0E"
          fill-opacity="0.2"
        />
        <rect
          x="0.291016"
          y="425.534"
          width="25"
          height="25"
          fill="#439A0E"
          fill-opacity="0.2"
        />
      </g>
      <g class="group-three">
        <rect
          x="180.291"
          y="425.534"
          width="25"
          height="25"
          fill="#439A0E"
          fill-opacity="0.2"
        />
        <rect
          x="60.291"
          y="485.534"
          width="25"
          height="25"
          fill="#439A0E"
          fill-opacity="0.2"
        />
        <rect
          x="120.291"
          y="485.534"
          width="25"
          height="25"
          fill="#439A0E"
          fill-opacity="0.2"
        />
      </g>
      <g class="group-four">
        <rect
          x="180.291"
          y="485.534"
          width="25"
          height="25"
          fill="#439A0E"
          fill-opacity="0.2"
        />
        <rect
          x="120.291"
          y="183.698"
          width="25"
          height="25"
          fill="#439A0E"
          fill-opacity="0.2"
        />
        <rect
          x="180.291"
          y="181.863"
          width="25"
          height="25"
          fill="#439A0E"
          fill-opacity="0.2"
        />
      </g>
      <g class="group-five">
        <rect
          x="120.291"
          y="243.698"
          width="25"
          height="25"
          fill="#439A0E"
          fill-opacity="0.2"
        />
        <rect
          x="60.291"
          y="303.698"
          width="25"
          height="25"
          fill="#439A0E"
          fill-opacity="0.2"
        />
        <rect
          x="180.291"
          y="303.698"
          width="25"
          height="25"
          fill="#439A0E"
          fill-opacity="0.2"
        />
      </g>
      <g class="group-six">
        <rect
          x="60.291"
          y="1.86292"
          width="25"
          height="25"
          fill="#439A0E"
          fill-opacity="0.2"
        />
        <rect
          x="180.291"
          y="0.0274658"
          width="25"
          height="25"
          fill="#439A0E"
          fill-opacity="0.2"
        />
        <rect
          x="60.291"
          y="61.8629"
          width="25"
          height="25"
          fill="#439A0E"
          fill-opacity="0.2"
        />
      </g>
      <g class="group-seven">
        <rect
          x="120.291"
          y="61.8629"
          width="25"
          height="25"
          fill="#439A0E"
          fill-opacity="0.2"
        />
        <rect
          x="0.291016"
          y="61.8629"
          width="25"
          height="25"
          fill="#439A0E"
          fill-opacity="0.2"
        />
        <rect
          x="60.291"
          y="121.863"
          width="25"
          height="25"
          fill="#439A0E"
          fill-opacity="0.2"
        />
        <rect
          x="120.291"
          y="121.863"
          width="25"
          height="25"
          fill="#439A0E"
          fill-opacity="0.2"
        />
        <rect
          x="180.291"
          y="121.863"
          width="25"
          height="25"
          fill="#439A0E"
          fill-opacity="0.2"
        />
      </g>
    </svg>
    <svg
      class="accordion-animation-left"
      width="519"
      height="203"
      viewBox="0 0 519 203"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g class="group-one">
        <rect
          x="56.1152"
          y="202.083"
          width="25"
          height="24.9998"
          transform="rotate(-90 56.1152 202.083)"
          fill="#439A0E"
          fill-opacity="0.2"
        />
        <rect
          x="56.1152"
          y="25.083"
          width="25"
          height="24.9998"
          transform="rotate(-90 56.1152 25.083)"
          fill="#439A0E"
          fill-opacity="0.2"
        />
        <rect
          x="0.115723"
          y="202.083"
          width="25"
          height="24.9998"
          transform="rotate(-90 0.115723 202.083)"
          fill="#439A0E"
          fill-opacity="0.2"
        />
      </g>
      <g class="group-two">
        <rect
          x="112.115"
          y="202.083"
          width="25"
          height="24.9998"
          transform="rotate(-90 112.115 202.083)"
          fill="#439A0E"
          fill-opacity="0.2"
        />
        <rect
          x="112.115"
          y="143.083"
          width="25"
          height="24.9998"
          transform="rotate(-90 112.115 143.083)"
          fill="#439A0E"
          fill-opacity="0.2"
        />
        <rect
          x="56.1152"
          y="143.083"
          width="25"
          height="24.9998"
          transform="rotate(-90 56.1152 143.083)"
          fill="#439A0E"
          fill-opacity="0.2"
        />
      </g>
      <g class="group-three">
        <rect
          x="0.115723"
          y="86.7563"
          width="25"
          height="24.9998"
          transform="rotate(-90 0.115723 86.7563)"
          fill="#439A0E"
          fill-opacity="0.2"
        />
        <rect
          x="168.114"
          y="143.083"
          width="25"
          height="24.9998"
          transform="rotate(-90 168.114 143.083)"
          fill="#439A0E"
          fill-opacity="0.2"
        />
        <rect
          x="227.311"
          y="202.083"
          width="25"
          height="24.9998"
          transform="rotate(-90 227.311 202.083)"
          fill="#439A0E"
          fill-opacity="0.2"
        />
      </g>
      <g class="group-four">
        <rect
          x="279.747"
          y="143.083"
          width="25"
          height="24.9998"
          transform="rotate(-90 279.747 143.083)"
          fill="#439A0E"
          fill-opacity="0.2"
        />
        <rect
          x="335.746"
          y="143.083"
          width="25"
          height="24.9998"
          transform="rotate(-90 335.746 143.083)"
          fill="#439A0E"
          fill-opacity="0.2"
        />
        <path
          d="M493.683 177.083V202.083H518.682V177.083H493.683Z"
          fill="#439A0E"
          fill-opacity="0.2"
        />
      </g>
    </svg>

    <svg
      class="accordion-animation-right"
      width="529"
      height="203"
      viewBox="0 0 529 203"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g class="group-one">
        <rect
          width="25"
          height="25"
          transform="matrix(0 -1 -1 0 472.466 202.083)"
          fill="#439A0E"
          fill-opacity="0.2"
        />
        <rect
          width="25"
          height="25"
          transform="matrix(0 -1 -1 0 472.466 25.083)"
          fill="#439A0E"
          fill-opacity="0.2"
        />
        <rect
          width="25"
          height="25"
          transform="matrix(0 -1 -1 0 528.466 202.083)"
          fill="#439A0E"
          fill-opacity="0.2"
        />
      </g>
      <g class="group-two">
        <rect
          width="25"
          height="25"
          transform="matrix(0 -1 -1 0 416.466 202.083)"
          fill="#439A0E"
          fill-opacity="0.2"
        />
        <rect
          width="25"
          height="25"
          transform="matrix(0 -1 -1 0 416.466 143.083)"
          fill="#439A0E"
          fill-opacity="0.2"
        />
        <rect
          width="25"
          height="25"
          transform="matrix(0 -1 -1 0 472.466 143.083)"
          fill="#439A0E"
          fill-opacity="0.2"
        />
      </g>
      <g class="group-three">
        <rect
          width="25"
          height="25"
          transform="matrix(0 -1 -1 0 528.466 86.7563)"
          fill="#439A0E"
          fill-opacity="0.2"
        />
        <rect
          width="25"
          height="25"
          transform="matrix(0 -1 -1 0 360.466 143.083)"
          fill="#439A0E"
          fill-opacity="0.2"
        />
        <rect
          width="25"
          height="25"
          transform="matrix(0 -1 -1 0 25.2002 143.083)"
          fill="#439A0E"
          fill-opacity="0.2"
        />
      </g>
      <g class="group-four">
        <rect
          width="25"
          height="25"
          transform="matrix(0 -1 -1 0 248.833 143.083)"
          fill="#439A0E"
          fill-opacity="0.2"
        />
        <rect
          width="25"
          height="25"
          transform="matrix(0 -1 -1 0 304.466 202.083)"
          fill="#439A0E"
          fill-opacity="0.2"
        />
        <rect
          width="25"
          height="25"
          transform="matrix(0 -1 -1 0 192.833 202.083)"
          fill="#439A0E"
          fill-opacity="0.2"
        />
        <rect
          width="25"
          height="25"
          transform="matrix(0 -1 -1 0 80.8335 202.083)"
          fill="#439A0E"
          fill-opacity="0.2"
        />
      </g>
      <g class="group-two">
        <rect
          width="25"
          height="25"
          transform="matrix(0 -1 -1 0 136.833 202.083)"
          fill="#439A0E"
          fill-opacity="0.2"
        />
        <rect
          width="25"
          height="25"
          transform="matrix(0 -1 -1 0 192.833 143.083)"
          fill="#439A0E"
          fill-opacity="0.2"
        />
        <path
          d="M416.466 59.0825V84.0825H391.466V59.0825H416.466Z"
          fill="#439A0E"
          fill-opacity="0.2"
        />
      </g>
    </svg>

    <h2 class="accordion__title">
      {{ content.title }}
    </h2>
    <div
      class="accordion__items"
      v-for="item in content.accordionItems"
      :key="item._id"
    >
      <div @click="readMore" class="accordion__items-content">
        <h2 class="accordion__items-title">{{ item.title }}</h2>
        <div class="accordion__items-icon-wrapper">
          <div class="accordion__items-icon">
            <img
              loading="lazy"
              class="accordion__items-icon-image"
              :src="item.icon._url"
            />
          </div>
        </div>
      </div>
      <div class="accordion__items-description-wrapper">
        <div
          class="accordion__items-description"
          v-html="item.description"
        ></div>
      </div>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
.accordion {
  overflow: hidden;
  background-color: #f6fbf4;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 45px 45px 160px;
  position: relative;

  @media (--viewport-md-min) {
    padding: 45px 45px 250px;
  }
  &__title {
    font-size: 20px;
    color: #285c08;
    text-align: center;
    line-height: 24px;

    line-height: 25px;
    padding-bottom: 30px;

    @media (--viewport-md-min) {
      font-size: 37px;
      line-height: 50px;
    }
  }

  &__items {
    display: block;
    border: 1px solid #dce6e6;
    filter: drop-shadow(0px 15px 30px rgba(64, 64, 64, 0.15));
    background-color: #f6fbf4;
    margin-top: 18px;
    border: 2px solid rgba(16, 67, 6, 0.6);
    box-sizing: border-box;
    border-radius: 10px;

    @media (--viewport-md-min) {
      width: 100%;
      max-width: 850px;
      height: auto;
    }
  }

  &__items-content {
    border: none;
    background-color: transparent;
    display: flex;
    padding: 15px;
    cursor: pointer;
    align-items: center;
  }

  &__items-title {
    font-size: 16px;
    color: #285c08;
    pointer-events: none;
    line-height: 24px;
    margin: 0;

    @media (--viewport-md-min) {
      font-size: 23px;
      line-height: 34px;
    }
  }

  &__items-icon-wrapper {
    margin-left: auto;
    transform: rotate(-180deg);
    transition: 0.3s ease-out;
    pointer-events: none;
    flex-shrink: 0;
  }

  &__items-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    height: 40px;
    width: 40px;
    background-color: #d2e8c6;
    overflow: hidden;
    flex-shrink: 0;
    box-shadow: 2px 2px 10px 2px rgba(40, 92, 8, 0.2);

    @media (--viewport-md-min) {
      height: 60px;
      width: 60px;
    }
  }

  &__items-description-wrapper {
    overflow: hidden;
    transition: max-height 0.4s ease-out;
    max-height: 0;
  }

  &__items-description {
    font-size: 13px;
    color: #517c37;
    padding: 15px;
    line-height: 20px;

    @media (--viewport-md-min) {
      line-height: 20px;
      font-size: 18px;
    }
  }

  &__items-icon-image {
    width: 24px;
    height: 24px;
  }
}

.accordion--expand .accordion__items-icon-wrapper {
  transform: rotate(0deg);
}
</style>
