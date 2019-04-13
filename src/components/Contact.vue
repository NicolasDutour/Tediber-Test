<template>
  <div class="contact">
    <v-container fluid>
      <TitleAndDivider title="contact presse"/>
      <v-layout column align-center>
        <v-flex class="text-uppercase contact-details">
          <h3>n'hésitez pas à contacter notre equipe presse :</h3>
        </v-flex>
        <v-flex class="contact-details email">
          <p>Elodie : elodie@pascalevenot.com</p>
          <p>Margot : margot@pascalevenot.com</p>
          <p>ou au 01.53.53.44.54</p>
        </v-flex>
        <v-flex class="contact-details last">
          <p>Nous vous partagerons les dernières actualités de Tediber et répondrons à toutes vos questions.</p>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import TitleAndDivider from './TitleAndDivider';

export default {
    name: 'contact',
    components: {
        TitleAndDivider
    }
};
</script>

<style lang="scss" scoped>
.contact {
    h2 {
        font-size: 2.8rem;
        font-weight: 400;
        transform: scaleY(2);
    }

    p {
        margin: 0;
        text-align: center;
    }

    .contact-details {
        margin-bottom: 30px;
    }

    .last,
    .email {
        width: 550px;
        font-size: 1rem;
    }
}
</style>