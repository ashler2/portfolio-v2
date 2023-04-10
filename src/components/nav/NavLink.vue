<template>
  <li class="nav-item">
    <a
        class="nav-link active"
        aria-current="page"
        :href="`#${link.toLowerCase()}`"
        @click="handleClick"
    >
      {{ link }}
    </a>
  </li>
</template>
<script>
export default {
  name: 'nav-link',
  props: {
    link: {
      type: String,
      required: true,
    }
  },
  methods: {
    handleClick(){
      this.$emit('nav-item-clicked')
    }
  }
}
</script>
