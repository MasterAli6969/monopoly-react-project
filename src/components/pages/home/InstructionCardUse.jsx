//<!--------------------- БЛОК - 6 Как воспользоваться полученной ------------------->

import React from 'react'
import { hoverTabs } from './data'
function InstructionCardUse() {
	return (
		<>
			<div className='col-12 mt-5 mb-5'>
				<div className='container d-flex justify-content-center flex-wrap mt-5 mb-5'>
					<h2>Как воспользоваться полученной электронной подарочной картой?</h2>
				</div>
				<div className='container d-flex justify-content-center flex-wrap'>
					{hoverTabs.map(item => {
						return (
							<div
								key={item.id}
								className='card custom_index_block6_card_body'
								style={{ width: '20rem', height: '30rem', margin: '15px' }}
							>
								<div className='card-body'>
									<div className='mb-5'>
										<img
											src={`${item.img}`}
											className='rounded mx-auto d-block img-fluid custom_index_block6_card_body_hover_img'
											alt='...'
										/>
									</div>
									<h6 className='card-subtitle mt-5 text-body-secondary'>
										{item.title}
									</h6>
								</div>
							</div>
						)
					})}

					<div className='container d-flex justify-content-around flex-wrap my-5'>
						<a
							href='pages/catalog-page.html'
							className='btn btn-light btn-lg rounded-5 accent-colors text-accent-colors'
						>
							Отправить карту
						</a>
					</div>
				</div>
			</div>
		</>
	)
}
export default InstructionCardUse
