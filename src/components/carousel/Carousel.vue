<template>
  <v-container fluid text-md-center>
    <TitleAndDivider :title="title"/>
    <v-layout row align-center class="carousel">
      <v-flex md1 class="prev">
        <v-btn large color="secondary" fab @click="prev">
          <v-icon class="icon" size="75">keyboard_arrow_left</v-icon>
        </v-btn>
      </v-flex>
      <v-flex class="slides-wrapper">
        <v-layout justify-center>
          <Slide
            color="white"
            class="slide"
            v-for="(slide, i) in showSlides()"
            :key="i"
            :date="slide.date"
            :type="slide.type"
            :logo="slide.logo"
            :name="slide.name"
            :title="slide.title"
            :body="slide.body"
            :actionButton="actionButton"
          />
        </v-layout>
      </v-flex>
      <v-flex md1 class="next">
        <v-btn large color="secondary" fab @click="next">
          <v-icon class="icon" size="75">keyboard_arrow_right</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>



<script>
import Slide from './Slide';
import TitleAndDivider from '@/components/TitleAndDivider';

export default {
    name: 'carousel',

    components: {
        Slide,
        TitleAndDivider
    },

    data() {
        return {
            firstSlideShownIndex: 0
        };
    },

    props: {
        title: String,
        actionButton: String,
        slides: {
            type: Array,
            default: () => []
        },
        numberOfSlidesShown: {
            type: Number,
            default: 3
        }
    },

    methods: {
        next() {
            if (this.firstSlideShownIndex < this.slides.length) {
                this.firstSlideShownIndex++;
            }
        },
        prev() {
            if (this.firstSlideShownIndex > 0) {
                this.firstSlideShownIndex--;
            }
        },

        showSlides() {
            const res = this.slides.slice(
                this.firstSlideShownIndex,
                this.firstSlideShownIndex + this.numberOfSlidesShown
            );
            console.log('cocuou', res);
            return res;
        }
    }
};
</script>

<style lang="scss" scoped>
.carousel {
    .slides-wrapper {
        .slide {
            margin: 0 20px;
        }
    }

    .prev,
    .next {
        text-align: center;

        .icon {
            font-weight: 200;
        }
    }
}
</style>