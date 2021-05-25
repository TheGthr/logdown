<template>
  <div class="ld-card">
    <div class="ld-card-header">
      <font-awesome-icon class="ld-card-avatar" :icon="['fas', 'briefcase']" />
      <div class="ld-card-title">{{ $t("resume.experiences.title") }}</div>
    </div>
    <div class="ld-card-content">
      <!-- Sopra Steria -->
      <div class="experience-item">
        <div class="enterprise-date">
          <div
            v-html="$t('resume.experiences.sopra.title')"
            class="enterprise ld-title"
          ></div>
          <div
            v-html="$t('resume.experiences.sopra.duration')"
            class="date ld-h3"
          ></div>
        </div>
        <div class="ld-list" role="list">
          <div
            class="ld-list-item"
            role="listitem"
            v-html="$t('resume.experiences.sopra.jobs.one')"
          ></div>
          <div
            class="ld-list-item"
            role="listitem"
            v-html="$t('resume.experiences.sopra.jobs.two')"
          ></div>
          <div
            class="ld-list-item"
            role="listitem"
            v-html="$t('resume.experiences.sopra.jobs.three')"
          ></div>
          <div
            class="ld-list-item"
            role="listitem"
            v-html="$t('resume.experiences.sopra.jobs.four')"
          ></div>
        </div>
        <div class="ld-divider"></div>
      </div>
      <!-- EXYZT -->
      <div class="experience-item">
        <div class="enterprise-date">
          <div
            v-html="$t('resume.experiences.exyzt.title')"
            class="enterprise ld-title"
          ></div>
          <div
            v-html="$t('resume.experiences.exyzt.duration')"
            class="date ld-h3"
          ></div>
        </div>
        <div class="ld-list" role="list">
          <div
            class="ld-list-item"
            role="listitem"
            v-html="$t('resume.experiences.exyzt.job')"
          ></div>
        </div>
        <div class="ld-divider"></div>
      </div>
      <!-- Prefecture -->
      <div class="experience-item">
        <div class="enterprise-date">
          <div
            class="enterprise ld-title"
            v-html="$t('resume.experiences.prefecture.title')"
          ></div>
          <div
            v-html="$t('resume.experiences.prefecture.duration')"
            class="date ld-h3"
          ></div>
        </div>
        <div class="ld-list" role="list">
          <div
            class="ld-list-item"
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
