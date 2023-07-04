<template>
    <!-- 用传过来 href 进行跳转 --> <!-- 用传过来的 type 修改颜色 --> 
    <a :href="href || undefined" :class="[`hello-world-${type}`]" >
        <!-- 使用默认插槽来填充文本 -->
        <slot/>
    </a>
</template>

<script>
    export default {
        // 等下 index.js 里面要用到
        name:"helloWorld",
        props: {
            // 限制类型
            href: String,
            type: {
                type: String,
                default: 'default'
            }
        }
    }
</script>

<style lang="scss" scoped>
    // 定义链接字体颜色
    .hello-world-default {
        color: #606266;
    }
    .hello-world-primary {
        color: #409eff;
    }
</style>