<script setup lang="ts">

import { Image } from '@/objects/Image';
import { ref, type Ref } from 'vue';
import Button from 'primevue/button';
import { Project } from '@/objects/Project';

const name = ref("")
const description = ref("")
const images :Ref<Image[], Image[]>= ref([])
const output = ref("")

function addNewImage(){
    images.value.push(new Image("",""))
}

function printOutput(){
    const project = new Project(name.value, description.value, images.value)
    output.value = JSON.stringify(project)
}

</script>
<template>
    <div class="horizontal">
        <div class="vertical">
            Name: <input v-model="name"/>
            Desrciption: <textarea v-model="description"/>
            Images:
            <div v-for="(image, index) in images" class="vertical image_box">
                {{ index }}:
                <div>Source: <input v-model="image.source"/> </div>
                <div>AltText: <input v-model="image.altText"/> </div> 
            </div>
            <Button label="+" v-on:click="addNewImage"/>
        </div>
        <div class="vertical">
            <Button label="Print Output" v-on:click="printOutput"/>
            <textarea v-model="output"></textarea>
        </div>
    </div>
</template>

<style lang="css" scoped>
.vertical{
    display: flex;
    flex-direction: column;
    padding: 10px;
}

.horizontal{
    display: flex;
    flex-direction: row;
}

.image_box{
    padding: 5px;
}
</style>