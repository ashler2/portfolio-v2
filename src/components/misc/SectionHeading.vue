<template>
  <div class="section-heading">
    <h2 class="section-heading-title mb-0">
      <span class="section-heading-title__number">{{ number }}.</span>
      <span class="section-heading-title__title">{{ title }}</span>
    </h2>
    <hr>
  </div>
</template>

<script>
export default {
  name: "SectionHeading",
  props: {
    number: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    }
  }
}
</script>

<style scoped>

</style>