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
          <v-btn @click="dialog_user = true" flat><v-icon>perm_identity</v-icon>User</v-btn>
          <v-dialog
            v-model="dialog_user"
            max-width="600"
          >
            <v-card>
              <v-card-title class="headline">当前用户信息</v-card-title>
                <v-card-text>
                  <p>用户名称：123456789</p>
                  <p>真实姓名：OOO</p>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="blue darken-1"
                    flat="flat"
                    @click="dialog_user = false"
                  >
                    取消
                  </v-btn>
                  <v-btn
                    color="blue darken-1"
                    flat="flat"
                    @click="dialog_user = false"
                  >
                    确认
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          <v-btn @click="dialog_brand = true" flat><v-icon>star_border</v-icon>品牌</v-btn>
          <v-dialog
            v-model="dialog_brand"
            max-width="600"
          >
            <v-card>
              <v-card-title class="headline">品牌选择</v-card-title>
                <v-card-text>
                  <p>晶品汇<v-btn flat color="red darken-1">切换</v-btn></p>
                  <p>麦德广<v-btn flat color="red darken-1">切换</v-btn></p>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="blue darken-1"
                    flat="flat"
                    @click="dialog_brand = false"
                  >
                    取消
                  </v-btn>
                  <v-btn
                    color="blue darken-1"
                    flat="flat"
                    @click="dialog_brand = false"
                  >
                    确认
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
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
              :key="mobile-1"
              @click="dialog_user = true"
            >
              <v-list-tile-title><v-icon>perm_identity</v-icon>User</v-list-tile-title>
            </v-list-tile>
            <v-dialog
            v-model="dialog_user"
            max-width="600"
          >
            <v-card>
              <v-card-title class="headline">当前用户信息</v-card-title>
                <v-card-text>
                  <p>用户名称：123456789</p>
                  <p>真实姓名：OOO</p>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="blue darken-1"
                    flat="flat"
                    @click="dialog_user = false"
                  >
                    取消
                  </v-btn>
                  <v-btn
                    color="blue darken-1"
                    flat="flat"
                    @click="dialog_user = false"
                  >
                    确认
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-list-tile
              :key="mobile-2"
              @click="dialog_brand = true"
            >
              <v-list-tile-title><v-icon>star_border</v-icon>品牌</v-list-tile-title>
            </v-list-tile>
            <v-dialog
              v-model="dialog_brand"
              max-width="600"
            >
              <v-card>
                <v-card-title class="headline">品牌选择</v-card-title>
                <v-card-text>
                  <p>晶品汇<v-btn flat color="red darken-1">切换</v-btn></p>
                  <p>麦德广<v-btn flat color="red darken-1">切换</v-btn></p>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="blue darken-1"
                    flat="flat"
                    @click="dialog_brand = false"
                  >
                    取消
                  </v-btn>
                  <v-btn
                    color="blue darken-1"
                    flat="flat"
                    @click="dialog_brand = false"
                  >
                    确认
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-list-tile
              :key="mobile-3"
              @click.prevent="logout"
            >
              <v-list-tile-title><v-icon>power_settings_new</v-icon>注销</v-list-tile-title>
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
        dialog_user: false,
        dialog_brand: false,
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
