<template>
<div class="change-mode">
    <div class="custom-control custom-switch custom-switch-icon custom-control-inline">
        <div class="custom-switch-inner">
            <p class="mb-0"> </p>
            <input type="checkbox" v-model="dark" class="custom-control-input" id="dark-mode" data-active="true">
            <label class="custom-control-label" for="dark-mode" data-mode="toggle">
                <span class="switch-icon-left">
                    <svg class="svg-icon" id="h-moon" height="20" width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                </span>
                <span class="switch-icon-right">
                    <svg class="svg-icon" id="h-sun" height="20" width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                </span>
            </label>
        </div>
    </div>
</div>
</template>
<script>
import { mapGetters,mapActions } from 'vuex'
export default {
    name:'ModeSwitch',
    data(){
        return{
            dark:false
        }
    },
    computed : {
        ...mapGetters({
            stateDark: 'dark'
        })
    },
    mounted(){
        this.dark = this.stateDark
        this.changeMode(this.stateDark)
    },
    watch:{
     dark:function(){
        this.changeMode(this.dark)
     }
    },
    methods: {
        ...mapActions({
        modeChange: 'layoutModeAction'
        }),
        changeMode(value){
            this.modeChange({ dark: value })
            const body = document.querySelector('body')
            if (value) {
                body.classList.add('dark')
            } else {
                body.classList.remove('dark')
            }
        },
    }
}
</script>