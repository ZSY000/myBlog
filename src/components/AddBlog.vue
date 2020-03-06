<template>
  <div class="addBlog">
    <h2>Add Blog</h2>
    <form action="" v-if="!submitted">
      <label>Blog title:</label>
      <input type="text" v-model="blog.title" required><br>
      <label>Blog content:</label>
      <textarea v-model="blog.content" required></textarea><br>
      <label>Blog category:</label>
      <div id="checks">
        <label>Vue.js</label>
        <input type="checkbox" value="vue" v-model="blog.categories"/>
        <label>Node.js</label>
        <input type="checkbox" value="node" v-model="blog.categories"/>
        <label>React.js</label>
        <input type="checkbox" value="react" v-model="blog.categories"/>
        <label>Argular.js</label>
        <input type="checkbox" value="argular" v-model="blog.categories"/>
      </div>
      <label>Author:</label>
      <select v-model="blog.author">
        <option v-for="auth in authors" :key="auth">{{auth}}</option>
      </select>
    </form>
    <button @click.prevent="postData">Add</button>

    <p v-if="submitted">Added successfully!</p>

    <label>Blog Preview</label>
    <p>Title:{{blog.title}}</p>
    <p>Content:{{blog.content}}</p>
    <p>Category:</p>
    <ul>
      <li v-for="category in blog.categories" :key="category">
        {{category}}
      </li>
    </ul>
    <p>Author:{{blog.author}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      blog: {
        title: '',
        content: '',
        categories: [],
        author: ''
      },
      authors: ['Lucky', 'Solin', 'Sherry'],
      submitted: false
    }
  },
  methods: {
    postData () {
      this.$http.post('http://jsonplaceholder.typicode.com/posts', {
        title: this.blog.title,
        body: this.blog.content,
        userId: 1
      }).then(function (data) {
        console.log(data)
        this.submitted = true
      })
    }
  }
}
</script>

<style scoped>

</style>
