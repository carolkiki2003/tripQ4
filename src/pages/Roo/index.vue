<script>
  import { mapMutations } from 'vuex'
  import Header from '@/components/Header'
  import Footer from '@/components/Footer'
  import Content from '@/containers/Content'
  import CoverParents from '@/containers/CoverParents'
  import CoverStudent from '@/containers/CoverStudent'
  import CoverTeacher from '@/containers/CoverTeacher'
  import SocialMediaGroup from '@/components/SocialMediaGroup'
  export default {
    name: 'Root',
    metaInfo() {
      return {
        meta: [
          { property: 'og:title', content: this.ogTitle, vmid: 'og:title' },
          { property: 'og:description', content: this.ogDescription, vmid: 'og:description' },
          { property: 'og:image', content: this.ogImg, vmid: 'og:image' },
          { property: 'og:url', content: this.ogUrl, vmid: 'og:url' }
        ]
      }
    },
    components: {
      Header,
      Footer,
      Content,
      CoverParents,
      CoverStudent,
      CoverTeacher,
      SocialMediaGroup
    },
    data() {
      return {
        tripData: null
      }
    },
    computed: {
      routeName() {
        return this.$route.name || ''
      },
      ogTitle() {
        return this.tripData[this.routeName].ogTitle
      },
      ogDescription() {
        return this.tripData[this.routeName].ogDescription
      },
      ogImg() {
        return this.tripData[this.routeName].ogImg
      },
      ogUrl() {
        return this.tripData[this.routeName].ogUrl
      }
    },
    methods: {
      resizeHandler() {
        const width = document.body.clientWidth
        const height = document.body.clientHeight

        this.SET_WINDOW({
          width,
          height,
          orientation: width > height ? 'landscape' : 'portrait'
        })
      },
      scrollHandler() {
        const scrollTop = document.querySelector('body').scrollTop || document.querySelector('html').scrollTop
        const scrollLeft = document.querySelector('body').scrollLeft || document.querySelector('html').scrollLeft
        this.SET_SCROLL({
          scrollTop,
          scrollLeft
        })
      },
      deviceHandler() {
        let userAgent = navigator.userAgent
        if (/Android/i.test(userAgent) || /iPhone|iPad/i.test(userAgent)) {
          this.SET_AGENT(true)
        } else if (/Windows/i.test(userAgent) || /Mac/i.test(userAgent)) {
          this.SET_AGENT(false)
        }
      },
      ...mapMutations({
        SET_AGENT: 'userAgent/SET_AGENT',
        SET_WINDOW: 'userAgent/SET_WINDOW',
        SET_SCROLL: 'userAgent/SET_SCROLL'
      })
    },
    created() {
      this.tripData = require('../../../public/content.json')
    },
    async mounted() {
      try {
        window.addEventListener('resize', this.resizeHandler)
        window.addEventListener('scroll', this.scrollHandler)
        this.resizeHandler()
        this.scrollHandler()
        this.deviceHandler()
      } catch (err) {
        console.log('err in root mounted', err)
      }
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.resizeHandler)
      window.removeEventListener('scroll', this.scrollHandler)
    }
  }
</script>

<template src="./template.html" />
<style lang="scss" src="./style.scss" />
