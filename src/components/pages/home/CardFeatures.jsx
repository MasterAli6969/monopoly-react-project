//<!--------------------- БЛОК - 8 Возможности Универсальной------------------->
import React from 'react'
import { staticTabs } from './data'
function CardFeatures() {
	return (
		<>
			<div className='col-12 mt-5 mb-5'>
				<div className='container d-flex justify-content-center flex-wrap mb-5 text-center'>
					<h3>Возможности Универсальной подарочной карты Giftery Card</h3>
				</div>
				<div className='container d-flex justify-content-center flex-wrap'>
					{staticTabs.map(item => {
						return (
							<div
								key={item.id}
								className='card'
								style={{ width: '24rem', padding: '15px', margin: '10px' }}
							>
								<div className='card-body'>
									<i className={`${item.icons} fs-1`}></i>
									<p className='card-text'>{item.text}</p>
								</div>
							</div>
						)
					})}
				</div>
				<div className='container d-flex justify-content-center flex-wrap mt-5 mb-5'>
					<h3>
						Преимущества Электронных подарочных сертификатов для корпоративных
						клиентов
					</h3>
				</div>
				<div className='container'>
					<p className='fw-bolder'>
						1. Экономия бюджета до 20% на подарки для промо-акций, программ
						мотивации и лояльности
					</p>
					<p>
						Электронные сертификаты отправляются на email и дают значительную
						экономию на логистике — нет производства, хранения, упаковки и
						доставки, как в случае с обычными физическими подарками.
					</p>
				</div>
				<div className='container d-flex justify-content-center flex-wrap my-5'>
					<button
						data-bs-toggle='modal'
						data-bs-target='#exampleModal21'
						type='button'
						className='btn btn-light btn-lg rounded-5 accent-colors text-accent-colors'
					>
						Узнать больше
					</button>
					<div
						className='modal fade'
						id='exampleModal21'
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
									<ol>
										<li>
											<div>
												<h6 className='fw-bolder'>
													Экономия бюджета до 20% на подарки для промо-акций,
													программ мотивации и лояльности
												</h6>
												<p>
													Электронные сертификаты отправляются на email и дают
													значительную экономию на логистике — нет производства,
													хранения, упаковки и доставки, как в случае с обычными
													физическими подарками.
												</p>
											</div>
										</li>
										<li>
											<div>
												<h6 className='fw-bolder'>
													Скорость и удобство организации корпоративных закупок
												</h6>
												<p>
													Даже если остался 1 день, можно легко сделать подарки
													клиентам/партнерам/сотрудникам по всей России;
												</p>
												<p>
													Настройте моментальную доставку через
													<a href='/'>Личный b2b кабинет</a>
													всем адресатам одновременно, и получите удобный отчет
													о доставке.
												</p>
												<p>
													Воспользуйтесь нашей
													<a href='/'>Витриной вознаграждений</a>с
													интегрированным каталогом подарочных карт для удобного
													обмена баллов, которые ваши сотрудники и партнеры
													копят в рамках программ мотивации
												</p>
												<p>
													Мгновенно расширьте выбор вознаграждений в вашей
													Программе лояльности при помощи
													<a href='/'>API интеграции</a>
													каталога электронных подарочных карт, которые
													предлагает Giftery
												</p>
												<p>
													Моментально запустите продажу собственных подарочных
													карт с собственного сайта при помощи
													<a href='/'>виджета Giftery</a>
												</p>
											</div>
										</li>
									</ol>
									<div className='d-flex justify-content-center align-items-center'>
										<a href='/'>Далее</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default CardFeatures
