<script setup lang="ts">

import { Image } from '@/objects/data_structures/Image';
import { reactive, ref, type Ref } from 'vue';
import Button from 'primevue/button';
import Select from 'primevue/select';

import { Link } from '@/objects/data_structures/Link';
import { Keys } from '@/assets/data/IconMap';
import { Project } from '@/objects/data_structures/Project';

const project = reactive(new Project("",""));
const output=ref("");

function addNewImage(){
    project.images.push(new Image("",""));
}

function addNewLink(){
    project.links.push(new Link("","",""));
}

function printOutput(){
    output.value = JSON.stringify(project);
}

</script>
<template>
    <div class="horizontal">
        <div class="vertical">
            Name: <input v-model="project.name"/>
            Desrciption: <textarea v-model="project.description"/>
            Images:
            <div v-for="(image, index) in project.images" class="vertical list_box">
                {{ index }}:
                <div>Source: <input v-model="image.source"/> </div>
                <div>AltText: <input v-model="image.altText"/> </div> 
            </div>
            <Button label="+" v-on:click="addNewImage"/>
            Links:
            <div v-for="(link, index) in project.links" class="vertical list_box">
                {{ index }}:
                <div>Text: <input v-model="link.text"/></div> 
                <div>URL: <input v-model="link.url"/></div> 
                <div>Icon: <Select v-model="link.iconId" :options="Keys"/></div>
            </div>
            <Button label="+" v-on:click="addNewLink"/>
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

.list_box{
    padding: 5px;
}
</style>