<script lang="ts" setup>
import { Link } from '@/objects/data_structures/Link';
import { GITHUB, LINKEDIN } from '@/objects/IconMap';
import LinkButton from '../card/LinkButton.vue';
import Disclaimer from './Disclaimer.vue';

const links = [
    new Link(null, GITHUB.id, "https://github.com/S-Marv"),
    new Link(null, LINKEDIN.id, "https://www.linkedin.com/in/samuel-marvin-39619a301/")
];
</script>
<template>
    <div class="introduction">
        <h1>Samuel Marvin's Portfolio</h1>
        <p>A showcase of academic and personal projects from a Computer Science graduate of Ball State University.</p>
        <div class="buttons">
            <LinkButton v-for="link in links" :link="link"/>
        </div>
        <Disclaimer/>
    </div>
</template>
<style scoped>
.buttons{
    display: flex;
    justify-content: center;
    align-items: center;
}

.introduction{
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.introduction h1{
    font-size: 70px;
}

.introduction div{
    margin: 10px 0;
}
</style>