<template>
  <el-radio-group
    v-bind="$attrs"
    v-on="$listeners"
    @change="(val) => $emit('input', val)"
  >
    <el-radio
      v-for="(item, index) in enumOptions"
      :key="index"
      :label="item.value"
    >
      {{ item.label }}
    </el-radio>
  </el-radio-group>
</template>

<script>
export default {
  name: "RadioWidget",
  props: {
    enumOptions: {
      default: () => [],
      type: [Array],
    },
  },
};
</script>
