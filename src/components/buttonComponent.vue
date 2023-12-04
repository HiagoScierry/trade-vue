<template>
  <button :class="color[type]" type="button">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'ButtonComponent',
  data() {
    return {
      color: {
        primary: 'bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded',
        success: 'bg-green-900 hover:bg-green-800 text-white font-bold py-2 px-4 rounded',
        danger: 'bg-red-900 hover:bg-red-800 text-white font-bold py-2 px-4 rounded'
      }
    }
  },
  props: {
    text: {
      type: String,
      default: 'Button'
    },
    type: {
      type: String,
      default: 'default'
    }
  }
}
</script>
