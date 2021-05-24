<template>
  <div id="sidebar">
    <div id="sidebar-about">
      <h1>{{ $t("home.title") }}</h1>
      <p class="lead">{{ $t("home.navbar.description") }}</p>
    </div>
    <nav id="sidebar-nav">
      <router-link class="sidebar-nav-item" to="/">{{
        $t("home.navbar.home-link")
      }}</router-link>
      <router-link class="sidebar-nav-item" to="/resume">{{
        $t("home.navbar.resume-link")
      }}</router-link>

      <div id="nav-icons" class="justify-between">
        <button id="lang-btn">
          <font-awesome-icon :icon="['fas', 'globe']" />
          <ul id="lang-menu">
            <li role="listitem" @click="$i18n.locale = 'en'">English</li>
            <li role="listitem" @click="$i18n.locale = 'fr'">Français</li>
          </ul>
        </button>
        <div class="justify-between sidebar-nav-icons">
          <a class="sidebar-nav-icon" href="https://github.com/TheoGthr">
            <font-awesome-icon :icon="['fab', 'github']" />
          </a>
          <a class="sidebar-nav-icon" href="https://twitter.com/TheoGFasee">
            <font-awesome-icon :icon="['fab', 'twitter']" />
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
#lang-menu {
  display: block;
  margin: 8px 0 0 0;
  padding: 0;
  background-color: #fff;
  color: rgb(55, 55, 55);
  list-style: none;
  position: absolute;
  bottom: 60px;
  left: 15%;
  display: none;
  border-radius: 4px;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  outline: 0;
}

#lang-menu li {
  padding-top: 1px; /* Introducing a padding between the li and the a give the illusion spaced items */
  float: none;
}

#lang-btn:hover > #lang-menu {
  /* Display the dropdown on hover */
  display: block; /* Bring back on-screen when needed */
}

li {
  font-size: 14px;
  display: block;
  line-height: 48px;
  height: 48px;
  padding: 0 16px;
}

li:hover {
  /* These create persistent hover states, meaning the top-most link stays 'hovered' even when your cursor has moved down the list. */
  background-color: rgb(236, 236, 236);
  border-radius: 4px;
}

/*
 * Sidebar
 *
 * Flexible banner for housing site name, intro, and "footer" content. Starts
 * out above content in mobile and later moves to the side with wider viewports.
 */
#sidebar {
  width: 18%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  text-align: center;
  padding: 2rem 1rem;
  color: #9da5b4;
  background-color: #8f5536;
}

@media (min-width: 48em) {
  #sidebar {
    position: fixed;
    top: 0;
    bottom: 0;
    text-align: right;
  }
}

/* Sidebar links */
#sidebar a {
  color: #fff;
}

/* About section */
#sidebar-about h1 {
  color: #fff;
  margin-top: 0;
  font-family: "Abril Fatface", serif;
  font-size: 3.25rem;
  font-weight: bold;
}

/* Sidebar nav */
#sidebar-nav {
  width: 100%;
  margin-bottom: 1rem;
}

.sidebar-nav-item {
  display: block;
  line-height: 1.75;
  text-decoration: none;
}

a.sidebar-nav-item:hover,
a.sidebar-nav-item:focus {
  text-decoration: underline;
}

.sidebar-nav-item.router-link-active {
  font-weight: bold;
}

#nav-icons {
  margin-top: 0.4rem;
}

.sidebar-nav-icons {
  width: 20%;
}

.sidebar-nav-icon {
  display: inline-block;
  line-height: 1.75;
  vertical-align: bottom;
}

.lead {
  color: rgb(55, 55, 55);
  font-size: 1.25rem;
  font-weight: 350;
}

/* Style buttons */
#lang-btn {
  background-color: #77482f;
  border: none;
  border-radius: 50%;
  color: white;
  padding: 8px 10px;
  font-size: 22px;
  cursor: pointer;
}

/* Darker background on mouse-over */
#lang-btn:hover {
  background-color: #8f5536;
}
</style>
