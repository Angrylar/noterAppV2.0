<style lang="less">
    @import url('./edit.less');
</style>
<template>
    <div id="edit">
        <nav>
            <div @click='goback()' class="goback"></div>
            <div @click='save()' class='save glyphicon glyphicon-check'></div>
        </nav>
        <div class="edit-main">
            <div class="title-bar">
                <p>笔记题目</p>
                <div class="input-outer">
                    <input type="text" name="" value="" v-model='title'>
                </div>
            </div>
            <div class="edit-content-outer">
                <div class="edit-content" contenteditable="plaintext-only">
                    {{content}}
                </div>
            </div>
        </div>
        <div v-if='false'>已保存</div>
    </div>
</template>
<script src="./edit.js"></script>