<template>
  <div class="hello">
    <b-list-group>
      <b-list-group-item v-for="group in myGroups" :key="group.id">{{group.name}}</b-list-group-item>
    </b-list-group>
  </div>
    
</template>

<script>
import {getMyGroups} from '@/backend.js'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      myGroups: []
    }
  },
  async created() {
    this.myGroups = await getMyGroups();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
