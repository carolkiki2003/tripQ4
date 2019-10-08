<script>
  import FacebookShare from './FacebookShare'
  import LineShare from './LineShare'
  export default {
    name: 'SocialMedia',
    components: {
      FacebookShare,
      LineShare
    },
    props: {
      type: {
        type: String,
        required: true
      }
    },
    computed: {
      componentType() {
        const map = new Map([['line', 'LineShare'], ['facebook', 'FacebookShare']])
        return map.get(this.type)
      }
    }
  }
</script>

<template src="./template.html" />
<style lang="scss" src="./style.scss" scoped />