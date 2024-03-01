import { contactData } from './data'
function Contacts() {
	return (
		<>
			<div className='container-fluid p-0'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-7 col-sm-12 mb-5'>
							<h1 className='mb-5'>Контакты</h1>
							{contactData && (
								<>
									{contactData.map(item => {
										return (
											<>
												<div key={item.id} className='mb-3'>
													<p className='mb-3 fw-bolder'>{item.discription}</p>
													<div className='d-flex flex-wrap align-items-center mb-3'>
														{item.contacts.map(item => {
															return (
																<>
																	<div
																		key={item.id}
																		className='d-flex align-items-center flex-wrap'
																	>
																		<i className={item.icon}></i>
																		<Link to={item.url}>
																			<h6 className='m-2'>{item.text}</h6>
																		</Link>
																	</div>
																</>
															)
														})}
													</div>
													<div className='d-flex align-items-center flex-wrap'>
														<i className={item.time.icon}></i>
														<h6 className='m-2'>{item.time.text}</h6>
														<p className='m-2'>{item.time.clock}</p>
													</div>
												</div>
											</>
										)
									})}
								</>
							)}
						</div>
						<div className='col-md-5 col-sm-12 mb-5'>
							<div className='d-flex align-items-center'>
								<i className='bi bi-geo-alt-fill fs-2'></i>
								<h5 className='my-2'>Как нас найти:</h5>
							</div>
							<p>ул. Седова, 12,БЦ - T4, офис 407 Санкт-Петербург</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default Contacts
