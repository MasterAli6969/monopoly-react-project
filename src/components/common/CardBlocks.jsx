import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getCatalogData } from '../../services/api/apiCatalog'
import { getCardPageData } from '../../services/api/apiCatalog'
import { setCard } from '../../features/cardRenderDataReduce'
function CardBlocks() {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const [products, setProducts] = useState([])
	useEffect(() => {
		const getData = async () => {
			const productsData = await getCatalogData()
			setProducts(productsData)
		}
		getData()
	}, [])
	const handleItemClick = async itemId => {
		try {
			const cartData = await getCardPageData({ product_id: itemId })
			console.log('sdnccsd jkncmklsd bn mds', dispatch(setCard(cartData)))
			dispatch(setCard(cartData))
			navigate('/catalog/card-page')
		} catch (error) {
			console.error('Registration failed:ОШИБКА ТВОЯ', error)
			alert('загляни в консоль')
		}
	}
	return (
		<>
			<div className='col-12 mt-5 mb-5'>
				<div className='container d-flex justify-content-center flex-wrap'>
					{(!products || products.length === 0) && (
						<>
							<div>
								<h5>Упс, что то пошло не так... попробуйсте немного позже</h5>
							</div>
						</>
					)}
					{products.data != null && (
						<>
							{products.data.map(item => {
								return (
									<div
										key={item.id}
										className='card'
										style={{ width: '17rem', margin: '10px' }}
									>
										<div className='card-body d-flex flex-column align-items-start justify-content-between'>
											<div>
												<img
													src={item.image_url}
													className='img-thumbnail mb-3'
													alt=''
												/>
												<h5 className='card-title mb-5'>{item.name}</h5>
											</div>
											<div>
												<p className='card-text'>Номинал</p>
												<h5 className='card-text'>
													От {item.denomination.split('|')[0]} до{' '}
													{item.denomination.split('|').slice(-1)[0]}
												</h5>
												<button
													type='button'
													className='btn btn-light accent-colors text-accent-colors w-100'
													data-bs-toggle='modal'
													data-bs-target={'#exampleModal6'}
												>
													Купить
												</button>

												<div
													className='modal fade'
													id={'exampleModal6'}
													tabIndex='-1'
													aria-labelledby='exampleModalLabel'
													aria-hidden='true'
												>
													<div className='modal-dialog modal-lg modal-dialog-centered'>
														<div className='modal-content bg-accent-colors'>
															<div className='modal-header'>
																<h1
																	className='modal-title fs-5'
																	id='exampleModalLabel'
																>
																	Giftery Card
																</h1>
																<button
																	type='button'
																	className='btn-close'
																	data-bs-dismiss='modal'
																	aria-label='Close'
																></button>
															</div>
															<div className='modal-body'>
																<div className='d-flex justify-content-between flex-wrap mb-5'>
																	<img
																		src={item.image_url}
																		className='img-thumbnail modal-body__image-size m-3 mb-3'
																		alt=''
																	/>
																	<div className='px-2 modal-body__description-size m-3'>
																		<p>{item.description}</p>
																	</div>
																</div>
																<div className='d-flex justify-content-around flex-wrap mb-5'>
																	<a
																		href='pages/card-page.html'
																		className='btn btn-light btn-lg rounded-5 m-3 modal-body__button-size accent-colors text-accent-colors'
																	>
																		Отправить себе
																	</a>
																	<a
																		href='pages/card-page.html'
																		className='btn btn-light btn-lg rounded-5 m-3 modal-body__button-size over-accent-color text-accent-colors'
																	>
																		Отправить в подарок
																	</a>
																</div>
																<div className='container-fluid d-flex justify-content-around flex-wrap mb-5 p-3 accent-colors'>
																	<div
																		className='card d-flex flex-column align-items-center rounded-3 m-3'
																		style={{ width: '18rem' }}
																	>
																		<i className='bi bi-mailbox-flag fs-1'></i>
																		<div className='card-body'>
																			<p className='card-text'>
																				Обменяйте Giftery Card в рамках номинала
																				на один или несколько сертификатов из
																				каталога Giftery",
																			</p>
																		</div>
																	</div>
																</div>
																<div className='d-flex justify-content-around flex-wrap'>
																	<div className='px-2 custom_index_block3_card_modal_description'>
																		<h4 className='mb-3 fw-bolder'>
																			Корпоративный заказ
																		</h4>
																		<p className=''>
																			Закажите подарочные карты оптом.
																		</p>
																	</div>
																	<a
																		href='/'
																		className='btn btn-light btn-lg rounded-5 m-3 accent-colors text-accent-colors'
																	>
																		Оставить заявку
																	</a>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								)
							})}
						</>
					)}
				</div>
			</div>
		</>
	)
}
export default CardBlocks
