<template>
  <router-link :to="`/user/${user.id}`" class="card m-0 text-decoration-none">
    <div class="p-3 row w-100 m-0">
      <div class="col-md-2 col-xl-1 col-5 p-0 ps-2">
        <img class="img-fluid user-pic" />
      </div>
      <div class="col-md-10 col-xl-11 col-7 p-0 row">
        <div class="col-md-6 col-sm-12 align-content-center ">
          {{ user.name }}<br />{{ user.username }}
        </div>
        <div class="col-md-6 col-sm-12 align-items-center d-flex justify-content-start justify-content-md-end">
          <a :href="`mailto:${user.email}`">{{ user.email }}</a>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "UserCard",
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.card {
  margin-bottom: 1rem;
}
.card-title {
  font-size: 1.25rem;
}
.user-pic {
  width: 80px;
  height: 80px;
  border-radius: 52px;
  background-color: grey;
}
</style>
