<template>
  <div class="ld-card">
    <div class="ld-card-header">
      <font-awesome-icon :icon="['fas', 'graduation-cap']" />
      <div class="mat-card-title">{{ $t("resume.education.title") }}</div>
    </div>
    <div class="mat-card-content mat-typography">
      <!-- CVUT -->
      <div class="experience-item">
        <div class="enterprise-date">
          <div class="enterprise mat-title">
            {{ $t("resume.education.cvut.title") }}
          </div>
          <div class="date mat-h3">
            {{ $t("resume.education.cvut.duration") }}
          </div>
        </div>
        <div class="mat-body-strong">
          {{ $t("resume.education.cvut.subtitle") }}
        </div>
        <div class="mat-list" role="list">
          <div class="mat-list-item" role="listitem">
            {{ $t("resume.education.cvut.description") }}
          </div>
        </div>
        <div class="mat-divider"></div>
      </div>
      <!-- TSE -->
      <div class="experience-item">
        <div class="enterprise-date">
          <div class="enterprise mat-title">
            {{ $t("resume.education.tse.title") }}
          </div>
          <div class="date mat-h3">
            {{ $t("resume.education.tse.duration") }}
          </div>
        </div>
        <div class="mat-body-strong">
          {{ $t("resume.education.tse.subtitle") }}
        </div>
        <div class="mat-list" role="list">
          <div class="mat-list-item" role="listitem">
            {{ $t("resume.education.tse.description") }}
          </div>
        </div>
        <div class="mat-divider"></div>
      </div>
      <!-- CPGE -->
      <div class="experience-item">
        <div class="enterprise-date">
          <div class="enterprise mat-title">
            {{ $t("resume.education.prepa.title") }}
          </div>
          <div class="date mat-h3">
            {{ $t("resume.education.prepa.duration") }}
          </div>
        </div>
        <div class="mat-body-strong">
          {{ $t("resume.education.prepa.subtitle") }}
        </div>
        <div class="mat-list" role="list">
          <div class="mat-list-item" role="listitem">
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
