<template>
 <forum-list
  v-for="category in categories"
  :key="category.id"
  :forums="getForumsForCategory(category)"
  :category-name="category.name"
  />
</template>

<script>
import sourceDate from '@/data.json'
import ForumList from '@/components/ForumList.vue'
export default {
  components: {
    ForumList
  },
  props: {
    categories: {
      required: true,
      type: Array
    }
  },
  methods: {
    getForumsForCategory(category) {
      return sourceDate.forums.filter(f => f.categoryId === category.id)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
