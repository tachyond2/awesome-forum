<template>
  <h1>{{category.name}}</h1>
  <forum-list
    :forums="getForumsForCategory(category)"
    :category-id="category.id"
  />
</template>

<script>
import ForumList from '@/components/ForumList.vue'
export default {
  components: {
    ForumList
  },
  props: {
    id: {
      type: String,
      requried: true
    }
  },
  computed: {
    category() {
      return this.$store.state.categories.find(c => c.id === this.id)
    }
  },
  methods: {
    getForumsForCategory(category) {
      return this.$store.state.forums.filter(f => f.categoryId === category.id)
    }
  }

}
</script>
<style lang="scss" scoped>

</style>
