<template>
    <div class="leaseRight">
        <div class="content-header">
            <h3>租借权限管理</h3>
            <el-breadcrumb separator="/" class="bread">
                <el-breadcrumb-item>仓储业务管理</el-breadcrumb-item>
                <el-breadcrumb-item>客户交割属性管理</el-breadcrumb-item>
                <el-breadcrumb-item>租借质押权限及额度管理</el-breadcrumb-item>
                <el-breadcrumb-item>租借权限管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="content-query">
            <el-collapse v-model="activeNames" @change="handleChange" class="collapse">
                <el-collapse-item title="查询条件" name="1">
                    <el-form :model="leaseRight"  :inline="true" ref="leaseRight" label-width="120px">
                        <el-form-item label="借出方客户代码" prop="lendClientID">
                            <el-input v-model="leaseRight.lendClientID"></el-input>
                        </el-form-item> 
                        <el-form-item label="借出方客户名称" prop="lendClientName">
                            <el-input v-model="leaseRight.lendClientName" disabled></el-input>
                        </el-form-item>
                        <el-form-item label="借入方客户代码" prop="borrowClientID">
                            <el-input v-model="leaseRight.borrowClientID"></el-input>
                        </el-form-item> 
                        <el-form-item label="借入方客户名称" prop="borrowClientName">
                            <el-input v-model="leaseRight.borrowClientName" disabled></el-input>
                        </el-form-item> 
                        <div class="block">
                            <span class="wrapper">
                                <router-link to="/user">
                                    <el-button type="primary" icon="plus">新增</el-button>
                                </router-link>
                                <router-link to="/leaseRight-edit" :disabled="true">
                                    <el-button type="primary" icon="edit" :disabled="true">
                                        修改
                                    </el-button>
                                </router-link>
                                <router-link to="/user" :disabled="true">
                                    <el-button type="primary" icon="delete" :disabled="true">
                                        删除
                                    </el-button>
                                </router-link>
                                <router-link to="/user">
                                    <el-button type="primary" icon="check">
                                        Excel导出
                                    </el-button>
                                </router-link>
                            </span>
                        </div>
                    </el-form>
                </el-collapse-item>
                <el-collapse-item title="浏览租借权限" name="2">
                    <el-table :data="tableData" border highlight-current-row >
                        <el-table-column  type="index" width="65" label="序号"></el-table-column>
                        <template v-for="colum in colums">
                            <el-table-column :prop="colum.prop" :label="colum.label" :width="colum.width">
                            </el-table-column>
                        </template>     
                    </el-table>
                    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                       :current-page="currentPage" :page-sizes="[20, 50, 100]" :page-size="100"
                       layout="total, sizes, prev, pager, next, jumper" :total="400">
                    </el-pagination>
                </el-collapse-item>
            </el-collapse>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
            return {
                leaseRight: {
                    lendClientID: '',
                    lendClientName: '',
                    borrowClientID:'',
                    borrowClientName:''
                },
                activeNames: ['1','2'],
                colums:[],
                tableData: [],
                currentPage:1
            }
        },
        methods: {
            handleChange() {
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                this.currentPage = val;
                console.log(`当前页: ${val}`);
            }
        },
        computed: {

        },
        mounted(){
            let self = this;
            var promise = new Promise((resolve,reject)=>{
                axios.get('static/server/leaseRight.json')
                .then(response=>resolve(response.data));
            })
            console.log(promise);
            promise.then((data)=>{
                //console.log(res);
                //let data = res.data;
                self.$data.tableData = data.tableData;
                self.$data.colums = data.colums;
            }).catch((error)=>{
                console.log(error);
            })
            /*axios.get('static/server/leaseRight.json')
            .then(function(res){
                let data = res.data;
                self.$data.tableData = data.tableData;
                self.$data.colums = data.colums;
            });*/
        }
}
</script>
<style scoped>
.leaseRight{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
}

.content-header {
    flex-basis: 60px;
}

.content-query {
    flex: 1;
}
.block{
    text-align: right;
}

</style>
