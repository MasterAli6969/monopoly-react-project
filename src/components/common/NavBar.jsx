import { Link } from 'react-router-dom'
import logoMono from '../../assets/img/logoMono.png'
import { navDropLincks } from './data'

function NavBar() {
	return (
		<>
			<div
				className='w-100 d-flex justify-content-center align-items-center'
				style={{ position: 'fixed', backgroundColor: 'red', zIndex: 999 }}
			>
				<h5 style={{ color: 'white' }}>COMING SOON. Сайт в разработке.</h5>
			</div>
			<nav className='mb-5'>
				<div className='shadow-lg'>
					<div className='container'>
						<nav className='navbar navbar-expand-lg'>
							<div className='container px-0 d-block'>
								<div className='d-flex justify-content-between align-items-center'>
									<div className='d-none nav-menu__logo-mobile'>
										<Link to='/'>
											<img src={logoMono} width='150' height='150' alt='' />
										</Link>
									</div>
									<button
										className='navbar-toggler'
										type='button'
										data-bs-toggle='collapse'
										data-bs-target='#navbarNavDropdown'
										aria-controls='navbarNavDropdown'
										aria-expanded='false'
										aria-label='Toggle navigation'
									>
										<span className='navbar-toggler-icon'></span>
									</button>
								</div>
								<div
									className='collapse navbar-collapse flex-column align-items-start py-3'
									id='navbarNavDropdown'
								>
									<div className='d-flex justify-content-between align-items-center w-100'>
										<div className='d-flex align-items-center nav-menu__logo-desktop'>
											<Link to='/'>
												<img src={logoMono} width='160' height='160' alt='' />
											</Link>
										</div>

										<div className='w-100'>
											<div className='d-flex flex-wrap justify-content-end'>
												<div className='d-flex align-items-center flex-wrap navbar-collapse__menu-item mb-3'>
													<a
														href='/login'
														className='btn btn-light rounded-5 accent-colors text-accent-colors'
													>
														Войти
													</a>

													<a
														href='/shopping-cart'
														className='btn btn-light position-relative m-3 rounded-5 accent-colors'
													>
														<i className='bi bi-cart'></i>
														<span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
															0
															<span className='visually-hidden'>
																unread messages
															</span>
														</span>
													</a>
													<div>
														<select
															className='form-select'
															id='floatingSelect'
															aria-label='Floating label select example'
															defaultValue={'ru'}
														>
															<option value='ru'>Русский</option>
															<option value='en'>Английский</option>
														</select>
													</div>
													<div className='w-70 d-flex justify-content-around align-items-center m-3 flex-wrap'>
														<svg
															viewBox='0 0 24 24'
															fill='#2db6c9'
															className='icon'
														>
															<path d='M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z'></path>
														</svg>
														<h4 className='title__edit'>8 800 55 35 35</h4>
													</div>
												</div>
											</div>
											<ul className='navbar-nav d-flex flex-wrap justify-content-around'>
												{navDropLincks.map(item => {
													return (
														<li key={item.id} className='nav-item dropdown'>
															<button
																className='nav-link dropdown-toggle'
																data-bs-toggle='dropdown'
																aria-expanded='false'
															>
																{item.name}
															</button>

															<ul className='dropdown-menu'>
																{item.links.map(item => {
																	return (
																		<li key={item.id}>
																			<a
																				className='dropdown-item'
																				href={item.url}
																			>
																				{item.text}
																			</a>
																		</li>
																	)
																})}
															</ul>
														</li>
													)
												})}
											</ul>
										</div>
									</div>
								</div>
							</div>
						</nav>
					</div>
				</div>
			</nav>
		</>
	)
}

export default NavBar
