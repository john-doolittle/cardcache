<template>
<!-- eslint-disable max-len -->
  <div class="home">
    <b-jumbotron className="jumbotron" fluid>
      <template #header>
        Ready. Set. Brew.
      </template>
      <template #lead>
        We are a deck building website for Magic: The Gathering®
      </template>
      <hr class="my-4">
      <p>
        It uses utility classes for typography and spacing to space content out within the larger
        container.
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
