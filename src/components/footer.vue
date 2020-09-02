<template>
  <footer>
    <p>&copy;  Brand All Rights Reserved.</p>
    <div>{{ year}}</div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      year: 2015
    };
  },
  beforeMount() {
    let d = new Date();
    this.year = d.getFullYear();
  }
};
</script>

<style lang="scss" scoped>
footer {
  align-items: center;
  margin: 5px 0;
  height: 40px;
  display: flex;
  justify-content: space-between;
  background-color: rgb(204, 203, 203);
  padding: 10px 40px ;
  &> p {
      margin: 0;
  }
}
</style>