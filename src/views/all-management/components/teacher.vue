<template>
  <div class="table">
    <div class="table-header">
      <div class="header-left">
        <i-button type="info">新建老师</i-button>
        <i-button type="info">导入老师</i-button>
        <i-button type="text">下载模板</i-button>
      </div>
      <div class="header-right">
        <i-input icon="ios-search" placeholder="请输入..." style="width: 200px"></i-input>
        <Dropdown>
          <a href="javascript:void(0)">
            下拉菜单
            <Icon type="arrow-down-b"></Icon>
          </a>
          <Dropdown-menu slot="list">
            <Dropdown-item>驴打滚</Dropdown-item>
            <Dropdown-item>炸酱面</Dropdown-item>
            <Dropdown-item disabled>豆汁儿</Dropdown-item>
            <Dropdown-item>冰糖葫芦</Dropdown-item>
            <Dropdown-item divided>北京烤鸭</Dropdown-item>
          </Dropdown-menu>
        </Dropdown>
      </div>
    </div>
    <div class="table-content">
      <i-table border :columns="columns1" :data="data1"></i-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "student",
  components: {},
  mounted() {
    //
  },
  data() {
    return {
      columns1: [
        {
          title: "姓名",
          key: "name"
        },
        {
          title: "岗位",
          key: "job"
        },
        {
          title: "班级",
          key: "class"
        },
        {
          title: "科目",
          key: "subject"
        },
        {
          title: "入校时间",
          key: "jointime"
        },
        {
          title: "Action",
          key: "action",
          width: 150,
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "primary",
                    size: "small"
                  },
                  style: {
                    marginRight: "5px"
                  }
                },
                "查看"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "error",
                    size: "small"
                  }
                },
                "删除"
              )
            ]);
          }
        }
      ],
      data1: [
        {
          name: "王小明",
          job: "数学",
          class: "3班",
          subject: "语文",
          jointime: "2018-8-8"
        }
      ]
    };
  }
};
</script>
<style>
.header-right {
  float: right;
}
.table-content {
  width: 100%;
}
</style>
