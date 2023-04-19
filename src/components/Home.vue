<template>
  <div class="Home">
    <div class="container">
      <div class="alert alert-primary" role="alert">
        <h1>{{ msg }}</h1>
        <center>
          <br />
          <h2>What is it?</h2>
          <h6>
            The root directory of the website contains the home pages. Many home
            pages serve as a site's virtual directory by offering top-level
            menus that allow visitors to delve deeper into other sections of the
            website. An ordinary website might have menu options like "about,"
            "contact," "products," "services," "press," or "news" on the
            homepage.

            <br /><br />Additionally, the home page frequently serves to orient
            visitors by giving titles, headlines, photos, and other visuals that
            explain the purpose of the website and, in certain situations, who
            is responsible for its upkeep.<br /><br />
          </h6>

          <h3>Reference:</h3>
          <p>
            Techopedia. (2022, September 2). What is a Home Page? - Definition
            from Techopedia.
            https://www.techopedia.com/definition/5172/home-page#:~:text=2%20September%2C%202022-,What%20Does%20Home%20Page%20Mean%3F,of%20directing%20the%20user%20experience.
          </p>
        </center>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      msg: 'This is the HOME Page',
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
