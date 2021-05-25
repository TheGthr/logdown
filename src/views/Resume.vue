<template>
  <div class="resume-content container">
    <ResumeExperiences class="resume-card resume-left" />
    <div class="resume-right">
      <ResumeEducation class="resume-card" />
      <ResumeInterests />
    </div>
  </div>
</template>

<script>
import ResumeEducation from "@/components/Resume/ResumeEducation";
import ResumeExperiences from "@/components/Resume/ResumeExperiences";
import ResumeInterests from "@/components/Resume/ResumeInterests";
export default {
  name: "Resume",
  components: { ResumeEducation, ResumeExperiences, ResumeInterests },
};
</script>

<style>
.resume-content,
.container {
  max-width: 100%;
  display: flex;
  font-family: Roboto, "Helvetica Neue", sans-serif;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.87);
  margin-left: 22rem;
  margin-right: 4rem;
  padding-top: 4rem;
  padding-bottom: 4rem;
}

.resume-left {
  flex-shrink: 1.5;
  line-height: 1.5;
  -webkit-text-size-adjust: 100%;
  box-sizing: border-box;
  margin-bottom: 1rem;
}

.resume-right {
  display: flex;
  flex-direction: column;
}
@media screen and (min-width: 1650px) and (min-width: 750px) {
  .resume-right {
    margin-left: 2em;
  }
}

.resume-card {
  margin-bottom: 1rem;
}

.job-header {
  font-weight: 500;
  font-size: 17px;
}

.resume-b {
  font-weight: 450;
  font-style: italic;
}

.enterprise-date {
  display: flex;
  justify-content: space-between;
}

.enterprise {
  font: 500 20px/32px Roboto, "Helvetica Neue", sans-serif;
  color: #d28445;
}

.experience-item {
  padding-top: 8px;
}
</style>
