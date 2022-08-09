<template>
  <div>
    <div>
      <div>
        我是page1
      </div>

      <router-link to="/page1/">home</router-link>&nbsp;
      <router-link to="/page1/fav">fav</router-link>&nbsp;
      <router-link to="/page1/config">config</router-link>
    </div>
    <router-view></router-view>
  </div>

</template>
<script lang="ts">
export default {

}
</script>
