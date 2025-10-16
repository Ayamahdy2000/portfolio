<template>
  <nav class="navbar navbar-expand-lg ">
    <div class="container-fluid">
      <NuxtLink class="navbar-brand" to="/">Aya Mahdy</NuxtLink>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/">Home</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/about">About Me</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/skills">Skills</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/contact">Contact Me</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
