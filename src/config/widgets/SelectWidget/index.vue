<template>
  <a-select
    mode="default"
    v-bind="$attrs"
    v-on="$listeners"
    @change="(val) => $emit('input', val)"
  >
    <a-select-option
      v-for="(item, i) in enumOptions"
      :key="i"
      :value="item.value"
    >
      {{ item.label }}
    </a-select-option>
  </a-select>
</template>

<script>
export default {
  name: "SelectWidget",
  props: {
    enumOptions: {
      default: () => [],
      type: [Array],
    },
  },
};
</script>