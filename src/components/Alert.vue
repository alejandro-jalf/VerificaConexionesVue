<template>
    <b-modal
        :visible="alertShow"
        :title="alertTitle"
        :header-bg-variant="alertHeaderBg"
        :header-text-variant="alertHeaderText"
        :centered="true"
    >
        <b-container fluid>
            {{ alertMessage }}
        </b-container>

        <template #modal-footer>
            <div class="w-100">
                <b-button
                    variant="primary"
                    size="sm"
                    class="float-right"
                    @click="hideAlertDialog"
                >
                    Aceptar
                </b-button>
            </div>
        </template>
    </b-modal>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
    name: "Alert",
    methods: {
        ...mapMutations([
            'hideAlertDialog'
        ])
    },
    computed: {
        ...mapState([
            'alertShow',
            'alertTitle',
            'alertMessage',
            'alertHeaderBg',
            'alertHeaderText'
        ])
    }
}
</script>
