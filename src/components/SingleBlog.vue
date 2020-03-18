<template>
  <div id="singleBlog">
    <h3>{{blog.title}}</h3>
    <article>{{blog.body}}</article>
    <router-link :to="'/edit/'+id" class="edit">Edit</router-link>
    <button @click="deleteBlog">Delete</button>
  </div>
</template>

<script>
export default {
  name: 'singleBlog',
  data () {
    return {
      id: this.$route.params.id,
      blog: {}
    }
  },
  created () {
    this.$http.get('http://jsonplaceholder.typicode.com/posts/' + this.id).then((data) => {
      console.log(data)
      this.blog = data.body
    })
  },
  methods: {
    // 删除blog
    deleteBlog () {
      this.$http.delete('').then((data) => {
        this.$router.push({path: '/'}) // 跳转到显示页面
      })
    }
  }
}
</script>

<style scoped>
#singleBlog{
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
  background-color: #eee;
}
.edit,button{
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: transparent;
  display: inline-block;
  padding: 5px;
  margin: 10px 7px;
  text-decoration: none;
  color: #444;
  font-size: 14px;
}
</style>
