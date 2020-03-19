<template>
  <div id="addBlog">
    <h2>Add Blog</h2>
    <form action="" v-if="!submitted">
      <label>Title:</label>
      <input type="text" v-model="blog.title" required>
      <label>Content:</label>
      <textarea v-model="blog.content" required></textarea>
      <label>Category:</label>
      <div id="checks">
        <label>Vue.js</label>
        <input type="checkbox" value="vue" v-model="blog.categories"/>
        <label>Node.js</label>
        <input type="checkbox" value="node" v-model="blog.categories"/>
        <label>React.js</label>
        <input type="checkbox" value="react" v-model="blog.categories"/>
        <label>Angular.js</label>
        <input type="checkbox" value="angular" v-model="blog.categories"/>
      </div>
      <label>Author:</label>
      <select v-model="blog.author">
        <!-- 要绑定key -->
        <option v-for="auth in authors" :key="auth">{{auth}}</option>
      </select>
    </form>
    <button @click.prevent="postData" v-if="!submitted">Add</button>

    <p v-if="submitted">Added successfully!</p>

    <div id="preview">
      <h3>Blog Preview</h3>
      <p>Title: {{blog.title}}</p>
      <p>Content: {{blog.content}}</p>
      <p>Category: </p>
      <ul>
        <li v-for="category in blog.categories" :key="category">
          {{category}}
        </li>
      </ul>
      <p>Author: {{blog.author}}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
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
      axios.post('/posts', {
        title: this.blog.title,
        body: this.blog.content,
        userId: 1
      }).then((data) => {
        // console.log(data)
        this.submitted = true
        setTimeout(() => {
          this.$router.push({path: '/'})
        }, 3000)
      })
    }
  }
}
</script>

<style scoped>
#addBlog *{
  box-sizing: border-box;
}
#addBlog{
  margin: 20px auto;
  max-width: 600px;
  padding: 20px;
}
label{
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],textarea,select{
  display: block;
  width: 100%;
  padding: 8px;
  font-family: Arial, Helvetica, sans-serif;
}
textarea{
  height: 100px;
}
#checks label{
   display: inline-block;
   margin-top: 0;
}
#checks input{
   display: inline-block;
   margin-right: 10px;
}
button{
  display: block;
  margin: 20px 0;
  background-color: #444;
  color: #fff;
  border: none;
  padding: 8px 15px;
  border-radius: 4px;
}
#preview{
  padding: 10px 20px;
  border-top: 1px dashed #ddd;
  margin: 30px 0;
}
#preview h3{
  margin-top: 10px;
}
</style>
