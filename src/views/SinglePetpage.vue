<script>
import PetCard from '@/components/PetCard.vue';

export default {
    props: {
        pets: {
            type: Array,
            required: true,
        }
    },
    computed: {
        pet() {
            const routeId = Number(this.$route.params.id);
            const slectedPet = this.pets.find((pet) => pet.id === routeId);
            return slectedPet;
        }
    },
    components: {
        PetCard,
    }
}
</script>


<template>
    <div class="container ">
        <div class="row">
            <div class="col">
                <router-link :to="`/`">
                    <button class="btn btn-secondary mt-3 fw-semibold">
                        Back To All Pages
                    </button>
                </router-link>
                <PetCard :pet="pet"></PetCard>
            </div>
        </div>
    </div>
</template>