<template>
  <div id="showBlogs">
    <h2>Blog List</h2>
    <input type="search" v-model="keyword" placeholder="search...">
    <p v-if="filteredBlogs.length == 0">No matches found !</p>
    <div class="singleBlog" v-for="blog in filteredBlogs" :key="blog.id">
      <h3>{{blog.title | toUpper}}</h3>
      <article>{{blog.body | maxContent}}</article>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      blogs: [],
      keyword: ''
    }
  },
  methods: {
  },
  created () {
    this.$http.get('http://jsonplaceholder.typicode.com/posts').then(function (data) {
      // console.log(data)
      this.blogs = data.body.slice(0, 10) // 展示前10条数据
    })
  },
  computed: {
    // 搜索过滤
    filteredBlogs () {
      return this.blogs.filter((blog) => {
        return blog.title.match(this.keyword)
      })
    }
  },
  filters: {
    // 控制内容的最大显示数量
    maxContent (val) {
      return val.length > 180 ? val.slice(0, 180) + '...' : val
    },
    toUpper (val) {
      return val.toUpperCase()
    }
  }
}
</script>

<style scoped>
#showBlogs{
  max-width: 800px;
  margin: 0 auto;
}
.singleBlog{
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background-color: #eee;
}
.singleBlog h3{
  margin-top: 0;
}
</style>
