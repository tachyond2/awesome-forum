<template>
  <div class="col-large push-top" >
    <!-- <ul class="breadcrumbs">
      <li>
        <a href="#"><i class="fa fa-home fa-btn"></i>Home</a>
      </li>
      <li><a href="category.html">Discussions</a></li>
      <li class="active"><a href="#">Cooking</a></li>
    </ul> -->
    <h1>{{ thread.title }}</h1>

    <!-- <p>
      By <a href="#" class="link-unstyled">Robin</a>, 2 hours ago.
      <span
        style="float: right; margin-top: 2px"
        class="hide-mobile text-faded text-small"
        >3 replies by 3 contributors</span
      >
    </p> -->
    <post-list :posts="threadPosts"/>
    <div class="col-full">
      <form @submit.prevent="addPost">
        <div class="form-group">
          <!-- <textarea :value="newPost" v-on:input="newPost = $event.target.value" id="" cols="30" rows="10"></textarea> -->
          <textarea v-model="newPostText"/>
        </div>
        <div class="form-actions">
          <button></button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import PostList from '@/components/PostList.vue'
import sourceData from '@/data.json'
export default {
  components: {
    PostList
  },
  props: {
    id: {
      required: true,
      type: String
    }
  },
  data() {
    return {
      threads: sourceData.threads,
      posts: sourceData.posts,
      newPostText: ''
    }
  },
  computed: {
    thread() {
      return this.threads.find(thread => thread.id === this.id)
    },
    threadPosts() {
      return this.posts.filter(p => p.threadId === this.id)
    }
  },
  methods: {
    addPost() {
      const newPostId = crypto.randomUUID()
      const newPost = {
        text: this.newPostText,
        id: newPostId,
        publishedAt: Math.floor(new Date() / 1000),
        threadId: this.id,
        userId: '38St7Q8Zi2N1SPa5ahzssq9kbyp1'
      }

      this.posts.push(newPost)
      this.threads.posts.push(newPostId)
      this.newPostText = ''
    }
  }
}
</script>
