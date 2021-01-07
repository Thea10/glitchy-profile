<template>
  <div class="nav">
    <a href="#" class="nav-link">HOME</a>
    <a href="#" class="nav-link">ABOUT</a>
    <img
      src="@/assets/images/profile-image-glitchy.png"
      alt="nav-img"
      class="nav-img "
    />

    <a href="#" class="nav-link">GALLERY</a>
    <a href="#" class="nav-link">CONTACT</a>
  </div>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style lang="scss">
@import "@/assets/variables.scss";

.nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 1rem auto;

  > * {
    margin: 1rem;
  }

  .nav-link {
    font-size: 18px;
    font-weight: 600;
    color: $textLinks;
    letter-spacing: 5px;

    &:hover {
      color: $hoverLinks;
    }
  }

  .nav-img {
    width: 100px;
    border-radius: 50%;
  }

  @include lg-min {
    flex-direction: row;
    > * {
      margin-left: 5.5rem;
    }
  }
}
</style>
