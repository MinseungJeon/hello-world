<template>
  <div class="container">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
      <h1>Built-in Directive</h1>
      <p v-text="'Some Text'"></p>
      <p v-html="'<strong>Some strong text</strong>'"></p>
    </div>
    <hr />
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
      <h1>Custom Directives</h1>
      <p v-highlight:background="'red'">Color this</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
