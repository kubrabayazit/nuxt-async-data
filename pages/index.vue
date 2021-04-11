<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        nuxt
      </h1>
      <div class="links">
        <nuxt-link
          v-for="post in posts"
          :to="{name: 'posts-id', params: {id: post.id}}"
          :key="post.id"
          class="button--grey"
        >
          {{post.title}}
        </nuxt-link>

      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {

head () {
    return {
      title: 'Home Page 🍕',
      meta: [
        { name: 'twitter:title', content: 'Nuxt Meta Tag'},
        { name: 'twitter:description', content: 'Nuxt + Vue School = 🍕'},
        { name: 'twitter:image', content: 'https://i.imgur.com/UYP2umJ.png'},
        { name: 'twitter:card', content: 'summary_large_image'}
      ]
    }
  },

 /*  data(){
    return{
      posts: []
    }
  }, */

/*
 async asyncData ({$axios}) {
    let posts = await $axios.$get('/posts')
    return {posts}
  } */


  /* mounted () {

    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
          this.posts = response.data
    })
  }
} */

  async fetch ({store}) {
    // dispatch action fetchAllPosts
    await store.dispatch('posts/fetchAllPosts')
  },
  computed: {
    posts () {
      return this.$store.state.posts.all
    }

  }

}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
