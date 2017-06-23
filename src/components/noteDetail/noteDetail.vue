<style lang="less">
    @import url('./noteDetail.less');
</style>
<template>
    <div id="noteDetail">
        <nav>
            <div class="goback" @click='goback()'></div>
            <div class="edit glyphicon glyphicon-pencil" @click='edit()'></div>
        </nav>
        <div class="detail-content">
            <h2 class="detail-title">{{title}}</h2>
            <div class="detail-main-outer">
                <div class="detail-main">
                    {{content}}
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./noteDetail.js"></script>