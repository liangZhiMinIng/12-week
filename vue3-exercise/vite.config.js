import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
import Components from "unplugin-vue-components/vite"
import {AntDesignVueResolver} from "unplugin-vue-components/resolvers"
// https://vitejs.dev/config/
export default defineConfig({
  base:"./",//这条语句是自己加的
  plugins: [
    vue(),
    Components({
      resolvers:[
        AntDesignVueResolver()
      ]
    })
  ],
  resolve:{
    alias:{
      '@':resolve(__dirname,"src")
    }
  }
})
