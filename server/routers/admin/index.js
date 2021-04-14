module.exports = app => {
    const express = require('express')
    const router = express.Router()
    const Category = require('../../models/Category') //引用的数据库模型
    
    
    //定义post接口
    router.post('/categories', async (req, res) => {
      
      const model = await Category.create(req.body)
      
      res.send(model)
        //发往前端
    })
    
    router.get('/categories', async (req, res) => {
      const items = await Category.find() //从数据库获取数据
      res.send(items)
    })
    
    router.get('/categories/:id', async (req, res) => {
      const a = await Category.findById(req.params.id) //从数据库获取数据
      res.send(a)
    })
    
    router.put('/categories/:id', async (req, res) => {
      const b = await Category.findByIdAndUpdate(req.params.id,req.body) //从数据库获取数据
      res.send(b)
    })

    router.delete('/categories/:id', async (req, res) => {
      const b = await Category.findByIdAndDelete(req.params.id,req.body) //从数据库获取数据
      res.send(b)
    })

    app.use('/admin/api', router)
  }


  //路由文件 定义各种各样的服务端接口