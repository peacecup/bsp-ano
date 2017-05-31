<template>
  <div class="userList">
    <div class="user_tree">
    	<el-input placeholder="输入关键字进行过滤" v-model="filterText"></el-input>
        <el-tree :data="userList" :props="items" default-expand-all  node-key="id" highlight-current @node-click="onNodeClick"
            :filter-node-method="filterNode" ref="user_tree"  :render-content="renderContent" :expand-on-click-node="false">
        </el-tree>
    </div>
    <div class="user_message">
        <el-tabs type="border-card" value="first">
            <el-tab-pane label="用户信息" name="first">
                <user-message></user-message>
            </el-tab-pane>
            <el-tab-pane label="权限配置" name="second">
            	<permission></permission>
            </el-tab-pane>
        </el-tabs>
    </div>
  </div>
</template>

<script scope>

import axios from 'axios';
import userMessage from './userMessage.vue'; 
import permission from './permission.vue';
let id = 1000;

export default {
  	watch: {
        filterText(value){
          this.$refs.user_tree.filter(value);
        }
    },
    data() {
        return {
          filterText: '',
          items: {
            children: 'children',
            label: 'label'
          }
        }
    },
    components: {
    	userMessage,
    	permission
    },
    computed: {
        //设置动态属性，获取用户列表
        userList:function() {
          return this.$store.state.system.userList;
        }
    },
    methods: {
        filterNode(value, data) {
          if (!value) return true;
          return data.label.indexOf(value) !== -1;
        },
        getUserList(store) {
          //触发获取用户列表请求
          store.dispatch('GET_USERLIST');
        },
        remove(store, data) {
        	this.$confirm('确认要删除该用户吗？','提示',{
        		confirmButtonText: '确认',
        		cancelButtonText: '取消',
        		type: 'warning'
        	}).then(()=>{
        		store.remove(data);
        		this.$message({
        			type: 'success',
        			message: '删除成功！'
        		});
        	}).catch(()=>{
        		this.$message({
        			type: 'info',
        			message: '已取消删除！'
        		});
        	});
        },
        renderContent(h, { node, data, store }) {
          return (
            <span>
              <span>
                <span>{node.label}</span>
              </span>
              <span style="float: right; margin-right: 20px">
                <el-button size="mini" on-click={ () => this.remove(store, data) }><i class="el-icon-delete"></i></el-button>
              </span>
            </span>
          );
        },
        onNodeClick(data,node,component){
        	this.$store.dispatch('SET_CURRENT_NODE',data.id);
        }
    },
    mounted: function() {
        this.getUserList(this.$store);
    }
}
</script>

<style scope>
.userList{
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: stretch;
	width: 100%;
	height: 100%;
}
.user_tree{
	flex: 3;
	margin-right: 10px;
	overflow-y: scroll;
}
.user_message{
	flex: 12;
}
</style>
