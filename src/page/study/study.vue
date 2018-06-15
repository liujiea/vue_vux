<template>
    <ul class="box">
        <li v-for="item in lists" v-html="item"></li>
    </ul>
</template>
<script type="text/javascript">
    export default {
        data () {
            return {
                list: []
            }
        },
        computed : {
            lists() {
                for(var i = 0; i < 4; i++) {
                    this.list.push(i);
                }
                return this.list;
            }
        }
    }
</script>
<style lang="less" scoped>
    .box {
        display: -webkit-flex;   /*Safari*/
        display: flex;
        // flex-direction: row;
        //row(默认值)： 主轴为水平方向， 起点在左端
        //row-reverse: 主轴为水平方向， 起点在右端
        //column: 主轴为垂直方向， 起点在上沿
        //column: 主轴为垂直方向， 起点在下沿
        // flex-wrap: wrap-reverse;
        //nowrap(默认值) 不换行
        //wrap： 换行， 第一行在上方
        //wrap-reverse: 换行， 第一行在下方
        // flex-flow: row wrap;
        //flex-flow属性是flex-direction属性和flex-wrap属性的简写方式, 默认值row nowrap
        //flex-flow: <flex-direction> || <flex-wrap>
        // justify-content: space-around;
        //flex-start(默认值) ： 左对齐
        //flex-end: 右对齐
        //center: 居中
        //space-between： 两端对齐， 项目之间的间隔都相等
        //space-around: 每个项目两侧的间隔相等， 所以， 项目之间的间隔比项目与边框的间隔大一倍；
        align-items: baseline;
        //flex-start: 交叉的起点对齐
        //flex-end: 交叉的终点对齐
        //center: 交叉州的中点对齐
        //baseline： 项目的第一行文字的基线对齐
        //strech(默认值): 如果项目未设置高度或设为auto， 将沾满整个容器的高度
        align-content: flex-start;
        //align-content属性定义了多跟轴线的对齐方式。 如果项目只有一根轴线， 该属性不起作用
        //flex-start: 与交叉轴的起点对齐
        //flex-end： 与交叉轴的终点对齐
        //center： 与交叉轴的中点对齐
        //space-between: 与交叉轴两端对齐， 轴线之间的间隔平均分布
        //space-around: 每根轴线两侧的间隔都相等。 所以， 轴线之间的间隔比轴线与边框的间隔大一倍
        //stretch: 轴线沾满整个交叉轴；
        li {
            width: 100px;
            height: 100px;
            line-height: 100px;
            background-color: yellow;
            list-style: none;
            margin: 1%;
            text-align: center;
        }
        li:nth-of-type(1) {
            height: 200px;
        }
        li:nth-of-type(2) {
            height: 150px;
        }
        li:nth-of-type(4) {
            height: 250px;
        }
    }
</style>