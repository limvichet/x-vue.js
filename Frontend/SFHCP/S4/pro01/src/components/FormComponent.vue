<!-- FormComponent.vue -->
<template>
    <form @submit.prevent="handleSubmit">
        <label for="name">Name:</label>
        <input type="text" v-model="formData.name" id="name" />

        <label for="email">Email:</label>
        <input type="email" v-model="formData.email" id="email" />

        <input type="email" v-model="secodn_email" id="secodn_email" />

        <button type="submit">Submit</button>
    </form>
</template>

<script>
export default {
    name: 'FormComponent',
    data() {
        return {
            formData: {
                name: '',
                email: ''
            },
            secodn_email : '',
        };
    },
    methods: {
        handleSubmit() {
            console.log(this.formData);
            console.log(this.secodn_email);
            // Perform form submission tasks here
        }
    }
};
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
}

label {
    margin-top: 8px;
}

input {
    margin-bottom: 16px;
}

button {
    align-self: flex-start;
}
</style>