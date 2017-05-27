<template>
    <div class="login-wrap">
        <div class="login-title">后台管理系统</div>
        <div class="login-form">
            <el-form ref="bspForm" :model="bspForm" label-width="80px" :rules="bspRules" 
                label-position="left" class="demo-ruleForm">
                <el-form-item label="用户名" prop="loginName">
                    <el-input v-model="bspForm.loginName" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="bspForm.password" placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('bspForm')">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
    	data(){
    		return{
    			bspForm:{
    				loginName:'',
    				password:''
    			},
    			bspRules:{
    				loginName:{required : true,message : '请输入用户名',trigger:'blur'},
    				password:{required : true,message : '请输入密码',trigger : 'blur'}
    			}
    		}
    	},
    	methods:{
    		submitForm:function(formName){
    			const self = this;
    			self.$refs[formName].validate((valid)=>{
    				if(valid){
    					localStorage.setItem('now_loginName', self.bspForm.loginName);
    					self.$router.push("/bsp");
    				}else{
    					console.log('Error Submit ! !');
    					return false;
    				}
    			});
    		}
    	}
    }
</script>

<style scoped>
.login-wrap{
    width: 100%;
    height:100%;
    display: flex;
    flex-direction: column;
    flex-wrap: none;
    justify-content: flex-start;
    align-items: stretch;
}

.login-title{
    flex: 4;
	font-size: 30px;
	color: #0088ff;
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-start;
    align-self: center;
}
.login-form{
    flex: 6;
	margin: auto;
	padding: 40px;
	border-radius: 5px;
}
el-button{
    width: 100%;

}
</style>