<template>
  <div class="ld-card">
    <div class="ld-card-header">
      <font-awesome-icon :icon="['fas', 'brief-case']" />
      <div class="ld-card-title">{{ $t("resume.experiences.title") }}</div>
    </div>
    <div class="ld-card-content mat-typography">
      <!-- Sopra Steria -->
      <div class="experience-item">
        <div class="enterprise-date">
          <div
            v-html="$t('resume.experiences.sopra.title')"
            class="enterprise mat-title"
          ></div>
          <div
            v-html="$t('resume.experiences.sopra.duration')"
            class="date mat-h3"
          ></div>
        </div>
        <div class="mat-list" role="list">
          <div
            class="mat-list-item"
            role="listitem"
            v-html="$t('resume.experiences.sopra.jobs.one')"
          ></div>
          <div
            class="mat-list-item"
            role="listitem"
            v-html="$t('resume.experiences.sopra.jobs.two')"
          ></div>
          <div
            class="mat-list-item"
            role="listitem"
            v-html="$t('resume.experiences.sopra.jobs.three')"
          ></div>
          <div
            class="mat-list-item"
            role="listitem"
            v-html="$t('resume.experiences.sopra.jobs.four')"
          ></div>
        </div>
        <div class="mat-divider"></div>
      </div>
      <!-- EXYZT -->
      <div class="experience-item">
        <div class="enterprise-date">
          <div
            v-html="$t('resume.experiences.exyzt.title')"
            class="enterprise mat-title"
          ></div>
          <div
            v-html="$t('resume.experiences.exyzt.duration')"
            class="date mat-h3"
          ></div>
        </div>
        <div class="mat-list" role="list">
          <div
            class="mat-list-item"
            role="listitem"
            v-html="$t('resume.experiences.exyzt.job')"
          ></div>
        </div>
        <div class="mat-divider"></div>
      </div>
      <!-- Prefecture -->
      <div class="experience-item">
        <div class="enterprise-date">
          <div
            class="enterprise mat-title"
            v-html="$t('resume.experiences.prefecture.title')"
          ></div>
          <div
            v-html="$t('resume.experiences.prefecture.duration')"
            class="date mat-h3"
          ></div>
        </div>
        <div class="mat-list" role="list">
          <div
            class="mat-list-item"
            role="listitem"
            v-html="$t('resume.experiences.prefecture.job')"
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
