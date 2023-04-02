<template>
  <li class="nav-item">
    <a
        class="nav-link active"
        aria-current="page"
        :href="`#${link}`"
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
  }
}
</script>
