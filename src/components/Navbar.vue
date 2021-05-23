<template>
  <div id="sidebar">
    <div id="sidebar-about">
      <h1>Logdown</h1>
      <p class="lead">Un peu de cryptographie, de développement web et 3D</p>
    </div>
    <nav id="sidebar-nav">
      <router-link class="sidebar-nav-item" to="/">Home</router-link>
      <router-link class="sidebar-nav-item" to="/resume">Resume</router-link>

      <div class="justify-between">
        <div class="justify-between">
          <a class="sidebar-nav-icon" href="https://github.com/TheoGthr">
            <font-awesome-icon :icon="['fab', 'github']" />
          </a>
          <a class="sidebar-nav-icon" href="https://twitter.com/TheoGFasee">
            <font-awesome-icon :icon="['fab', 'twitter']" />
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
.justify-between {
  display: flex;
  justify-content: space-between;
}

/*
 * Sidebar
 *
 * Flexible banner for housing site name, intro, and "footer" content. Starts
 * out above content in mobile and later moves to the side with wider viewports.
 */
#sidebar {
  width: 20%;
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

.sidebar-nav-icon {
  margin-top: 0.4rem;
  display: inline-block;
  line-height: 1.75;
  height: 1.75;
  vertical-align: bottom;
}

.lead {
  color: rgb(55, 55, 55);
  font-size: 1.25rem;
  font-weight: 350;
}

</style>