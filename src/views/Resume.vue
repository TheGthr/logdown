<template>
  <div>My resume</div>
  <div class="content container">
    <ResumeExperiences class="resume-card resume-left" />
    <div class="resume-right">
      <ResumeEducation class="resume-card" />
      <ResumeInterests />
    </div>
  </div>
</template>

<script>
import ResumeEducation from '@/components/Resume/ResumeEducation';
import ResumeExperiences from '@/components/Resume/ResumeExperiences';
import ResumeInterests from '@/components/Resume/ResumeInterests';

export default {
  name: "Resume",
  components: [ResumeEducation, ResumeExperiences, ResumeInterests]
};
</script>

<style scoped>
.resume-left {
  flex-shrink: 1.5;
}

.resume-right {
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1650px) and (min-width: 750px) {
    margin-left: 2em;
  }
}

.resume-card {
  margin-bottom: 1rem;
}
</style>