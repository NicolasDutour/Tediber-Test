<template>
  <v-container fluid class="hero-container">
    <v-layout column justify-center primary class="layout">
      <v-flex md4 class="hero">
        <p class="text-uppercase font-weight-regular head-title">ce que l'on dit de nous</p>
      </v-flex>
      <v-flex justify-center md4 class="hero">
        <v-flex md-4>
          <v-layout justify-center>
            <p class="divider"></p>
          </v-layout>
        </v-flex>
      </v-flex>
      <v-flex md4 class="hero">
        <p class="text-uppercase font-weight-regular sub-title-1">découvrez les incroyables articles</p>
      </v-flex>
      <v-flex md4 class="hero">
        <p
          class="text-uppercase font-weight-regular sub-title-2"
        >et publications qui parlent de tediber.</p>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex>
        <Carousel title="presse écrite" :slides="dataPresseEcrite" actionButton="lire la suite"/>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex>
        <Carousel title="contenu web" :slides="dataContenuWeb" actionButton="découvrir"/>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex>
        <Carousel title="télévision" :slides="dataTelevision" actionButton="visionner"/>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex>
        <Carousel title="radio" :slides="dataRadio" actionButton="écouter"/>
      </v-flex>
    </v-layout>

    <Contact/>
  </v-container>
</template>

<script>
import datas from '@/assets/press.json';
import Carousel from '@/components/carousel/Carousel';
import Contact from '@/components/Contact';

export default {
    components: {
        Carousel,
        Contact
    },

    computed: {
        dataPresseEcrite() {
            return datas.press.filter(
                data => data.type === 'Journal' || data.type === 'Magazine'
            );
        },

        dataContenuWeb() {
            return datas.press.filter(
                data => data.type === 'Blog' || data.type === 'Site internet'
            );
        },

        dataTelevision() {
            return datas.press.filter(data => data.type === 'Télévision');
        },

        dataRadio() {
            return datas.press.filter(data => data.type === 'Radio');
        }
    }
};
</script>

<style lang="scss" scoped>
.hero-container {
    padding: 0;

    .layout {
        .hero {
            color: white;
            padding: 0;
            text-align: center;

            .divider {
                color: var(--v-secondary-base);
                width: 100px;
                border: 2px solid var(--v-secondary-base);
            }

            .head-title {
                transform: scaleY(3);
                letter-spacing: 6px;
                font-size: 1.5rem;
                margin: 40px 0 20px 0;
            }

            .sub-title-1,
            .sub-title-2 {
                font-size: 1.5rem;
                margin: 0;
            }

            .sub-title-1 {
                margin-top: 10px;
            }
            .sub-title-2 {
                margin-bottom: 40px;
            }
        }
    }
}
</style>

