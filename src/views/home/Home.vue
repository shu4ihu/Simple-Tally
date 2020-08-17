<template>
  <div>
    <HomeContent></HomeContent>
    <RecentList></RecentList>
  </div>
</template>

<script>
  import HomeContent from "@/components/HomeContent.vue";
  import RecentList from "@/components/RecentList.vue";

  export default {
    name: "Home",
    components: {
      HomeContent,
      RecentList,
    },
  };
</script>

<style scoped></style>
