<template>
    <div>
        <el-form :model="formData" :rules="rules" :inline="true" :ref="" label-width="120px">
            <template v-for="formitem in fromData.items">
                <template v-if="formItem.type=='text'">
                    <el-input v-model="formData[formItem.name]"></el-input>
                </template>
                <template v-else-if="email">
                    
                </template>
                <template v-else-if="formItem.type=='password'">
                </template>
            </template>
        </el-form>
    </div>
</template>

<script>

    export default {
        data(){
            formData:{

            },
            rules:{

            },

        }
    }
</script>

