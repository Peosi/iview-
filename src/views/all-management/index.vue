<template>
  <section>
     <ul class="list-warpper">
      <li class="list-item" v-for="(info, i) in listData" :key="`item-${i}`">
        <a class="link" :href="`${info.linkTo}`">{{info.name}}</a>
      </li>
    </ul>
    <div>
      <router-view></router-view>
    </div>
  </section>
</template>


<script>
export default {
  name: "all-management",
  data(){
    return {
      listData :[
        {
          name: '教师管理',
          icon: '',
          linkTo: '/allmanage/teacher', 
        },
         {
          name: '学生管理',
          icon: '',
          linkTo: '/allmanage/student', 
        },
         {
          name: '班级管理',
          icon: '',
          linkTo: '/allmanage/class', 
        }
      ]
    }
  }
};
</script>

<style>
.list-warpper{
  display: flex;
}
.list-item{
  list-style: none;
  padding: 18px;
  font-size: 16px;
}
</style>


