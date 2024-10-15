<template>
    <div>
        <MenuComponent/>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import MenuComponent from '@/components/MenuComponent.vue';

@Component({
    components: {
        MenuComponent
    }
})
export default class YourClass extends Vue {}

</script>

<style scoped lang="sass">

</style>
