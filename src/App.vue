<script>
export default {
  data() {
    return {
      // ... other data
      pets: [
        {
          id: 1,
          name: "Bella",
          age: 1,
          type: "Cat",
          breed: "Ragdoll",
          hobbies: ["walks ", " car rides ", " napping "],
          picture:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Juvenile_Ragdoll.jpg/800px-Juvenile_Ragdoll.jpg",
        },
        {
          id: 2,
          name: "Charlie",
          age: 6,
          type: "Cat",
          breed: "American Shorthair",
          hobbies: ["eating ", " napping ", " barking "],
          picture:
            "https://i.cbc.ca/1.7046192.1701492097!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/african-wild-cat.jpg",
        },
        {
          id: 3,
          name: "Lucy",
          age: 5,
          type: "Cat",
          breed: "Tabby",
          hobbies: ["eating ", " napping ", " climbing "],
          picture:
            "https://hips.hearstapps.com/hmg-prod/images/beautiful-smooth-haired-red-cat-lies-on-the-sofa-royalty-free-image-1678488026.jpg",
        },
        {
          id: 4,
          name: "Meow",
          age: 9,
          type: "Cat",
          breed: "Tabby",
          hobbies: ["eating ", " napping ", " climbing "],
          picture:
            "https://i.pinimg.com/736x/d7/7e/eb/d77eeb786acc149e089ac066b95a50f7.jpg",
        },
        {
          id: 5,
          name: "Simba",
          age: 11,
          type: "Cat",
          breed: "Tabby",
          hobbies: ["eating ", " napping ", " climbing "],
          picture:
            "https://i.pinimg.com/originals/d8/55/c6/d855c66f95e9d3babeebd1e88bf4026d.jpg",
        },
        {
          id: 6,
          name: "Oren",
          age: 8,
          type: "Cat",
          breed: "Tabby",
          hobbies: ["eating ", " napping ", " climbing "],
          picture:
            "https://i.chzbgr.com/full/9817556992/hAA1BE0BC/bag-12",
        },
      ],
    };
  },
  // ... other properties
};

</script>

<template>
  <router-view :pets="pets"></router-view>
</template>