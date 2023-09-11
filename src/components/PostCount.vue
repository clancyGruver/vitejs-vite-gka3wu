<template>
  <div>
    {{ postCount }}
  </div>
</template>

<script>
export default {
  props: {
    postCount: {
      type: Number,
      required: true,
    },
  },
};
</script>
