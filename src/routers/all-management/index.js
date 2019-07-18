export default {
  path: "/allmanage",
  redirect: '/allmanage/teacher',
  component: () => import("@/views/all-management"),
  children: [
    {
      path: 'teacher',
      name: '老师管理',
      meta: {
        icon: 'teacher',
        title: '老师管理'
      },
      component: () => import('@/views/all-management/components/teacher')
    },
    {
      path: 'student',
      name: '学生管理',
      meta: {
        icon: 'student',
        title: '学生管理'
      },
      component: () => import('@/views/all-management/components/students')
    },
    {
      path: 'class',
      name: '班级管理',
      meta: {
        icon: 'student',
        title: '班级管理'
      },
      component: () => import('@/views/all-management/components/class')
    }
  ],
};
