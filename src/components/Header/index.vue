<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  height: 100%;
}
Hrader {
  height: 80px;
  padding: 0 0;
  background-color: #f5f7f9;
}
.left {
  height: 500px;
}

.ivu-layout {
  height: 100%;
}
.left ivu-layout {
  height: 70px;
  width: 70px;
}
.header-left {
  float: left;
  height: 64px;
  width: 400px;
  text-align: center;
  margin-top: 14px;
}
.logo {
  width: 64px;
  height: 64px;
  vertical-align: middle;
}
.school-name {
  float: right;
  width: 200px;
  font-size: 25px;
}
.ivu-layout-header {
  height: 89px;
  background-color: white;
  border-bottom: solid 1px rgb(204, 204, 204);
  width: 100%;
  padding: 0;
}
.header-right {
  float: right;
  height: 64px;
  width: 400px;
  text-align: center;
  margin-top: 14px;
}
.username {
  white-space: nowrap;
  text-align: left;
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  text-decoration: none;
  font-family: 微软雅黑;
  color: rgb(67, 67, 67);
  float: left;
}
.ivu-menu ivu-menu-light ivu-menu-vertical {
  font-size: 24px;
  height: 100%;
}
</style>

<template>
  <div class="layout">
    <Layout>
      <Header>
        <div class="header-left">
          <img src="@/assets/logo.png" class="logo" />
          <span class="school-name">****学校名称</span>
        </div>
        <div class="header-right">
          <span class="username">欢迎XXX登陆</span>
          <Icon type="md-home" style="font-size:30px;" />
          <Icon type="md-close-circle" style="font-size:30px;float:right;margin-top:18px" />
        </div>
      </Header>
      <Layout class="conten-mau">
        <Sider hide-trigger :style="{background: '#fff'}">
          <Menu active-name="1-2" :open-names="['1']" style="font-size:24px;height:100%">
            <Submenu name="1" style="border-bottom: solid 1px rgb(204, 204, 204)">
              <template slot="title">
                <Icon type="md-home"></Icon>首页
              </template>
            </Submenu>
            <Submenu name="2" style="border-bottom: solid 1px rgb(204, 204, 204)">
              <template slot="title">
                <Icon type="ios-people"></Icon>综合管理
              </template>
            </Submenu>
            <Submenu name="3" style="border-bottom: solid 1px rgb(204, 204, 204)">
              <template slot="title">
                <Icon type="ios-paper"></Icon>动态管理
              </template>
            </Submenu>
            <Submenu name="4" style="border-bottom: solid 1px rgb(204, 204, 204)">
              <template slot="title">
                <Icon type="md-calendar"></Icon>值周管理
              </template>
            </Submenu>
            <Submenu name="5" style="border-bottom: solid 1px rgb(204, 204, 204)">
              <template slot="title">
                <Icon type="ios-cog"></Icon>系统设置
              </template>
            </Submenu>
          </Menu>
        </Sider>
        <Layout :style="{padding: '0 24px 24px'}" class="content">
          <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">Content</Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>
<script>
export default {};
</script>