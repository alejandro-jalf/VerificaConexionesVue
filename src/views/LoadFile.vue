<template>
    <div class="mt-5">
        <b-form-group label="Imagen a subir:" label-for="file-default" label-cols-sm="2">
            <b-form-file id="file-default" ref="loadImage"></b-form-file>
        </b-form-group>
        <b-button :disabled="disable" @click="agregar" variant="primary">Subir Archivo</b-button>
        <b-progress :value="valueLoad" variant="info" striped :animated="true" class="mt-2"></b-progress>
    </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/storage";

export default {
    name: "LoadFile",
    data() {
        return {
            valueLoad: 0,
            disable: false
        }
    },
    methods: {
        async agregar() {
            try {
                const { files } = this.$refs.loadImage;
                this.loading = true;
                const file = files[0];
                const that = this;
                if (file) {
                    const isPdf = true // file.type === 'application/pdf';
                    if (isPdf) {
                        const storageRef = firebase
                        .storage().
                        ref(`images/${file.name}`);

                        const task = storageRef.put(file);

                        that.disable = true;
                        task.on("state_changed", 
                            function progress(snapshot){
                                const porcentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                                that.valueLoad = porcentage;
                            },

                            function error(err) {
                                console.log(err);
                                that.disable = false;
                            },

                            function complete() {
                                that.disable = false;
                                console.log('Archivo cargado');
                            }
                        );
                    } else {
                        console.log('Archivo no valido');
                    }
                } else {
                    console.log('falta el archivo');
                }
            } catch (error) {
                console.error(error);
            }
        }
    }
}
</script>
