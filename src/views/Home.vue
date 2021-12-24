<template>
  <div>
    <Navbar />
    <TutorialList />
  </div>
</template>

<script>
import Navbar from "@/components/shared/Navbar";
import TutorialList from "@/components/TutorialList";
export default {
  name: "Home",
  components: { TutorialList, Navbar },
};
</script>

<style scoped></style>
