<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-container>
          <b-navbar-brand href="#">CardCache</b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item to="/">Home</b-nav-item>
              <b-nav-item href="#">Browse Decks</b-nav-item>
              <b-nav-item href="#">Search</b-nav-item>
            </b-navbar-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template slot="button-content"><em>User</em></template>
                <b-dropdown-item to="/profile">Profile</b-dropdown-item>
                <b-dropdown-item href="#">My Decks</b-dropdown-item>
                <b-dropdown-item href="#">Settings</b-dropdown-item>
                <b-dropdown-item href="#">Sign Out</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </b-collapse>
          <b-nav-form>
            <b-button variant="light" type="button" to="/deck">
              New Deck
            </b-button>
          </b-nav-form>
        </b-container>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      deck: '',
    };
  },
  methods: {
  },
};
</script>
