<template>
  <div class="info-holder">
    <div v-if="infoLoading">
      <img
        src="@/assets/loader/load-info.svg"
        alt="loading profile information"
      />
      <h3 v-if="!errorMessage">
        Loading Profile Information... Please wait
      </h3>
      <h3 v-if="errorMessage">{{ errorMessage }}</h3>
      <a v-if="errorMessage" href="index.html">Reload?</a>
    </div>

    <div v-else class="main-info">
      <h1 class="info-name">{{ loadStateInfo.name }}</h1>
      <img
        src="@/assets/images/body-image-glitchy.png"
        alt="body image"
        class="body-image"
      />
      <Nav />
      <Social :links="loadStateInfo.social_media" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Nav from "./Nav";
import Social from "./Social";

export default {
  name: "Main",
  data() {
    return {
      infoLoading: false,
      errorMessage: "",
    };
  },
  components: {
    Nav,
    Social,
  },
  computed: {
    ...mapGetters({ loadStateInfo: "getStoreInfo" }),
  },
  methods: {
    ...mapActions({
      getInfo: "GET_INFO",
    }),
    handleError(err) {
      err.message == "Network Error"
        ? (this.errorMessage = err.message)
        : (this.errorMessage = err.response.data.errors[0]);
    },
  },
  async mounted() {
    this.infoLoading = true;
    await this.getInfo().then(
      () => {
        this.infoLoading = false;
      },
      (err) => {
        this.handleError(err);
      }
    );
  },
};
</script>

<style lang="scss">
@import "@/assets/variables.scss";

.info-holder {
  .main-info {
    text-align: center;
    width: 100vw;

    .info-name {
         font-size: 2.5rem;
    font-weight: normal;
    margin: 2rem 0;
    letter-spacing: 10px;
    }
    .body-image {
      width: 90%;
      margin: auto;
      box-shadow: -7px 6px 15px 5px $shadow;
      @include md-min {
        width: auto;
      }
    }
  }
}
</style>
