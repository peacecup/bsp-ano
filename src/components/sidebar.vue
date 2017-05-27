<template>
    <div class="sidebar">
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="light" @open="makesure" router>
            <template v-for="level1 in menuData">
                <el-submenu v-bind:index="level1.index" @open="makesure">
                    <template slot="title" class="level1">{{level1.name}}</template>
                    <template v-for="level2 in level1.menuData">
                        <template v-if="level2.menuData">
                            <el-submenu v-bind:index="level2.index" @open="makesure">
                            <template slot="title" class="level2">{{level2.name}}</template>
                            <template v-for="level3 in level2.menuData">
                                <template v-if="level3.menuData">
                                    <el-submenu v-bind:index="level3.index" @open="makesure">
                                        <template slot="title" class="level3">{{level3.name}}</template>
                                        <template v-for="level4 in level3.menuData">
                                             <el-menu-item  v-bind:index="level4.index" class="level4" @open="makesure">{{level4.name}}</el-menu-item>
                                        </template>
                                    </el-submenu>
                                </template>
                                <template v-else>
                                    <el-menu-item  v-bind:index="level3.index" class="level3" @open="makesure">{{level3.name}}</el-menu-item>
                                </template>
                            </template>
                            </el-submenu>
                        </template>
                        <template v-else>
                           <el-menu-item  v-bind:index="level2.index" class="level2" @open="makesure">{{level2.name}}</el-menu-item>
                        </template>
                    </template>
                </el-submenu>
            </template>
        </el-menu>
    </div>
</template>

<script>
    import menuJson from '../static/menu/menu.json';
    export default {
        data(){
            return{
                menuData:[]
            }
        },
        methods: {
            makesure(index,indexPath){
                console.log(index+"-"+indexPath);
            }

        },
    	computed : {
    		onRoutes(){
    			return this.$route.path.replace('/','');
    		}
    	},
        created(){
                this.menuData = menuJson.data;
        }
    }
</script>

<style scoped>
.sidebar{
    flex: 2;
    border-radius: 2px;
    margin: 3px;
	background: whitesmoke;
    overflow-y: auto;

}
.level1{
    font-size: 15px;
}
.level2{
    font-size: 13px;
}
.level3{
    font-size: 11px;
}
.level4{
    font-size: 9px;
}
</style>