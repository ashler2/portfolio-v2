<template>
  <section id="about">
    <div class="container">
      <div class="row">
        <div class="col-sm-6">
          <SectionHeading title="About Me" number="01"/>
          <p>
            Hello! My name is Ashley.
          </p>
          <p>
            I'm a self taught full stack develop based in the north of England.
            I've been a developer for {{ developerDays }} days.
            I am self-driven and hard working. I enjoy working in a fast pasted environment.
          </p>
          <p>Here are a few of the technologies I've worked with: </p>
          <div class="row" style="margin-top: -20px">
            <ListItem v-for="tech in technologies" :key="tech.label" :label="tech.label"/>
          </div>
          <div class="mt-20 flex justify-center">
            <a href="#" @click.prevent="toggleLoaded" class="text-button">{{ buttonText }}</a>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="image-container">

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import dayjs from "dayjs";
import technologies from '../../data/technologies.json'

import SectionHeading from "@/components/misc/SectionHeading.vue";
import ListItem from "@/components/misc/ListItem.vue";

export default {
  name: "About",
  components: {ListItem, SectionHeading},
  data() {
    return {
      loadMore: false,
    }
  },
  computed: {
    developerDays() {
      return dayjs().diff(dayjs('2019-04-18'), 'days')
    },
    technologies() {
      if (this.loadMore) {
        return technologies
      }
      return technologies.slice(0, 8)
    },
    buttonText() {
      return !this.loadMore ? 'Show More' : 'Hide'
    }
  },
  methods: {
    toggleLoaded() {
      this.loadMore = !this.loadMore
    }
  }
}
</script>

<style scoped>

</style>