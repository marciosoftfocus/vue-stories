<template>
  <q-list>
    <q-item-label header>Dedo Duro</q-item-label>
    <q-item clickable v-for="menu in menuDataSource" :key="menu.key" @click="eventQueue(menu.key)" :active="menu.key === selectedMenu">
      <q-item-section avatar>
        <q-icon :name="menu.icon"/>
      </q-item-section>
      <q-item-section>
        <q-item-label>{{menu.title}}</q-item-label>
        <q-item-label caption>{{menu.description}}</q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
export default {
  name: "Menu",
  props: {
    menuDataSource : {
      type: Array,
      required: false,
      default: new Array(),
    },
    selectedMenu: String
  }
}
</script>

<style scoped>

</style>