<script>
  import FontButton from '@/components/FontButton'
  export default {
    name: 'FacebookShare',
    props: {
      shareUrl: {
        type: String,
        default: ''
      }
    },
    components: {
      FontButton
    },
    methods: {
      shareHandler() {
        let url = this.shareUrl || window.location.href
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
        //Pop Window
        window.open(
          url,
          '_facebookShare',
          'toolbar=yes,location=yes,directories=no,status=no, menubar=yes,scrollbars=yes,resizable=no, copyhistory=yes,width=500,height=500'
        )
      }
    }
  }
</script>

<template src="./template.html" />
<style lang="scss" src="./style.scss" scoped />