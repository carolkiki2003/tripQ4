<script>
  import SocialMedia from '../SocialMedia'
  import FontButton from '@/components/FontButton'
  export default {
    name: 'SocialMediaGroup',
    components: {
      SocialMedia,
      FontButton
    },
    data: () => ({
      isOpen: false,
      socialMedia: ['line', 'facebook']
    }),
    methods: {
      mailHandler() {
        window.open('mailto:star@104.com.tw', '_self')
      }
    }
  }
</script>

<template src="./template.html" />
<style lang="scss" src="./style.scss" scoped />