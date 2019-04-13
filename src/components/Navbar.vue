<template>
  <v-container fluid class="container white primary--text font-weight-regular" text-uppercase>
    <v-layout align-center>
      <v-flex md4>
        <v-layout align-center fill-height text-md-center>
          <v-flex>
            <router-link to="/">
              <img src="@/assets/logo_tediber.svg" alt="logo tediber" class="logo-tediber">
            </router-link>
          </v-flex>
          <v-flex class="item" v-for="item in itemsLeft" :key="item.text">
            <router-link :to="item.route" tag="span">{{ item.text }}</router-link>
          </v-flex>
        </v-layout>
      </v-flex>

      <v-flex md4>
        <v-layout align-center fill-height text-md-center>
          <v-flex>
            <router-link to="/">
              <img src="@/assets/logo_ours.svg" alt="logo ours" class="ours">
            </router-link>
          </v-flex>
        </v-layout>
      </v-flex>

      <v-flex md4>
        <v-layout align-center fill-height text-md-center>
          <v-flex class="item" v-for="item in itemsRight" :key="item.text">
            <router-link :to="item.route" tag="span">{{ item.text }}</router-link>
          </v-flex>
          <v-flex>01 86 95 47 10</v-flex>
          <v-flex>
            <router-link to="/cart">
              <img src="@/assets/cart.svg" alt="logo cart" class="logo-cart">
            </router-link>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
    data() {
        return {
            itemsLeft: [
                {
                    text: 'nos produits',
                    route: '/products'
                },
                {
                    text: 'le concept',
                    route: '/concept'
                },
                {
                    text: 'avis',
                    route: '/testimonials'
                }
            ],
            itemsRight: [
                {
                    text: 'pub tv',
                    route: '/pubtv'
                },
                {
                    text: 'blog',
                    route: '/blog'
                },
                {
                    text: 'mon compte',
                    route: '/myaccount'
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
.container {
    padding: 0;
    flex: 0;

    .logo-tediber {
        height: 60px;
    }

    .item {
        cursor: pointer;

        &:hover {
            color: var(--v-secondary-base);
        }
    }
}
</style>