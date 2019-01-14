<template>
  <div>
    <h1>{{ msg }}</h1>
    <p class="bold">Found {{ this.breaches.length }} breaches</p>
    <h2>Recent Breaches:</h2>
    <ol>
      <li v-for="breach in filterBreaches('AddedDate', 5)" :key="breach.Name" v-text="breach.Title"></li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "BreachList",
  props: {
    msg: String
  },
  data() {
    return {
      breaches: []
    };
  },
  methods: {
    filterBreaches(key="AddedDate", count=5) {
      return [...this.breaches]
        .sort((itemA, itemB) => {
          return new Date(itemB[key]) - new Date(itemA[key]);
        })
        .slice(0, count);
    }
  },
  async mounted() {
    try {
      const res = await this.$http.get("https://haveibeenpwned.com/api/v2/breaches");
      this.breaches = res.data;
    } catch (err) {
      console.error(err);
    }
  }
};
</script>

<style scoped>
  .bold {
    font-weight: bold;
  }
</style>
