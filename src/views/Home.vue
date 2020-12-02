<template>
<!-- eslint-disable max-len -->
  <div class="home">
    <b-jumbotron class="jumbotron mb-0" fluid>
      <template #header>
        Ready. Set. Brew.
      </template>
      <template #lead>
        Your personal deck building website for Magic: The Gathering®
      </template>
      <hr class="my-4">
      <p>
        Built by John Doolittle, powered by MongoDB, Express, Vue, Node, and the Scryfall API.
      </p>
    </b-jumbotron>
    <footer>
      <p id="legal">
        The art on the CardCache home page is of the card Black Lotus. It is illustrated by Chris Rahn and is property of Wizards of the Coast LLC.
        <br />
        <br />
        Wizards of the Coast, Magic: The Gathering, and their logos are trademarks of Wizards of the Coast LLC in the United States and other countries. © 1993-2020 Wizards. All Rights Reserved.
        <br />
        <br />
        CardCache is not affiliated with, endorsed, sponsored, or specifically approved by Wizards of the Coast LLC. CardCache may use the trademarks and other intellectual property of Wizards of the Coast LLC, which is permitted under Wizards' Fan Site Policy. MAGIC: THE GATHERING® is a trademark of Wizards of the Coast. For more information about Wizards of the Coast or any of Wizards' trademarks or other intellectual property, please visit their website at <a href="https://company.wizards.com/">https://company.wizards.com/</a>.
        <br />
        <br />
        Card prices and other card data are provided by Scryfall. Scryfall makes no guarantee about its price information and recommends you see stores for final prices and details.
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
};
</script>

<style>
footer {
  background-color: black;
  color: white;
}
.home {
  text-align: center;
  background-color: blue;
}
.jumbotron {
  background-image: url("https://media.magic.wizards.com/images/featured/EN_HistoryOfMagic_Header.jpg");
  background-size: cover;
  color: white;
}
#legal {
  font-size: small;
  margin-left: 20px;
  margin-right: 20px;
  padding-top: 15px;
  padding-bottom: 15px;
  text-align: left;
}
</style>
