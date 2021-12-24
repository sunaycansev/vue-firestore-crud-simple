<template>
  <div class="container">
    <div class="row list">
      <div class="col-md-6">
        <h4>Tutorials List</h4>
        <ul class="list-group">
          <li
            v-for="(tutorial, index) in tutorials"
            :key="index"
            :class="{ active: index === currentIndex }"
            class="list-group-item"
            @click="setActiveTutorial(tutorial, index)"
          >
            {{ tutorial.title }}
          </li>
        </ul>
      </div>
      <div class="col-md-6">
        <div v-if="currentTutorial">
          <Tutorial :tutorial="currentTutorial" @refreshList="refreshList" />
        </div>
        <div v-else>
          <br />
          <p>Please click on a tutorial...</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tutorialDataService from "@/services/tutorialDataService";
import Tutorial from "@/components/Tutorial";

export default {
  name: "TutorialList",
  components: { Tutorial },
  data() {
    return {
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1,
      unsubscribe: null,
    };
  },
  methods: {
    onDataChange(items) {
      let _tutorials = [];

      items.forEach((item) => {
        let id = item.id;
        let data = item.data();
        _tutorials.push({
          id: id,
          title: data.title,
          description: data.description,
          published: data.published,
        });
      });

      this.tutorials = _tutorials;
    },
    refreshList() {
      this.currentTutorial = null;
      this.currentIndex = -1;
    },
    setActiveTutorial(tutorial, index) {
      this.currentTutorial = tutorial;
      this.currentIndex = index;
    },
  },
  mounted() {
    this.unsubscribe = tutorialDataService
      .getAll()
      .orderBy("title", "asc")
      .onSnapshot(this.onDataChange);
  },
  beforeDestroy() {
    this.unsubscribe();
  },
};
</script>

<style scoped></style>
