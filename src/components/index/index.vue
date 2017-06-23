<style lang="less">
	@import url('./index.less');
</style>
<template>
	<div id="indexMain">
		<div class="login-content" v-if="loginWin">
			<div class="logo"></div>
			<div class="input-outer user-account-num">
				<div class="user-icon glyphicon glyphicon-user"></div>
				<input type="text" @focus='focA = true' @blur='focA = false' name="" value="" placeholder="请输入用户名" maxlength="11" v-model='loginUserAccountNum'>
				<div class="reset-input-outer" @touchstart='resetInput("loginUserAccountNum")' v-if='focA'>
					<div class="reset-input"></div>
				</div>
			</div>
			<div class="input-outer user-account-num">
				<div class="password-icon glyphicon glyphicon-pencil"></div>
				<input type="password" @focus='focB = true' @blur='focB = false' name="" value="" placeholder="请输入密码" maxlength="20" v-model='loginUserPassword'>
				<div class="reset-input-outer" @touchstart='resetInput("loginUserPassword")' v-if='focB'>
					<div class="reset-input"></div>
				</div>
			</div>
			<div class="user-tips-bar">
				<span @click='change("register")'>我要注册</span>
				<span @click='change("resetpassword")'>忘记密码</span>
			</div>
			<div class="btn-bar">
				<p class="note-btn login-btn" @click='login()'>登录</p>
			</div>
		</div>
		<div class="register-content" v-if="registerWin">
			<div class="input-outer user-account-num">
				<div class="user-icon glyphicon glyphicon-user"></div>
				<input type="text" @focus='focAA = true' @blur='focAA = false' name="" value="" placeholder="请输入用户名" maxlength="11" v-model='registeUserAccountNum'>
				<div class="reset-input-outer" @touchstart='resetInput("registeUserAccountNum")' v-if='focAA'>
					<div class="reset-input"></div>
				</div>
			</div>
			<div class="input-outer user-account-num">
				<div class="password-icon glyphicon glyphicon-pencil"></div>
				<input type="password" @focus='focBB = true' @blur='focBB = false' name="" value="" placeholder="请输入密码" maxlength="20" v-model='registePassword'>
				<div class="reset-input-outer" @touchstart='resetInput("registePassword")' v-if='focBB'>
					<div class="reset-input"></div>
				</div>
			</div>
			<div class="input-outer user-account-num">
				<div class="password-icon glyphicon glyphicon-pencil"></div>
				<input type="password" @focus='focCC = true' @blur='focCC = false' name="" value="" placeholder="请输入密码" maxlength="20" v-model='registeRePassword'>
				<div class="reset-input-outer" @touchstart='resetInput("registeRePassword")' v-if='focCC'>
					<div class="reset-input"></div>
				</div>
			</div>
			<div class="user-tips-bar">
				<span @click='change("login")'>返回登录</span>
				<span @click='change("resetpassword")'>忘记密码</span>
			</div>
			<div class="btn-bar">
				<p class="note-btn register-btn" @click='registe()'>注册</p>
			</div>
		</div>
		<div class="resetPassword-content" v-if="resetPasswordWin">
			<div class="input-outer user-account-num">
				<div class="user-icon glyphicon glyphicon-user"></div>
				<input type="text" @focus='focAAA = true' @blur='focAAA = false' name="" value="" placeholder="请输入用户名" maxlength="11" v-model='resetPasswordAccountNum'>
				<div class="reset-input-outer" @touchstart='resetInput("resetPasswordAccountNum")' v-if='focAAA'>
					<div class="reset-input"></div>
				</div>
			</div>
			<div class="input-outer user-account-num">
				<div class="password-icon glyphicon glyphicon-pencil"></div>
				<input type="password" @focus='focBBB = true' @blur='focBBB = false' name="" value="" placeholder="请输入密码" maxlength="20" v-model='resetPasswordPassword'>
				<div class="reset-input-outer" @touchstart='resetInput("resetPasswordPassword")' v-if='focBBB'>
					<div class="reset-input"></div>
				</div>
			</div>
			<div class="input-outer user-account-num">
				<div class="password-icon glyphicon glyphicon-pencil"></div>
				<input type="password" @focus='focCCC = true' @blur='focCCC = false' name="" value="" placeholder="请输入密码" maxlength="20" v-model='resetPasswordRePassword'>
				<div class="reset-input-outer" @touchstart='resetInput("resetPasswordRePassword")' v-if='focCCC'>
					<div class="reset-input"></div>
				</div>
			</div>
			<div class="user-tips-bar">
				<span @click='change("login")'>返回登录</span>
				<span @click='change("register")'>我要注册</span>
			</div>
			<div class="btn-bar">
				<p class="note-btn resetPassword-btn" @click='resetPwd()'>重置密码</p>
			</div>
		</div>
		<div class="err-bar" v-show='isErr'>
			<p>{{errMsg}}</p>
		</div>
	</div>
</template>

<script src="./index.js"></script>