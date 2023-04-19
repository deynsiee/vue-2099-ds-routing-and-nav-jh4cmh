<template>
  <div class="Contact">
    <div class="container">
      <div class="alert alert-success" role="alert">
        <h1>{{ msg }}</h1>
        <center>
          <br />
          <h2>What is it?</h2>
          <h6>
            Visitors to your website can easily get in touch with you through a
            contact form. You can connect with your audience, get contact
            information from potential customers, or start lead generation with
            a form. A contact page is a typical site page on a site for guests
            to contact the association or individual giving the site. One or
            more of the following items can be found on the page: a contact
            phone number, and a postal address, often with a map showing where
            it is located.
          </h6>
          <br /><br />
          <h3>Reference:</h3>
          <p>
            Copple, K., and Copple, K. (2022). 8 Reasons Why You Need a Contact
            Form on Your Website Now. Formidable Forms - the Most Advanced
            WordPress Forms Plugin and Form Builder.
            https://formidableforms.com/benefits-to-having-a-contact-form/#:~:text=A%20contact%20form%20is%20a,simply%20connect%20with%20your%20audience.
          </p>
        </center>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      msg: 'This is the CONTACT Page',
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
