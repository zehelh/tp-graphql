<template>
  <div class="projects">
    <h1 class="text-center">Liste de mes projets Github</h1>
    <section class="d-flex justify-content-evenly flex-wrap">
      <div v-for="(project, index) in this.list" :key="index" class="card col-4 m-3">
        <div class="card-header">
          <p class="h2 text-capitalize">{{ project.name }}</p>
        </div>
        <div class="card-body">
          <p v-if="project.description">{{ project.description }}</p>
          <p v-else>Aucune description pour ce projet</p>
          <p>Projet intialiser le: {{ new Date(project.created_at).toLocaleDateString("fr") }}</p>
          <p>⭐{{ project.stargazers_count }}</p>
          <p>Language principale du projet: {{ project.language }}</p>
        </div>
        <div class="card-footer">
          <router-link :to="{ name: 'Project', params: {id: project.id } }" class="btn btn-secondary mx-2">Voir le projet</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Projects',
  props: {
  },
  methods: {
    ...mapActions('gitList', ['getProjects'])
  },
  computed: {
    ...mapState('gitList', ['list'])
  },
  mounted () {
    this.getProjects()
  }
}
</script>

<style scoped>

</style>
