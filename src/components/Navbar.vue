<template>
  <div id="nav" class="sidebar w-3/12 flex flex-col justify-end items-end">
    <div class="sidebar-about">
      <h1>Logdown</h1>
      <p class="lead">Un peu de cryptographie, de développement web et 3D</p>
    </div>
    <nav class="sidebar-nav">
      <router-link class="sidebar-nav-item" to="/">Home</router-link> |
      <router-link class="sidebar-nav-item" to="/resume">Resume</router-link>

      <div class="sub-menu-icons">
        <div class="external-links">
          <a class="sidebar-nav-icons" href="https://github.com/TheoGthr">
            <font-awesome-icon icon="github" />
          </a>
          <a class="sidebar-nav-icons" href="https://twitter.com/TheoGFasee">
            <font-awesome-icon icon="twitter" />
          </a>
        </div>
        <div>
          <!-- <button
            mat-icon-button
            [matMenuTriggerFor]="menu"
            [matTooltip]="'home.navbar.language-tooltip' | translate"
          >
            <mat-icon>language</mat-icon>
          </button>
          <mat-menu #menu="matMenu">
            <button mat-menu-item (click)="setLang('fr')">Français</button>
            <button mat-menu-item (click)="setLang('en')">English</button>
          </mat-menu-->
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
/*
 * Sidebar
 *
 * Flexible banner for housing site name, intro, and "footer" content. Starts
 * out above content in mobile and later moves to the side with wider viewports.
 */

.sidebar {
  text-align: center;
  padding: 2rem 1rem;
  color: #9da5b4;
  background-color: #8f5536;
}
@media (min-width: 48em) {
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 18rem;
    text-align: left;
  }
}

/* Sidebar links */
.sidebar a {
  color: #fff;
}

/* About section */
.sidebar-about h1 {
  color: #fff;
  margin-top: 0;
  font-family: "Abril Fatface", serif;
  font-size: 3.25rem;
  font-weight: bold;
}

/* Sidebar nav */
.sidebar-nav {
  margin-bottom: 1rem;
}
.sidebar-nav-item {
  display: block;
  line-height: 1.75;
}
a.sidebar-nav-item:hover,
a.sidebar-nav-item:focus {
  text-decoration: underline;
}
.sidebar-nav-item.active {
  font-weight: bold;
}
.sidebar-nav-icons {
  margin-top: 0.4rem;
  display: inline-block;
  line-height: 1.75;
  height: 1.75;
  vertical-align: bottom;
}

.lead {
  color: rgb(88, 88, 88);
  font-size: 1.25rem;
  font-weight: 300;
}

.sub-menu-icons {
  display: flex;
  justify-content: space-between;
}

.external-links {
  display: flex;
  width: 20%;
  justify-content: space-between;
}
</style>