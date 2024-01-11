<script>
import PetCard from '@/components/PetCard.vue';

export default {
    props: {
        pets: {
            type: Array,
            required: true,
        }
    },
    components: {
        PetCard,
    }
}
</script>

<template>
    <div class="container">
        <div class="row mt-3">
            <PetCard v-for="pet in pets" :pet="pet"></PetCard>
        </div>
    </div>
</template>

