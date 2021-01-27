import Taro from '@tarojs/taro'
import {View , Text ,Button} from '@tarojs/components'
import React, { Component } from 'react'
import { useState, useEffect } from 'react'

function Blog(){
    
    const [blogParms, setBlogParms] = useState("这是URL传递的参数:")
    const [blogTitle ,setBlogTitle] = useState('JSPangBlog')
    const [childParams ,setChildParams] = useState('childParams')

    const [dataList,setDataList] = useState([])//定义一个数组

    const gotoIndex=()=>{
        //传递多个参数
        Taro.navigateTo({url:'/pages/index/index?blogParms='+blogParms+'&blogTitle='+blogTitle})
    }
    const gotoIndex2=()=>{
        //传递多个参数
        Taro.navigateTo({url:'/pages/index/index?blogParms='+blogParms})
    }
    const gotochild=()=>{
        //传递多个参数  需要在全局文件中定义 pages配置路由才能跳转
        Taro.navigateTo({url:'/pages/child/child?childParams='+childParams})
    }
    
    //请求远程数据
    const testHandler= ()=>{
        Taro.request({
            url:'http://8.131.58.227:3000/comment/music?id=186016&limit=1'
        }).then(res=>{
             setDataList(res.data.hotComments)
            // this.setState.setDataList(res.data)
            console.log(res.data)
        })
    }


    //定义一个数组
    const girls = [
        {id:1,name:'谢大脚'},
        {id:2,name:'刘英'},
        {id:3,name:'王小蒙'},
        {id:4,name:'香秀'}
    ]


    return (
        <View>
            <Text>Bolg </Text>
            <Button onClick={gotoIndex}>我要去Index页面</Button>
            <Button onClick={gotoIndex2}>我要去Index2页面</Button>
            <Button onClick={gotochild}>我要去child页面</Button>
            <Button onClick={testHandler}>请求远程数据</Button>
            {/* 
                循环定义的数组,  使用ES6 map方法
            */}
             { girls.map((item,index)=>{
                return (
                    <View>
                        <Text>{item.name}</Text>
                        <Text>{index}</Text>
                        <View>
                            男主角是：{index==1?'玉田':'刘能'}
                        </View>
                        <view>
                            男主角是：{index==1 && '短路成功' || '失败成功'}
                        </view>
                    </View>
                )
            }) }
            <View>
            {/* 循环获得的远程数据 */}
            {
                dataList.map((item,index)=>{
                    return (
                        <View key={index} >  {item.content} </View>
                        //取数组中的值，‘.’对象中的属性
                    )
                })
            }
            </View>
        </View>
    )
}

export default Blog