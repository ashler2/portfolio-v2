<template>
  <a class="navbar-logo" href="#" style="transition-delay: 250ms;">
    <span class="navbar-logo__outer navbar-logo__outer--left">{</span>
    <span class="navbar-logo__inner">{{ currentPhrase }}</span>
    <span class="navbar-logo__outer navbar-logo__outer--right">}</span>
  </a>
</template>

<script setup>
import {ref, computed} from "vue";



const phrase = 'Ashley Readman-Thorley'

const middle = phrase.length / 2
let currentPhraseIndex = middle
let previousPhraseIndex = middle
const currentPhrase = ref('')

function loop() {
  // Handles the middle letter
  if (currentPhraseIndex === middle) {
    currentPhrase.value = phrase[currentPhraseIndex]
    currentPhraseIndex++
    previousPhraseIndex--
    return
  }

  let suffix = phrase[currentPhraseIndex]
  let prefix = phrase[previousPhraseIndex]
  currentPhrase.value = [prefix, currentPhrase.value, suffix].join('')
  currentPhraseIndex++
  previousPhraseIndex--

  if (currentPhraseIndex > phrase.length) {
    clearInterval(interval)
  }
}

let interval = setInterval(loop, 200)

</script>