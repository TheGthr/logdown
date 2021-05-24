<template>
  <div class="content container">
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

<style scoped>
.content,
.container {
  max-width: 100%;
  display: flex;
}

@media (min-width: 64em) {
  .content {
    margin-left: 22rem;
    margin-right: 4rem;
  }
}

@media (min-width: 48em) {
  .content {
    max-width: 38rem;
    margin-left: 20rem;
    margin-right: 2rem;
  }
}

.content {
  padding-top: 4rem;
  padding-bottom: 4rem;
}

.container {
  max-width: 38rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-left: auto;
  margin-right: auto;
}

* {
  box-sizing: border-box;
}

.resume-left {
  flex-shrink: 1.5;
  line-height: 1.5;
  font-family: "PT Sans", Helvetica, Arial, sans-serif;
  font-size: 20px;
  color: #9da5b4;
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
</style>
