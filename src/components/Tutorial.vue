<template>
  <div class="container">
    <div class="edit-form" v-if="currentTutorial">
      <h4>Tutorial</h4>
      <form>
        <div class="form-group">
          <label for="title">Title</label>
          <input
            type="text"
            class="form-control"
            id="title"
            v-model="currentTutorial.title"
          />
        </div>
        <div class="form-group">
          <label for="description">Description</label>
          <input
            type="text"
            class="form-control"
            id="description"
            v-model="currentTutorial.description"
          />
        </div>
        <div class="form-group">
          <label><strong>Status : </strong></label>
          {{ currentTutorial.publihed ? "Published" : "Pending" }}
        </div>
      </form>
      <button
        class="badge badge-primary me-2"
        v-if="currentTutorial.published"
        @click="updatePublished(false)"
      >
        Unpublish
      </button>
      <button class="btn badge bg-danger me-2 p-2" @click="deleteTutorial">
        Delete
      </button>
      <button class="btn badge bg-success p-2" @click="updateTutorial">
        Update
      </button>
      <p>{{ message }}</p>
    </div>
    <div v-else>
      <br />
      <p>Please click on a Tutorial...</p>
    </div>
  </div>
</template>

<script>
import tutorialDataService from "@/services/tutorialDataService";

export default {
  name: "Tutorial",
  props: {
    tutorial: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      currentTutorial: null,
      message: "",
    };
  },
  watch: {
    tutorial: function (tutorial) {
      this.currentTutorial = { ...tutorial };
      this.message = "";
    },
  },
  methods: {
    updatePublished(status) {
      tutorialDataService
        .update(this.currentTutorial.id, {
          published: status,
        })
        .then(() => {
          this.currentTutorial.published = status;
          this.message = "The status was updated successfully!";
        })
        .catch((e) => console.log(e));
    },
    updateTutorial() {
      const data = {
        title: this.currentTutorial.title,
        description: this.currentTutorial.description,
      };

      tutorialDataService
        .update(this.currentTutorial.id, data)
        .then(() => {
          this.message = "The tutorial was updated successfully!";
        })
        .catch((e) => console.log(e));
    },
    deleteTutorial() {
      tutorialDataService
        .delete(this.currentTutorial.id)
        .then(() => {
          this.$emit("refreshList");
        })
        .catch((e) => console.log(e));
    },
  },
  mounted() {
    this.message = "";
    this.currentTutorial = { ...this.tutorial };
  },
};
</script>

<style scoped></style>
