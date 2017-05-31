<template>
  <div class="userList">
    <div class="user_tree">
    	<el-input placeholder="输入关键字进行过滤" v-model="filterText">
    </el-input>
    <el-tree class="filter-tree" :data="userList" :props="items" default-expand-all  node-key="id"
            :filter-node-method="filterNode" ref="user_tree"  :render-content="renderContent">
    </el-tree>
    </div>
    <div class="user_message">
        <el-tabs type="border-card">
            <el-tab-pane label="用户信息" name="first">用户管理</el-tab-pane>
            <el-tab-pane label="权限配置" name="second">配置管理</el-tab-pane>
        </el-tabs>
    </div>
  </div>
</template>

<script scope>

import axios from 'axios';
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
          axios.get('/static/userList.json')
		  .then(function(res){
			store.dispatch('GET_USERLIST',res.data);
		  });
        },
        append(store, data) {
            store.append({ id: id++, label: 'testtest', children: [] }, data);
        },
        remove(store, data) {
            store.remove(data);
        },
        renderContent(h, { node, data, store }) {
          return (
            <span>
              <span>
                <span>{node.label}</span>
              </span>
              <span style="float: right; margin-right: 20px">
                <el-button size="mini" on-click={ () => this.append(store, data) }><i class="el-icon-plus"></i></el-button>
                <el-button size="mini" on-click={ () => this.remove(store, data) }><i class="el-icon-delete"></i></el-button>
              </span>
            </span>
          );
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
	flex: 2;
	margin-right: 10px;
}
.user_message{
	flex: 8;
}


</style>
