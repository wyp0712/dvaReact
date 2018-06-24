import React from 'react';
import { connect } from 'dva';
import styles from './MemberRegister.css';

class MemberRegister extends React.Component {
	constructor(props) {
		super(props)
	}
	getValue() {
		this.props.dispatch({
			type:"memberRegister/getPhones",
			payLoad:this.refs.phone.value
		})
	}
	render() {
		return (
		<div className={styles.wrap}>
			<header className={styles.header}>
				<div className={styles.topLeft}>
					<i></i>
					<a href="javascript:;"> 返回 </a>
					<a href="javascript:;"> 关闭 </a>
				</div>
				<p> 会员注册 </p>
				<i> ... </i>
			</header>
			<section className={styles.sections}>
				<input type="text" placeholder="手机号" className={styles.phone} ref="phone" />
				<div className={styles.num}>
					<input type="text" placeholder="验证码" />
					<span onClick={
						() => {
							this.getValue()
						}
					}> 获取验证码 </span>
				</div>
				<p> 没有收到验证码？ <b> 获取验证码 </b> </p>
				<p className={styles.login} > 登录 </p>
				<div>
					<input type="checkbox" className={styles.btn1} />我已经同意哈哈哈哈协议
				</div>
			</section>
		</div>
		)
	}
}

function mapStateToProps() {
	return {};
}

export default connect(mapStateToProps)(MemberRegister);