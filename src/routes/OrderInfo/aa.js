	{/*<div className={styles.wrap}>
				<header className={styles.head}>
					<div className={styles.top}>
						<div className={styles.top_box}>
							<Icon
								type="left"
								className={styles.icon}
								onClick={
									() => {
										this.props.history.push("/details")
									}
								}
							></Icon>
							<h1>提交订单</h1>
						</div>
						<div className={styles.address}>
							{
								newaddr ? newaddr.map((item,inds)=>{
									return (
										<div className={styles.myaddress} key={inds}>
											<span>订单配送至</span>
											<div className={styles.myaddr}>
												<span>{item.addr}</span>
												<Icon type="right" className={styles.icon}></Icon>
											</div>
											<div><span>{item.name}(先生)</span><span>{item.phone}</span></div>
										</div>
									)
								}) : <p onClick={()=>{
										this.props.history.push("/myAddress")
									}}>
										<Icon type="plus" className={styles.icon}></Icon>
										<span>添加收货地址</span>
									</p>
									}
						</div>
					</div>
					<div className={styles.times}>
						<ul>
							<li>
								<p>送达时间</p>
								<span>尽快送达(12.53送达)</span>
								<Icon type="right" className={styles.icon}></Icon>
							</li>
							<li>
								<p>支付方式</p>
								<span>在线支付</span>
							</li>
						</ul>
					</div>
				</header>
				<div className={styles.content}>
					<div className={styles.shoplist}>
						<div className={styles.shop}>
							<p><span>满记甜品    </span>    (上地西路店)</p>
						</div>
						{
							data ? data.map((item, ind) => {
								return (
									<dl className={styles.menu} key={ind}>
										<dt>
											<div><img src={item.image} /></div>
											<p>{item.name}</p>
										</dt>
										<dd className={styles.name}>*{item.sellCount}</dd>
										<dd className={styles.price}>${item.price}</dd>
									</dl>
								)
							}) : "暂无数据"
						}
					</div>
					<div className={styles.kong}>
						{
							chargeData ? chargeData.map((item,index)=>{
								return(
									<dl className={styles.charge} key={index}>
										<dt>
											<div></div>
										</dt>
										<dd className={styles.name}>{item.lunch}</dd>
										<dd className={styles.price}>$8</dd>
									</dl>
								)
							}) : ""
						}
					</div>
				</div>
				<div className={styles.footer}>
					<p>${this.props.priceAll}</p>
					<span>去支付</span>
				</div>
			</div>*/}