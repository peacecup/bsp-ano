<template>
  <div class="user-message">
    <el-form :model="user" :inline="true"  :rules="rules" ref="user" label-width="90px" class="demo-ruleForm">
      <el-row>
        <el-col :span="8">
          <el-form-item label="用户名称" prop="userName">
            <el-input v-model="user.userName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
            <el-form-item label="登录名称" prop="loginName">
              <el-input v-model="user.loginName"></el-input>
            </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="用户密码" prop="loginPw">
            <el-input v-model="user.loginPw" type="password" auto-complete="off"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="所属部门" prop="org">
            <el-select v-model="user.org" placeholder="请选择部门">
              <el-option label="南部" value="1"></el-option>
              <el-option label="北部" value="2"></el-option>
              <el-option label="东部" value="3"></el-option>
              <el-option label="西部" value="4"></el-option>
            </el-select> 
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="职位" prop="role">
            <el-select v-model="user.role" multiple placeholder="请选择职位">
              <el-option label="部门主管"   value='A1' key='A1'></el-option>
              <el-option label="部门总监"   value='A2' key='A2'></el-option>
              <el-option label="大项目经理" value='A3' key='A3'></el-option>
              <el-option label="项目经理"   value='A4' key='A4'></el-option>
              <el-option label="产品经理"   value='A5' key='A5'></el-option>
              <el-option label="开发leader" value='A6' key='A6'></el-option>
              <el-option label="开发工程师" value='A7' key='A7'></el-option>
              <el-option label="测试工程师" value='A8' key='A8'></el-option> 
            </el-select> 
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="状态" prop="state">
            <el-select v-model="user.state" placeholder="请选择状态">
              <el-option label="启用" value="1"></el-option>
              <el-option label="暂停" value="2"></el-option>
              <el-option label="注销" value="3"></el-option>
            </el-select>  
          </el-form-item> 
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item>
            <el-button type="primary" @click="submitForm('user')">保存</el-button>
            <el-button @click="resetForm('user')">取消</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script>
  export default {
    data() {
        return {
          rules: {
            userName: [{
              required: true,
              message: '请输入用户名称',
              trigger: 'blur'
            }],
            loginName: [{
              required: true,
              message: '请输入登录名称',
              trigger: 'change'
            }],
            loginPw: [{
              required: true,
              message: '请输入用户密码',
              trigger: 'change'
            },{
              min: 6,
              max: 20,
              message: '用户密码长度在6-20之间',
              trigger: 'change'
            }],
            org: [{
              required: true,
              message: '请选择所属机构',
              trigger: 'change'
            }],
            role: [{
              type:"array",
              required: true,
              message: '请至少选择一个职位',
              trigger: 'change'
            }],
            state: [{
              required: true,
              message: '请选择状态',
              trigger: 'change'
            }]
          }
        }
      },
      computed: {
        user(){
          return this.$store.state.system.cur_node;
        }
      },
      methods: {
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              alert('submit!');
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        }
      }
  }
</script>

<style scoped>
label{
  font-size: 12px;
}


</style>
