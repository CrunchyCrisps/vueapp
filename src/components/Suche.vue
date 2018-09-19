<template>
  <div>
    <h1>{{ az }}</h1>
    <nav>
      <router-link :to="{ name: 'Bearbeiten', params: {az: 'ABC-123'}}">LOL</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Suche',
  data () {
    return {
      az: 'nmob'
    }
  },
  props: ['az', 'edv']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
