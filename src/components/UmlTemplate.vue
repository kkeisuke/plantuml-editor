<template>
  <ul class="nav navbar-nav">
    <li class="dropdown">
      <a class="dropdown-toggle" data-toggle="dropdown" role="button">
        template <b class="caret"></b>
      </a>
      <ul class="dropdown-menu">
        <li class="dropdown-header">behavioral diagrams</li>
        <li><a @click="selectTemplate('useCase')">Use Case</a></li>
        <li><a @click="selectTemplate('ActivityB')">Activity &#946</a></li>
        <li><a @click="selectTemplate('Activity')">Activity</a></li>
        <li><a @click="selectTemplate('Sequence')">Sequence</a></li>
        <li class="divider"></li>
        <li class="dropdown-header">structural diagrams</li>
        <li><a @click="selectTemplate('Object')">Object</a></li>
        <li><a @click="selectTemplate('Class')">Class</a></li>
      </ul>
    </li>
  </ul>
</template>

<script>
/* @flow */

  export default {
    name: 'umlTemplate',
    props: [],
    mounted () {
    },
    data (): any {
      return {
        selectMessage: 'Do you want to select a template?'
      }
    },
    methods: {
      selectTemplate (prop: string, event: any) {
        if (window.confirm(this.selectMessage)) {
          this.$store.dispatch('selectTemplate', prop)
        }
      }
    },
    computed: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dropdown-menu>li>a {
  cursor: pointer;
}
</style>
