<template>
  <div class="mat-card">
    <div class="mat-card-header">
      <div class="mat-card-avatar">
        <font-awesome-icon :icon="['fas', 'graduation-cap']" />
      </div>
      <div class="mat-card-title">"'resume.education.title' | translate"</div>
    </div>
    <div class="mat-card-content mat-typography">
      <!-- CVUT -->
      <div class="experience-item">
        <div class="enterprise-date">
          <div class="enterprise mat-title">
            "'resume.education.cvut.title' | translate"
          </div>
          <div class="date mat-h3">
            "'resume.education.cvut.duration' | translate"
          </div>
        </div>
        <div class="mat-body-strong">
          "'resume.education.cvut.subtitle' | translate"
        </div>
        <div class="mat-list" role="list">
          <div class="mat-list-item" role="listitem">
            "'resume.education.cvut.description' | translate"
          </div>
        </div>
        <div class="mat-divider"></div>
      </div>
      <!-- TSE -->
      <div class="experience-item">
        <div class="enterprise-date">
          <div class="enterprise mat-title">
            "'resume.education.tse.title' | translate"
          </div>
          <div class="date mat-h3">
            "'resume.education.tse.duration' | translate"
          </div>
        </div>
        <div class="mat-body-strong">
          "'resume.education.tse.subtitle' | translate"
        </div>
        <div class="mat-list" role="list">
          <div class="mat-list-item" role="listitem">
            "'resume.education.tse.description' | translate"
          </div>
        </div>
        <div class="mat-divider"></div>
      </div>
      <!-- CPGE -->
      <div class="experience-item">
        <div class="enterprise-date">
          <div class="enterprise mat-title">
            "'resume.education.prepa.title' | translate"
          </div>
          <div class="date mat-h3">
            "'resume.education.prepa.duration' | translate"
          </div>
        </div>
        <div class="mat-body-strong">
          "'resume.education.prepa.subtitle' | translate"
        </div>
        <div class="mat-list" role="list">
          <div class="mat-list-item" role="listitem">
            "'resume.education.prepa.description' | translate"
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
<style>
</style>
