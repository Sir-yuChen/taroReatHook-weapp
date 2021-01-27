import { useState, useEffect } from 'react'
import Taro, { useRouter } from '@tarojs/taro'
import { View, Text, Button, Image } from '@tarojs/components'
import React, { Component } from 'react'

import './index.less'
import Child from '../child/child.jsx'

function Index(){

  const [userName ,setUserName] = useState('函数式，组件式编程')

  const router  = useRouter ()

  useEffect(()=>{
    // console.log(router.params)//接收URl传递参数 1. 创建router 2.使用对象
  },[])
  
  return ( 
    <View>
        <Text>{userName}</Text>
        <Child></Child>
        <Button>{router.params.blogParms+router.params.blogTitle}</Button>
        <View>
          {/* 
            引入静态文件  导入标签 Image
          */}
          <Image src={require('../img/85.png')} width="100px" height="100px"/>
        </View>
    </View>
  )

}

export default Index;