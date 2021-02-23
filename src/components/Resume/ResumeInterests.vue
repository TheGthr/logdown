<template>
  <div class="mat-card">
    <div class="mat-card-header">
      <div mat-card-avatar>
        <font-awesome-icon :icon="['fas', 'heart']" />
      </div>
      <div class="mat-card-title">"'resume.interests.title' | translate"</div>
    </div>
    <div class="mat-card-content mat-typography">
      <div class="all-interests">
        <div class="two-interests">
          <div class="interest">
            <font-awesome-icon :icon="['fas', 'headphones']" size="2x" />
            <p>"'resume.interests.music' | translate"</p>
          </div>
          <div class="interest">
            <font-awesome-icon :icon="['fas', 'music']" size="2x" />
            <p>"'resume.interests.instruments' | translate"</p>
          </div>
        </div>
        <div class="two-interests">
          <div class="interest">
            <font-awesome-icon :icon="['fas', 'ustensil-spoon']" size="2x" />
            <p>"'resume.interests.cooking' | translate"</p>
          </div>
          <div class="interest">
            <font-awesome-icon :icon="['fas', 'heartbeat']" size="2x" />
            <p>"'resume.interests.running' | translate"</p>
          </div>
        </div>
        <div class="two-interests">
          <div class="interest">
            <font-awesome-icon :icon="['fas', 'hotel']" size="2x" />
            <p>"'resume.interests.community' | translate"</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResumeInterests",
};
</script>

<style>
</style>