<template>
  <div class="login">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark flat color="primary">
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" name="login" label="Login" type="text" v-model="userName" required></v-text-field>
                  <v-text-field id="password" prepend-icon="lock" name="password" label="Password" type="password" v-model="password" required></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click='login'>Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>
<script>
import { Toast } from 'mint-ui';
  export default {
    data () {
      return {
        userName: '',
        password: '',
      }
    },
    methods: {
      login(){
        //write login authencation logic here!
        if( this.userName == 'jphadmin' && this.password == '123456' ){
          localStorage.setItem('token', 'ImLogin')
          Toast('登录成功！');
          this.$router.push('/home');
        } else{
          Toast('账号或密码错误！');
        }
      }
    }
  }
</script>
<style>
  #login {
    margin-top: 20vh;
  }
</style>