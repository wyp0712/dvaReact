import React from 'react';
import { connect } from 'dva';
import styles from './MemberCenter.css';

function MemberCenter() {
  return (
    	<div className={styles.box}>
        <header className={styles.header}>
            <div className={styles.topLeft}>
                <i ></i>
                <a href="javascript:;">返回</a>
                <a href="javascript:;">关闭</a>
            </div>
            <p>会员注册</p>
            <i >...</i>
        </header>
        <section className={styles.sections}>
          <div className={styles.scroll}>
            <div className={styles.top}>
                <dl>
                  <dt>img</dt>
                  <dd>
                    <span>昵称</span>
                    <p>tupian   ></p>
                  </dd>
                </dl>
            </div>
            <div className={styles.bingli}>
                <dl>
                  <dd>
                    <span>消息提醒</span>
                    <b>></b>
                  </dd>
                </dl>
                <dl>
                  <dd>
                    <span>消息提醒</span>
                    <b>></b>
                  </dd>
                </dl>
            </div>
          </div>
        </section>
        <footer className={styles.footer}>
            <p className={styles.left}>联系客服</p>
            <p className={styles.right}>使用咨询</p>
        </footer>
	   </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(MemberCenter);
