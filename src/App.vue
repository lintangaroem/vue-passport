<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link :to="{ name: 'post.index' }" class="navbar-brand">PASSPORT</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link :to="{ name: 'barang.index' }" class="nav-link" href="">BARANG</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'post.index' }" class="nav-link" href="#">POST</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style>
body {
  background: rgb(252, 224, 96) !important;
}
</style>
