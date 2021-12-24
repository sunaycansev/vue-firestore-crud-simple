<template>
  <div>
    <Navbar />
    <AddTutorial />
  </div>
</template>

<script>
import Navbar from "@/components/shared/Navbar";
import AddTutorial from "@/components/AddTutorial";
export default {
  name: "Add",
  components: { AddTutorial, Navbar },
};
</script>

<style scoped></style>
