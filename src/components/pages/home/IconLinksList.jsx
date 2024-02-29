//<!--------------------- БЛОК - 5 Ассортимент подарочных ------------------->
import React from 'react'
import { iconLinks } from './data'
function IconLinksList() {
	return (
		<>
			<div className='col-12 mt-5 mb-5'>
				<div className='container d-flex justify-content-center flex-wrap mt-5 mb-5'>
					<h2>Ассортимент подарочных сертификатов</h2>
				</div>
				<div className='container'>
					<div className='d-flex justify-content-center align-items-center'>
						<p>
							Компания Giftery осуществляет продажу подарочных карт для женщин и
							мужчин в таких категориях:
						</p>
					</div>
					<ul className='container d-flex justify-content-around flex-wrap text-main-colors-lists'>
						{iconLinks.map(item => {
							return (
								<li
									key={item.text}
									className='text-center d-flex flex-column'
									style={{ margin: '10px', maxWidth: '150px' }}
								>
									<i className={`${item.icons} fs-1`}></i>
									<a
										className='container__block5-link-list'
										href={`${item.links}`}
									>
										{item.text}
									</a>
								</li>
							)
						})}
					</ul>
				</div>
				<div className='container d-flex justify-content-center flex-wrap my-5'>
					<button
						data-bs-toggle='modal'
						data-bs-target='#exampleModal14'
						type='button'
						className='btn btn-light btn-lg rounded-5 accent-colors text-accent-colors'
					>
						Читать дальше
					</button>
					<div
						className='modal fade'
						id='exampleModal14'
						tabIndex='-1'
						aria-labelledby='exampleModalLabel'
						aria-hidden='true'
					>
						<div className='modal-dialog modal-dialog-centered'>
							<div className='modal-content'>
								<div className='modal-header'>
									<button
										type='button'
										className='btn-close'
										data-bs-dismiss='modal'
										aria-label='Close'
									></button>
								</div>
								<div className='modal-body'>
									<p>
										У нас можно купить подарочные сертификаты магазинов в
										электронном виде с мгновенной доставкой по email или
										заказать их выпуск в пластиковом виде, оформив в тематике
										праздника или фирменном стиле вашей компании. Тем, кто
										боится ошибиться в выборе категории, мы предлагаем
										универсальную подарочную карту Giftery Card, которую ее
										владелец сможет обменять по своему желанию на подарочную
										карту одного из 100 известных брендов. В разделе
										«Благотворительность» вы найдете список благотворительных
										фондов, которым можно пожертвовать деньги от своего имени
										или от имени друга при»помощи нашего сайта. Чтобы купить
										электронный подарочный сертификат в Москве или любом другом
										населенном пункте России при помощи нашей платформы
										электронных подарочных решений, выберите из нашего каталога
										подарочных карт наиболее подходящую карту или универсальную
										карту Giftery»Card, укажите номинал и заполните поля
										электронной формы. Доставка подарка будет произведена
										моментально после оплаты или»в»указанную вами дату.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default IconLinksList
