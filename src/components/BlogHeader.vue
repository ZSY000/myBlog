<template>
  <nav>
    <ul>
      <li>
        <router-link to="/" exact>Show Blogs</router-link>
      </li>
      <li>
        <router-link to="/add" exact>New Blog</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'blogHeader'
}
</script>

<style scoped>
ul{
  list-style-type: none;
  text-align: center;
  margin: 0;
}
li{
  display: inline-block;
  margin: 0 10px;
}
a{
  color: #fff;
  text-decoration: none;
  padding: 12px;
  border-radius: 5px;
}
nav{
  background-color: #555;
  padding: 30px 0;
  margin-bottom: 40px;
}
.router-link-active{
  border: 1px solid #fff;
}
</style>
