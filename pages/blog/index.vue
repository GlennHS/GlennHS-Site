<script setup>
  const queryParams = ref(null)
  const blogPosts = ref([])

  const getPostsByTag = async (tag) => {
    const postsArr = await fetch(`/api/_content/query?_params={"where":{"tags":{"_contains":"${tag}"}}}`).then(res => res.json())
    return postsArr
  }

  onMounted(async () => {
    /**
     * Grabs the query parameters from the URL and turns it into an object
     * where the keys are URL parameters and the values are the value of that
     * parameter
     */
    const searchParams = new URLSearchParams(document.location.search);
    const o = {}
    for (const [key, value] of searchParams.entries()) {
      o[key] = value
    }
    queryParams.value = o

    // If there are query parameters, grab filtered posts based on those parameters
    blogPosts.value = await getPostsByTag(queryParams.value.tag)
  })
</script>

<template>
  <div>
    <ContentRenderer v-for="post in blogPosts" :value="post" />
  </div>
</template>

<style scoped>
  
</style>