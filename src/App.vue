<template>
  <div id="app">
    <v-app>
      <v-toolbar 
        flat color="primary" 
        dark 
        height="50"s
        clipped-left 
        app 
      >
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-icon>shopping_cart</v-icon>
        <v-toolbar-title>晶品汇管理平台</v-toolbar-title>
        <v-spacer></v-spacer>
        <!--大螢幕才會出現-->
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat>Link One</v-btn>
          <v-btn flat>Link Two</v-btn>
          <v-btn flat @click.prevent="logout"><v-icon>power_settings_new</v-icon>登出</v-btn>
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
              :key="'mobile'+i"
              @click.prevent="logout"
            >
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
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
                @click=""
              >
                <v-list-tile-title v-text="admin[0]"></v-list-tile-title>
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
                v-for="(crud, i) in cruds"
                :key="i"
                @click=""
              >
                <v-list-tile-title v-text="crud[0]"></v-list-tile-title>
                <v-list-tile-action>
                  <v-icon v-text="crud[1]"></v-icon>
                </v-list-tile-action>
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
              key="manageEmp"
              @click=""
            >
              <v-list-tile-action></v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>人员管理</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile
              key="IDpush"
              @click=""
            >
              <v-list-tile-action></v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>识别推送</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile
              key="snapshotReg"
              @click=""
            >
              <v-list-tile-action></v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>抓拍注册</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile
              key="customerIdList"
              @click=""
            >
              <v-list-tile-action></v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>客户识别列表</v-list-tile-title>
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
              @click=""
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
              key="areaManage"
              @click=""
            >
              <v-list-tile-action></v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>区域管理</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>   
            <v-list-tile
              key="faceGroup"
              @click=""
            >
              <v-list-tile-action></v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>人脸库分组</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>   
            <v-list-tile
              key="tableSearchGroup"
              @click=""
            >
              <v-list-tile-action></v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>报表查询分组</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>   
            <v-list-tile
              key="empManage"
              @click=""
            >
              <v-list-tile-action></v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>职员管理</v-list-tile-title>
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
        admins: [
        ['Management', 'people_outline'],
        ['Settings', 'settings']
      ],
      cruds: [
        ['Create', 'add'],
        ['Read', 'insert_drive_file'],
        ['Update', 'update'],
        ['Delete', 'delete']
      ],
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: '登出' }
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
