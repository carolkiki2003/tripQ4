<script>
  import FontButton from '@/components/FontButton'
  export default {
    name: 'LineShare',
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
        // https://org-media.line.me/zh_TW/how_to_install#lineitbutton
        let url = this.shareUrl || window.location.href
        let ogTitle = document.querySelector('meta[property="og:title"]').content
        let lineShareUrl = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(url)}&text=${ogTitle}`

        window.open(
          lineShareUrl,
          '_lineShare',
          'toolbar=yes,location=yes,directories=no,status=no, menubar=yes,scrollbars=yes,resizable=no, copyhistory=yes,width=500,height=500'
        )
      }
    }
  }
</script>

<template src="./template.html" />
<style lang="scss" src="./style.scss" scoped />