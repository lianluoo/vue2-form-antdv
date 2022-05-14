<template>
  <a-input-number
    v-bind="$attrs"
    v-on="$listeners"
    @change="(val) => $emit('input', val)"
  ></a-input-number>
</template>
