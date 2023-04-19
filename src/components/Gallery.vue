<template>
  <div class="Gallery">
    <div class="container">
      <div class="alert alert-dark" role="alert">
        <h1>{{ msg }}</h1>
        <center>
          <img src="../assets/nature.jpeg" width="1000px" />
          <br />
          <br />
          <h2>What is it?</h2>
          <h6>
            By showcasing visual material, the gallery theme enables you to
            raise website user engagement. Since interactive visual content
            boosts user engagement by 80% more than text-based information, 90%
            of people choose interactive visual content over text-based
            material.

            <br /><br />Because people are increasingly consuming more visual
            material, this theme was specifically created to capitalize on it.
            Every day, billions of users view and post billions of photographs
            and videos on various social networks.
          </h6>

          <br /><br />
          <h3>Reference:</h3>
          <p>
            Neeraj, and Neeraj. (2020). Introducing Gallery Theme For Website.
            Taggbox Blog.
            https://taggbox.com/blog/gallery-theme-for-website/#:~:text=The%20gallery%20theme%20allows%20you,'%20engagement%20desire%20by%2080%25.
          </p>
        </center>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  data() {
    return {
      msg: 'This is the GALLERY Page',
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
