<template>
  <div class="bond-type">
    <span>债券类型:</span>
    <el-select
      v-if="dropDown"
      size="mini"
      v-model="searchOpt.secType"
      clearable
      slot="prepend"
      placeholder="类型"
    >
      <el-option
        v-for="type in types"
        :class="current.indexOf(type.index) + 1 > 0 ? 'active' : null"
        :key="type.index"
        >{{ type.label }}</el-option
      >
    </el-select>

    <span v-else>
      <ul>
        <li
          @click="onClick(type)"
          :title="type.label"
          :class="
            current.indexOf(type.index) + 1 > 0
              ? 'active '
              : '' + type.flag == 1
              ? 'cate'
              : ''
          "
          v-for="type in types"
          :key="type.index"
        >
          {{ type.alias }}
        </li>
      </ul>
    </span>
  </div>
</template>
<script src="./index.js"></script>
<style src="./index.css"></style>