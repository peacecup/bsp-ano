import Mock from 'mockjs';

var Random = Mock.Random ;
Random.extend({
    roleOption: function(date) {
        var constellations = ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8']
        return this.pick(constellations)
    },
    orgOption:function(data){
    	var options = ['1','2','3','4'];
    	return this.pick(options);
    },
    stateOption:function(data){
    	var options = ['1','2','3'];
    	return this.pick(options);
    },	
    orgcn:function(data){
    	var options = ['金融部','政企部','环保部','航天部','研发部','安全部'];
    	return this.pick(options);
    }
})
Random.roleOption();
Random.orgOption();
Random.stateOption();
Random.orgcn();
// => "水瓶座"
Mock.mock('@roleOption');
Mock.mock('@orgOption');
Mock.mock('@stateOption');
Mock.mock('@orgcn');


export var  userListData = Mock.mock('/static/userList.json',{
	'userList|1-10': [{
		'id|1-10': '',
		'label|1': '@orgcn',
		'children|1-10':[{
			'id|1-10': '',
		    'label': '@cname'
		}]
	}]
})

export var userData = Mock.mock('/user/getUserById',{
	'id':1,
	'userName': '@cname',
	'loginName|2-10': 's' ,	
	'loginPw': /\d{6,20}/,
	'org|1': "@orgOption",
	'role|1-8': ["@roleOption"],
	'state|1': "@stateOption"
})
