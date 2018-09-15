<template>
  <div id="app">
    <v-app>
      <v-toolbar 
        flat color="primary" 
        dark 
        height="50"
        clipped-left 
        app 
      >
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-icon>shopping_cart</v-icon>
        <v-toolbar-title>晶品汇管理平台</v-toolbar-title>
        <v-divider
          class="mx-3"
          inset
          vertical
        ></v-divider>
        <span class="subheading">{{ this.$route.name }}</span> 
        
        <v-spacer></v-spacer>
        <!--大螢幕才會出現-->
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat><v-icon>perm_identity</v-icon>User</v-btn>
          <v-btn flat><v-icon>star_border</v-icon>品牌</v-btn>
          <v-btn flat @click.prevent="logout"><v-icon>power_settings_new</v-icon>注销</v-btn>
        </v-toolbar-items>
        <!--小螢幕才會出現-->
        <v-menu bottom left transition="slide-y-transition" class="hidden-sm-and-up">
          <v-btn
            slot="activator"
            dark
            icon
          >
            <v-icon>more_vert</v-icon>
          </v-btn>

          <v-list>
            <v-list-tile
              v-for="(item, i) in items"
              :key="'mobile-'+i"
              @click.prevent="logout"
            >
              <v-list-tile-title><v-icon>{{ item.icon }}</v-icon>{{ item.title }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-toolbar>
      <v-navigation-drawer
        color="darken-2"
        dark
        width="210"
        v-model="drawer"
        enable-resize-watcher
        clipped
        app
      >
        <v-list>
          <v-list-tile to="/home">
            <v-list-tile-action>
              <v-icon>home</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>首页</v-list-tile-title>
          </v-list-tile>
          <v-list-group
            prepend-icon="assessment"
          >
            <v-list-tile slot="activator">
              <v-list-tile-title>报表查询</v-list-tile-title>
            </v-list-tile>

            <v-list-group
              no-action
              sub-group
            >
              <v-list-tile slot="activator">
                <v-list-tile-title>会员分析报表</v-list-tile-title>
              </v-list-tile>

              <v-list-tile
                v-for="(admin, i) in admins"
                :key="i"
                :to="{name: admin.title}"
              >
                <v-list-tile-title v-text="admin.title"></v-list-tile-title>
              </v-list-tile>
            </v-list-group>

            <v-list-group
              sub-group
              no-action
            >
              <v-list-tile slot="activator">
                <v-list-tile-title>客流量分析报表</v-list-tile-title>
              </v-list-tile>

              <v-list-tile
                v-for="(kll, i) in klls"
                :key="i"
                :to="{name: kll.title}"
              >
                <v-list-tile-title v-text="kll.title"></v-list-tile-title>
              </v-list-tile>
            </v-list-group>
          </v-list-group>
          <v-list-group
            prepend-icon="face"
          >
            <v-list-tile slot="activator">
              <v-list-tile-title>客户管理</v-list-tile-title>
            </v-list-tile>
            <v-list-tile
              v-for="(customer, i) in customers"
              :key="i"
              :to="{name: customer.title}"
            >
              <v-list-tile-action></v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title v-text="customer.title"></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>

          <v-list-group
            prepend-icon="videocam"
          >
            <v-list-tile slot="activator">
              <v-list-tile-title>设备管理</v-list-tile-title>
            </v-list-tile>
            <v-list-tile
              key="cameraManage"
            >
              <v-list-tile-action></v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>主机设备</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>   
          </v-list-group>

          <v-list-group
            prepend-icon="settings"
          >
            <v-list-tile slot="activator">
              <v-list-tile-title>系统管理</v-list-tile-title>
            </v-list-tile>

            <v-list-tile
              v-for="(system, i) in systems"
              :key="i"
              :to="{name: system.title}"
            >
              <v-list-tile-action></v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title v-text="system.title"></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
        </v-list>
      </v-navigation-drawer>
      <v-content>
        <router-view/>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'app',
  components: {
    Home
  },
  data () {
      return {
        drawer: true,
        //會員分析報表
        admins: [
          { title: '会员分析日报表' },
          { title: '会员分析周报表' },
          { title: '会员分析月报表' }
        ],
        //客流量分析報表
        klls: [
          { title: '客流时报表' },
          { title: '客流日报表' },
          { title: '客流周报表' },
          { title: '客流月报表' }
        ],
        //手機模式右上角按鍵
        items: [
          { title: 'User', icon: 'perm_identity' },
          { title: '品牌', icon: 'star_border' },
          { title: '注销', icon: 'power_settings_new' }
        ],
        //客戶管理
        customers: [
          { title: '人员管理' },
          { title: '识别推送' },
          { title: '抓拍注册' },
          { title: '客户识别列表' }
        ],
        //系統管理
        systems: [
          { title: '区域管理' },
          { title: '人脸库分组' },
          { title: '报表查询分组' },
          { title: '职员管理' }
        ]
      }
    },
  methods: {
    logout(){
        localStorage.removeItem('token');
        this.$router.push('/login');
    },
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
