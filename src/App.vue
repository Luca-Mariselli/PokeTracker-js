<template>
  <nav class="navbar navbar-expand-lg navbar-dark my-header-bg ps-4">

    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/sets">Browse Sets</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">My Collection</a>
        </li>
      </ul>

    </div>
  </nav>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}

.my-header-bg {
  background: url(https://limitless3.nyc3.cdn.digitaloceanspaces.com/limitless/header-background.png);
}
</style>
