<template>
  <div class="ld-card">
    <div class="ld-card-header">
      <font-awesome-icon :icon="['fas', 'graduation-cap']" />
      <div class="ld-card-title">{{ $t("resume.education.title") }}</div>
    </div>
    <div class="ld-card-content">
      <!-- CVUT -->
      <div class="experience-item">
        <div class="enterprise-date">
          <div class="enterprise ld-title">
            {{ $t("resume.education.cvut.title") }}
          </div>
          <div class="date ld-h3">
            {{ $t("resume.education.cvut.duration") }}
          </div>
        </div>
        <div class="ld-body-strong">
          {{ $t("resume.education.cvut.subtitle") }}
        </div>
        <div class="ld-list" role="list">
          <div class="ld-list-item" role="listitem">
            {{ $t("resume.education.cvut.description") }}
          </div>
        </div>
        <div class="ld-divider"></div>
      </div>
      <!-- TSE -->
      <div class="experience-item">
        <div class="enterprise-date">
          <div class="enterprise ld-title">
            {{ $t("resume.education.tse.title") }}
          </div>
          <div class="date ld-h3">
            {{ $t("resume.education.tse.duration") }}
          </div>
        </div>
        <div class="ld-body-strong">
          {{ $t("resume.education.tse.subtitle") }}
        </div>
        <div class="ld-list" role="list">
          <div class="ld-list-item" role="listitem">
            {{ $t("resume.education.tse.description") }}
          </div>
        </div>
        <div class="ld-divider"></div>
      </div>
      <!-- CPGE -->
      <div class="experience-item">
        <div class="enterprise-date">
          <div class="enterprise ld-title">
            {{ $t("resume.education.prepa.title") }}
          </div>
          <div class="date ld-h3">
            {{ $t("resume.education.prepa.duration") }}
          </div>
        </div>
        <div class="ld-body-strong">
          {{ $t("resume.education.prepa.subtitle") }}
        </div>
        <div class="ld-list" role="list">
          <div class="ld-list-item" role="listitem">
            {{ $t("resume.education.prepa.description") }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResumeEducation",
};
</script>
