<template>
  <div class="mat-card">
    <div class="mat-card-header">
      <div mat-card-avatar>
        <font-awesome-icon :icon="['fas', 'brief-case']" />
      </div>
      <div class="mat-card-title">"'resume.experiences.title' | translate"</div>
    </div>
    <div class="mat-card-content mat-typography">
      <!-- Sopra Steria -->
      <div class="experience-item">
        <div class="enterprise-date">
          <div
            [innerHTML]="'resume.experiences.sopra.title' | translate"
            class="enterprise mat-title"
          ></div>
          <div
            [innerHTML]="'resume.experiences.sopra.duration' | translate"
            class="date mat-h3"
          ></div>
        </div>
        <div class="mat-list" role="list">
          <div
            class="mat-list-item"
            role="listitem"
            [innerHTML]="'resume.experiences.sopra.jobs.one' | translate"
          ></div>
          <div
            class="mat-list-item"
            role="listitem"
            [innerHTML]="'resume.experiences.sopra.jobs.two' | translate"
          ></div>
          <div
            class="mat-list-item"
            role="listitem"
            [innerHTML]="'resume.experiences.sopra.jobs.three' | translate"
          ></div>
          <div
            class="mat-list-item"
            role="listitem"
            [innerHTML]="'resume.experiences.sopra.jobs.four' | translate"
          ></div>
        </div>
        <div class="mat-divider"></div>
      </div>
      <!-- EXYZT -->
      <div class="experience-item">
        <div class="enterprise-date">
          <div
            [innerHTML]="'resume.experiences.exyzt.title' | translate"
            class="enterprise mat-title"
          ></div>
          <div
            [innerHTML]="'resume.experiences.exyzt.duration' | translate"
            class="date mat-h3"
          ></div>
        </div>
        <div class="mat-list" role="list">
          <div
            class="mat-list-item"
            role="listitem"
            [innerHTML]="'resume.experiences.exyzt.job' | translate"
          ></div>
        </div>
        <div class="mat-divider"></div>
      </div>
      <!-- Prefecture -->
      <div class="experience-item">
        <div class="enterprise-date">
          <div
            class="enterprise mat-title"
            [innerHTML]="'resume.experiences.prefecture.title' | translate"
          ></div>
          <div
            [innerHTML]="'resume.experiences.prefecture.duration' | translate"
            class="date mat-h3"
          ></div>
        </div>
        <div class="mat-list" role="list">
          <div
            class="mat-list-item"
            role="listitem"
            [innerHTML]="'resume.experiences.prefecture.job' | translate"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResumeExperiences",
};
</script>

<style>
</style>