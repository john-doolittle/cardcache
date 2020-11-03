<template>
  <b-modal id="modal-1" title="new-deck">
    <template #modal-title>
      Add Deck
    </template>
    <b-container>
      <b-row>
        <b-col>
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group
              id="input-group-1"
              v-model="form.name"
              label="Name"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                required
              >
              </b-form-input>
            </b-form-group>

            <b-row>
              <b-col>
                <b-form-group id="input-group-3" label="Format" label-for="input-3">
                  <b-form-select
                    id="input-3"
                    v-model="form.format"
                    :options="formats"
                    required
                  >
                  </b-form-select>
                </b-form-group>
              </b-col>
            </b-row>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
    <template #modal-footer>
      <b-button type="submit" variant="outline-primary">Create</b-button>
    </template>
  </b-modal>
</template>

<script>
export default {
  name: 'NewDeckModal',
  components: {
  },
  data() {
    return {
      form: {
        name: '',
        format: null,
      },
      formats: ['Brawl', { text: 'Commander', value: null }, 'Historic', 'Legacy', 'Modern', 'Pauper', 'Standard', 'Vintage'],
      show: true,
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
    },
  },
};
</script>
