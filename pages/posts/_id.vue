<template>
  <div class="container">
    <article>
      <h1 class="title">Kubra</h1>
     <p>{{post.content}}</p>
    </article>
     <aside>
      <h3>Posts</h3>
      <ul>
        <li v-for="related in relatedPosts">
          <nuxt-link :to="{name: 'posts-id', params: {id: related.id}}">
            {{related.title}}
          </nuxt-link>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script>
import axios from 'axios'
  export default {
    head () {
      return {
        title: this.post.title,
        meta: [
          { name: 'twitter:title', content: this.post.title},
          { name: 'twitter:description', content: this.post.content},
          { name: 'twitter:image', content: 'https://i.imgur.com/UYP2umJ.png'},
          { name: 'twitter:card', content: 'summary_large_image'}
        ]
      }
    },
    data () {
      return {
        id: this.$route.params.id,
       // post: {}

      }
    },

  /*   mounted () {
    //fetch(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
    axios.get(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
      .then(response => {
        //response.json().then(post => {
         // this.post = post
         this.post = response.data

    })
    }
  }
 */


/* async asyncData ({params, $axios}) {
      let post = await $axios.$get(`posts/${params.id}`)
      return {post}
    }
  } */

async fetch ({store, params}) {
      await store.dispatch('posts/fetchPost', params.id)
    },
    computed: {
      post () {
        return this.$store.state.posts.all.find(post => post.id === Number(this.id))
      }
    }
  }

</script>

<style scoped>
  .container {
    display: flex;
    justify-content: space-between;
    line-height: 1.5;
  }
  article * {
    margin-bottom: 1rem;
  }
  aside {
    min-width: 280px;
    max-width: 280px;
    padding-left: 2rem;
  }
  .title {
    font-size: 2rem;
  }
</style>
