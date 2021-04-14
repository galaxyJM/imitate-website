const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        name: {type: String}

    }
)

module.exports = mongoose.model('Category',schema)
//数据库模型 定义模型数据的存放类型