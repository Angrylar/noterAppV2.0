<style lang='less'>
    @import url('./noteList.less');
</style>
<template>
    <div id="noteList">
        <nav>
            <div class="user-icon glyphicon glyphicon-user"></div>
            <div class="new-note-icon glyphicon glyphicon-plus-sign" @click='newNote()'></div>
        </nav>
        <div class="note-list-outer">
            <div class="note-list-content">
                <ul>
                    <li @click='go(listInfo.nid)' v-for='listInfo in listArr'>
                        <p>{{listInfo.tittle}}</p>
                        <p>{{listInfo.time}}</p>
                    </li>
                </ul>
                <div v-show='loadingShow'>
                    <p class="loading-more">---{{loadingMsg}}---</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./noteList.js"></script>