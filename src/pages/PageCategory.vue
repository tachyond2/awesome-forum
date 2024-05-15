<template>
  <h1>{{category.name}}</h1>
  <forum-list
    :forums="getForumsForCategory(category)"
    :category-id="category.id"
  />
</template>

<script>
import sourceData from '@/data.json'
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
      return sourceData.categories.find(c => c.id === this.id)
    }
  },
  methods: {
    getForumsForCategory(category) {
      return sourceData.forums.filter(f => f.categoryId === category.id)
    }
  }

}
</script>
<style lang="scss" scoped>

</style>
