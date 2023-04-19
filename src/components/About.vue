<template>
  <div class="About">
    <div class="container">
      <div class="alert alert-info" role="alert">
        <h1>{{ msg }}</h1>
        <center>
          <br />
          <h2>What is it?</h2>
          <h6>
            An about us page's main goal is to educate the reader about the
            business and its processes. This is a clear objective that almost
            all organizations must achieve in one way or another. However, there
            are further factors at play in the prevalence of about us pages on
            commercial websites. <br /><br />The language on these pages serves
            as a marketing tool for a company, luring potential customers with
            information about the company's history and goals while also
            introducing a human factor. Additionally, in order to locate
            potential clients through Web searches, about us sites are
            integrated into search engine marketing campaigns.
          </h6>

          <br /><br />
          <h3>Reference:</h3>
          <p>
            What is an about us page? (n.d.). BigCommerce.
            https://www.bigcommerce.com/ecommerce-answers/what-about-us-page/
          </p>
        </center>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      msg: 'This is the ABOUT Page',
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
