<template>
  <div class="tag-section">
    <span class="tag">Tags:</span><span class="tag" v-for="tag in tags">{{ tag }}</span>
  </div>
</template>

<script>
export default {
  name: "TagSection",
  props: {
    tags: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>