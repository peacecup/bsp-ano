<template>
    <div class="wrapper">
        <v-header></v-header>
        <div class="main">
            <v-sidebar></v-sidebar>
            <div class="content">
                <transition name="move" mode="out-in"><router-view></router-view></transition>
            </div>
        </div>
    </div>
</template>

<script>
    import vHeader from "../components/Header.vue";
    import vSidebar from "../components/Sidebar.vue";
    export default{
    	components:{
    		vHeader,
    		vSidebar
    	}
    }
</script>

<style scoped>
.wrapper{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;  
}
.main{
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: stretch;
}
.content{
    flex:12;
    padding: 20px;
    overflow-y: hidden;
    border-radius: 2px;
    margin: 3px;    
    background: whitesmoke; 
}
</style>