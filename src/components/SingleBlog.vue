<template>
  <div id="singleBlog">
    <h3>{{blog.title}}</h3>
    <article>{{blog.body}}</article>
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
</style>
