<template>
  <div class="Blog">
    <div class="container">
      <div class="alert alert-dark" role="alert">
        <h1>{{ msg }}</h1>
        <center>
          <br />
          <h2>What is it?</h2>
          <h6>
            A blog, often known as a weblog, is a frequently updated online page
            that is used for commercial or personal comments. An area where
            readers can leave comments is usually included at the bottom of each
            blog article because blogs are frequently interactive.

            <br /><br />Most blogs are written in a conversational tone to show
            the author's personality and viewpoints. Some companies utilize
            blogs to reach out to their target markets and sell products.

            <br /><br />Weblogs, which were webpages with a series of entries
            arranged in reverse chronological order so that the most recent
            posts were at the top, were the precursor to the term "blog." They
            were often updated with fresh data on many subjects.<br /><br />
          </h6>
        </center>
        <br /><br />
        <h3>Reference:</h3>
        <p>
          Barney, N. (2022). weblog. WhatIs.com.
          https://www.techtarget.com/whatis/definition/weblog#
          <br />:~:text=A%20blog%2C%20short%20for%20weblog,where%20readers%20can%20leave%20comments.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Blog',
  data() {
    return {
      msg: 'This is the BLOG Page',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
