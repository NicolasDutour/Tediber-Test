<template>
  <v-card class="card">
    <v-layout class="headline" justify-space-between align-center>
      <v-flex class="date">{{ date }}</v-flex>
      <v-flex class="type">{{ type | toUppercase }}</v-flex>
    </v-layout>
    <p class="triangle"></p>
    <p class="logo">{{ logo | toUppercase }}</p>
    <p class="name">{{ name | toUppercase }}</p>
    <p class="title">{{ title }}</p>
    <p class="body">{{ body }}</p>
    <v-btn class="button" large color="secondary">{{actionButton}}</v-btn>
  </v-card>
</template>

<script>
export default {
    name: 'slide',
    props: {
        name: String,
        logo: String,
        type: String,
        date: String,
        title: String,
        body: String,
        urm: String,
        actionButton: String
    },
    filters: {
        toUppercase(value) {
            return value.toUpperCase();
        }
    }
};
</script>

<style lang="scss" scoped>
.card {
    color: var(--v-primary-base);
    padding: 20px;
    width: 335px;
    height: 500px;

    .headline,
    .logo,
    .name,
    .title,
    .name,
    .body {
        margin-bottom: 20px;
        font-weight: bold;
    }

    .headline {
        margin: 0;

        .type {
            background-color: var(--v-primary-base);
            color: white;
            margin-right: -38px;
            padding: 10px;
        }
        .date {
            font-size: 1.5rem;
        }
    }

    .body {
        font-weight: 400;

        .button {
            margin-top: auto;
            font-size: 2rem;
            font-weight: 300;
        }
    }

    .triangle {
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 18px 18px 0 0;
        border-color: var(--v-primary-base) transparent transparent transparent;

        margin-left: auto;
        margin-right: -38px;
    }
}
</style>