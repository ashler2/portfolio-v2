<template>
  <div class="col-sm-3 list-item">
    <span>{{ label }}</span>
  </div>
</template>

<script>
export default {
  name: "ListItem",
  props: {
    label: {
      type: String,
      required: true
    },
  },
}
</script>
