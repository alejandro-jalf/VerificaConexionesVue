<template>
    <div>
        <b-avatar
            class="Floatbtn"
            :variant="variant"
            :icon="icon"
            :size="size"
            :button="true"
            :style="style"
            @click="click"
        ></b-avatar>
    </div>
</template>

<script>
export default {
    name: "FloatButton",
    props: {
        icon: {
            type: String,
            require: false,
            default: "arrow-counterclockwise"
        },
        variant: {
            type: String,
            require: false,
            default: "primary"
        },
        size: {
            type: String,
            require: false,
            default: "3rem"
        },
        alignVertical: {
            type: String,
            require: false,
            default: "bottom"
        },
        alignHorizontal: {
            type: String,
            require: false,
            default: "right"
        },
        click: {
            type: Function,
            require: false
        }
    },
    computed: {
        style() {
            const vertical = (this.alignVertical === "bottom") ? "bottom: 15px;" : "top: 15px;";
            const horizontal = (this.alignHorizontal === "right") ? "right: 15px;" : "left: 15px;";
            return `${vertical} ${horizontal}`;
        }
    }
}
</script>

<style scoped>
    .Floatbtn{
        position: fixed;
        cursor: pointer;
    }
</style>
