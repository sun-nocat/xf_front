<template>
    <!-- <div class="item-choose bg-full" style="background-size:100% 100%;background-image: url('/static/dist/src/assets/first.jpg');height: 100%;"> -->
    <div class="item-choose">
        <img src="/static/dist/src/assets/first.jpg" alt="" class="background">
        <div class="center-button">
            <el-row class="table_center">
                <el-button type="primary" style="font-size: 20px;" plain @click="skip('recent')">查看消费账单
                </el-button> <br>
                <el-button type="success" style="font-size: 20px;margin-top: 30px;" plain @click="skip('sumup')">学期账单总结</el-button>
            </el-row>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        skip(value) {
            if (value == 'recent') {
                this.$router.push('/index')
            } else {
                this.$router.push('/swiper')
            }
        }
    },
}
</script>
<style lang="scss" scoped>
.item-choose {
    height:100%;
    width: 100%;
    // position: relative;
    // display: flex;
    // justify-content: center;
    // align-items: center;
}
.center-button {
    height: 100%;
    width: 100%;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    display: table;
}
.table_center{
    display: table-cell;
    vertical-align: middle;
    text-align: center;
}

.background {
    position: fixed;
    width: 100%;
    height: 100%;
    display: block;
    z-index: -100;
}
</style>