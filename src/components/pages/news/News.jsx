import { newsSideBar, newsCart, newsPaginate } from './data'
import newsPageLoremBlok1 from '../../../assets/img/newsPageLoremBlok1.svg'
import { Link } from 'react-router-dom'
function News() {
	return (
		<>
			<div className='container-fluid p-0'>
				<div className='container'>
					<div className='row'>
						<div className='col-12 mb-5'>
							<div className='d-flex align-items-center justify-content-between flex-wrap'>
								<div className='d-flex align-items-center m-5 flex-wrap'>
									<h2>Новости компании Монополия</h2>
								</div>
								<div className='d-flex align-items-center'>
									<img
										alt=''
										width='460'
										height='370'
										className='img-fluid'
										src={newsPageLoremBlok1}
									/>
								</div>
							</div>
						</div>
						<hr className='my-5' />
						<div className='col-md-3 col-sm-12 mb-5 p-3'>
							<form className='d-flex mb-5'>
								<input
									className='form-control me-2'
									type='search'
									placeholder='Поиск'
									aria-label='Search'
								/>
								<button className='btn btn-light accent-colors' type='submit'>
									<i className='bi bi-search'></i>
								</button>
							</form>
							<div>
								<h3 className='mb-3'>Категории</h3>
								<ul className='text-main-colors-lists'>
									{newsSideBar && (
										<>
											{newsSideBar.map(item => {
												return (
													<>
														<li key={item.id}>
															<Link to={item.url}>{item.text}</Link>
														</li>
													</>
												)
											})}
										</>
									)}
								</ul>
							</div>
						</div>
						<div className='col-md-9 col-sm-12 mb-5'>
							<div className='container d-flex justify-content-center flex-wrap'>
								{newsCart && (
									<>
										{newsCart.map(item => {
											return (
												<>
													<div className='card shadow-lg w-75 m-5'>
														<div className='card-body d-flex flex-column align-items-start justify-content-between card-body__hover'>
															<div>
																<img
																	alt=''
																	src={item.img}
																	className='img-thumbnail mb-3'
																/>
																<p className='card-text'>{item.date}</p>
																<h1>{item.title}</h1>
																<p className='card-title mb-5'>
																	{item.description}
																</p>
															</div>
															<div className='d-flex flex-wrap justify-content-between align-items-center mt-auto'>
																<Link to={item.url}>
																	<h6 className='card-link my-0 mx-3 card-body__hover-link'>
																		{item.link}
																	</h6>
																</Link>
																<i className={`${item.icon} fs-2`}></i>
															</div>
														</div>
													</div>
												</>
											)
										})}
									</>
								)}
							</div>
						</div>
						<div className='col-12 mb-5 d-flex justify-content-center'>
							<nav aria-label='Page navigation example'>
								<ul className='pagination'>
									{newsPaginate && (
										<>
											{newsPaginate.map(item => {
												return (
													<>
														<li key={item.id} className='page-item'>
															<Link to='page-link' href={item.url}>
																{item.text}
															</Link>
														</li>
													</>
												)
											})}
										</>
									)}
								</ul>
							</nav>
						</div>
						<hr />
					</div>
				</div>
			</div>
		</>
	)
}

export default News
