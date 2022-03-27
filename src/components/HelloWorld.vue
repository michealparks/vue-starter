<script setup lang='ts'>

import { ref } from 'vue'
import { useMachine } from '@xstate/vue'
import { toggleMachine } from '../machines/toggle'

defineProps<{ msg: string }>()

const emit = defineEmits<{
  (e: 'increment', id: number): void
  (e: 'toggle', value: string): void
}>()

const count = ref(0)

const { state, send } = useMachine(toggleMachine)

const toggle = () => {
  send('TOGGLE')
  emit('toggle', String(state.value))
}

const increment = () => {
  count.value += 1
  emit('increment', count.value)
}

</script>

<template>
  <h1>{{ msg }}</h1>

  <button type='button' @click="increment">count is: {{ count }}</button>
  <button type='button' @click="toggle">{{ state.value }}</button>

  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
