<script>
export default {
    props: {
        pet: {
            type: Object,
            requied: true,
        }
    }
}
</script>


<template>
    <div class="col-lg-4 col-md-6 col-12 my-4">
        <div class="card w-100 mx-lg-2 shadow">
            <img :src="pet.picture" class="card-img-top" alt="...">
            <div class="card-body">
                <router-link :to="`/pet/${pet.id}`">
                    <h5 class="card-text text-decoration-underline text-secondary mb-2">Name : {{ pet.name }}</h5>
                </router-link>
                <p class="card-text fw-semibold">Age : {{ pet.age }}</p>
                <p class="card-text fw-semibold">Type : {{ pet.type }}</p>
                <p class="card-text fw-semibold">Breed : {{ pet.breed }}</p>
                <p class="card-text fw-semibold">Hobby : {{ pet.hobbies.toString() }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
h5 {
    cursor: pointer;
}
</style>