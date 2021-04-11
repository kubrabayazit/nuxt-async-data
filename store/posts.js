export const state = () => ({
 /*  all: [
    {
      id: 'test',
      title: 'test',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
      id: 'test1',
      title: 'test1',
      content: 'Lorem Ipsum1'
    },
    {
      id: 'test2',
      title: 'test2',
      content: 'Lorem Ipsum2'
    }
  ]
})
 */

all: []
})

export const actions = {
  async fetchAllPosts ({commit}) {
    let posts = await this.$axios.$get('posts')
    commit('setPosts', posts)
  },

  async fetchPost ({commit}, id) {
    let post = await this.$axios.$get(`posts/${id}`)
    commit('setPost', post)
  }
}

export const mutations = {
  setPost (state, post) {
    state.all.push(post)
  },
  setPosts (state, posts) {
    state.all = posts
  }
}
