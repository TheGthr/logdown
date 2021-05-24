<template>
  <div class="mat-card">
    <div class="mat-card-header">
      <div mat-card-avatar>
        <font-awesome-icon :icon="['fas', 'heart']" />
      </div>
      <div class="mat-card-title">{{ $t("resume.interests.title") }}</div>
    </div>
    <div class="mat-card-content mat-typography">
      <div class="all-interests">
        <div class="two-interests">
          <div class="interest">
            <font-awesome-icon :icon="['fas', 'headphones']" size="2x" />
            <p>{{ $t("resume.interests.music") }}</p>
          </div>
          <div class="interest">
            <font-awesome-icon :icon="['fas', 'music']" size="2x" />
            <p>{{ $t("resume.interests.instruments") }}</p>
          </div>
        </div>
        <div class="two-interests">
          <div class="interest">
            <font-awesome-icon :icon="['fas', 'utensil-spoon']" size="2x" />
            <p>{{ $t("resume.interests.cooking") }}</p>
          </div>
          <div class="interest">
            <font-awesome-icon :icon="['fas', 'heartbeat']" size="2x" />
            <p>{{ $t("resume.interests.running") }}</p>
          </div>
        </div>
        <div class="two-interests">
          <div class="interest">
            <font-awesome-icon :icon="['fas', 'hotel']" size="2x" />
            <p>{{ $t("resume.interests.community") }}</p>
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

<style></style>
