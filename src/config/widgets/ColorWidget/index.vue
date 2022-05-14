<template>
    <a-input v-bind="$attrs" v-on="$listeners">
    <input slot="addonAfter" type="color" @input="$emit('input', $event.target.value)"  @change="$emit('update:value', $event.target.value)">
    </input>
  </a-input>
</template>