<template>
    <div class="header">
        <div class="logo"> 
            <img src="../images/gold.png">组织机构平台
        </div>
        <div class="info">
            <el-dropdown trigger="click" @command="handleCommand">
                <span class="el-dropdown-link">
                    <img src="../images/user.png" class="user-logo">{{loginName}}
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="logout"><i class="el-icon-upload2"></i>退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
    export default {
      data(){
        return{
          defaultName : "chenning"
        }
      },
      computed:{
        loginName(){
          let loginName = localStorage.getItem("now_loginName");
          return loginName ? loginName : this.defaultName;
        },
        nowDate(){
          let date = new Date();
          return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+(date.getDay()+1);
        },
        exchangest(){
          return "初始化中";
        }
      },
      methods:{
          handleCommand(command) {
              if(command == 'logout'){
                  localStorage.removeItem('now_loginName');
                  this.$router.push('/login');
              }
          }
      }
    }
</script>

<style scoped>
.header{
  flex-basis:60px;
  font-size: 22px;
  line-height: 60px;
  color: #fff;
  background-color: #227fd1;

}
.logo{
  float: left;
  text-align: center;
  width: 250px;
  display: flex;
  flex-direction: row;
  align-items: stretch;

}
.logo img{
  flex-basis: 40px;
  height: 40px;
  margin: 10px;
}
.info{
  float: right;
  color: #fff;
  padding-right: 50px;
  font-size: 16px;
}
.info .el-dropdown-link{
  position: relative;
  display: inline-block;
  padding-left: 50px;
  color: #fff;
  cursor: pointer;
  vertical-align: middle;
}
.info .user-logo{
  position: absolute;
  left:0;
  top: 15px;
  width:40px;
  height:40px;
  border-radius: 50%;
}
.el-dropdown-menu__item{
  text-align: center;
}
</style>
