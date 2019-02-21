<template>
  <section class="container">
    <div>
      <logo />
      <h1 class="title">
        Bigdata
      </h1>
      <h2 class="subtitle">
        大数据看板、数据可视化
      </h2>
      <div class="links">
        <nuxt-link to="/demo1" class="button--green">
          DEMO1
        </nuxt-link>

        <nuxt-link to="/demo2" class="button--grey">
          DEMO2
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
export default {
  components: {
    Logo
  },
  mounted() {},
  methods: {}
}
</script>
