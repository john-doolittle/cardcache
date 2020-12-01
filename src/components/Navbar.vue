<template>
  <div className="navbar">
    <b-navbar toggleable="lg" type="dark">
      <b-container>
          <b-navbar-brand href="#">CardCache</b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item to="/">Home</b-nav-item>
              <b-nav-item href="#">Your Decks</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
          <b-nav-form>
            <b-button variant="light" type="button" v-b-modal.modal-1>
              New Deck
            </b-button>
            <NewDeckModal />
          </b-nav-form>
        </b-container>
    </b-navbar>
  </div>
</template>

<script>
import NewDeckModal from './NewDeckModal.vue';

export default {
  name: 'Navbar',
  components: {
    NewDeckModal,
  },
  data() {
    return {
      deck: '',
    };
  },
  methods: {
  },
};
</script>

<style scoped>
.navbar {
  background-color: black;
}
</style>
