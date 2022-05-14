<template>
  <a-input
    v-bind="$attrs"
    v-on="$listener"
    @change="$emit('input', $event.target.value)"
  ></a-input>
</template>