<template>
  <div class="socials">
    <a
      :href="`https://instagram.com/${links.instagram}`"
      target="_blank"
      :title="links.instagram"
      class="nav-link"
      ><i class="fab fa-instagram"></i
    ></a>
    <a
      :href="`https://twitter.com/${links.twitter}`"
      target="_blank"
      :title="links.twitter"
      class="nav-link"
      ><i class="fab fa-twitter-square"></i
    ></a>

    <a :href="`https://snapchat.com/add/${links.snapchat}`"  target="_blank"
      :title="`Add ${links.snapchat} on snapchat`" class="nav-link">
      <i class="fab fa-snapchat-square"></i>
    </a>
    <a
      :href="`mailto:${links.email}`"
      target="_blank"
      :title="`Send an email to ${links.email}`"
      class="nav-link"
      ><i class="fas fa-envelope-square"></i
    ></a>
  </div>
</template>

<script>
export default {
  name: "Social",
  props: ["links"],
};
</script>

<style lang="scss">
@import "@/assets/variables.scss";

.socials {
  display: flex;
  justify-content: space-evenly;
  .nav-link {
    font-size: 24px;
    color: $iconLinks;

    &:hover {
      color: $hoverLinks;
    }
  }

  @include md-min {
    flex-direction: column;
    position: fixed;
    top: 50%;
    right: 2%;

    .nav-link {
      margin-bottom: 1rem;
      font-size: 35px;
    }
  }
}
</style>
