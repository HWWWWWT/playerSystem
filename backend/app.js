const jsonServer = require('json-server')
const uuid = require('node-uuid');
const bodyParser = require('body-parser')
const low = require('lowdb')
const storage = require('lowdb/file-async')


var crypto = require('crypto');

//创建一个Express服务器
const server = jsonServer.create();

//使用json-server默认选择的中间件（logger，static, cors和no-cache）
server.use(jsonServer.defaults());

//使用body-parser中间件
server.use(bodyParser.json());


//数据文件
const dbfile = process.env.prod === '1' ? 'db.json' : '_db.json';

//创建一个lowdb实例
const db = low(dbfile, {storage});



var md5 = function(str) {
  return crypto
    .createHash('md5')
    .update(str.toString())
    .digest('hex');
};

//添加新球员
server.post('/player/add', (req, res) => {
  const item = req.body;
  var player = db('player')
    .find({
      playname: item.playname
    });
  if (player) {
    res.json({
      success: false,
      message: '"' + item.playname + '" is exists'
    })
  }else {
    item.id = uuid.v1();
    item.createDate = new Date().toLocaleDateString();
    db('player').push(item).then(() => {
      res.json({'success':true, data:item});
  });
  };

});

//删除已有球员
server.get('/player/del/:id', (req, res)=>{
  db('player').remove({id: req.params.id}).then(()=>{
  res.json({'success': true, message:'删除成功'})
})
})

//获取所球员
server.get('/player', (req, res) => {
  const player = db('player');
res.json({'success':true, data:player})
})

//根据id获取球员
server.get('/player/:id', (req, res) => {
  const player = db('player').find({id: req.params.id});
  console.log(player);
  res.json({'success':true, data:player})

})

//更新已有球员
server.post('/player/update', (req, res) => {
  const item = req.value;
db('player').chain().find({id:item.id}).assign(item).value();
res.json({'success':true, data:item})
})

//发布问卷
server.get('/questionnaire/publish/:id', (req, res)=>{
  const item = db('questionnaires').chain().find({id:req.params.id});
item.assign({state:1}).value();
res.json({'success':true, data:item});
});

// get userinfo
server.get('/user', function(req, res) {
  var user = db('user')

  res.json({
    success: true,
    data: user
  });
});

// register
server.post('/user/add', function(req, res) {

  var item = req.body;
  console.log("-----------"+item.email)
  var user = db('user')
    .find({
      email: item.email
    });
  if (user) {
    res.json({
      success: false,
      message: '"' + item.email + '" is exists'
    })
  } else {
    item.regPassword = md5(item.regPassword);
    item.createDate = new Date().toLocaleDateString();
    db('user')
      .push(item)
      .then(function() {
        res.json({
          success: true
        });
      });
  }
});

// login
server.post('/login', function(req, res) {
  console.log('req:'+req.userName)
  var data = req.body || 11;
  console.log('data:'+data)
  var email = data.userName;
  console.log('email:'+email)
  var user = db('user')
    .find({
      email: email
    });

  if (user && user.regPassword === md5(data.password)) {
    // todo reset session
    res.json({
      success: true
    });
  } else {
    res.json({
      success: false,
      message: 'username or password error'
    });
  }
});

//路由配置
const router = jsonServer.router(dbfile);
server.use('/api', router);

//启动服务，并监听5000端口
server.listen(5000, () => {
  console.log('server is running at ', 5000, dbfile);
});
