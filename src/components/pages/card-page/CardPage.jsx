import { useState, useEffect } from 'react'
import Breadcrumbs from './Breadcrumbs'
import CardSlider from './CardSlider'
import CardDescriptions from './CardDescriptions'
import WhoForm from './WhoForm'
import WhoDataForm from './WhoDataForm'
import RepliesAccordion from './RepliesAccordion'
import RecomendCard from './RecomendCard'
import OtherDescriptions from './OtherDescriptions'

function CardPage() {
	useEffect(() => {
		const reduxCardData = localStorage.getItem('reduxCardData')
		const parsedData = reduxCardData ? JSON.parse(reduxCardData) : null
		console.log('ВАМ ТУТ ПРИШЛА КАКАЯ ТО ХacsascЕРНЯ', parsedData)
	}, [reduxCardData])

	return (
		<>
			{parsedData ? (
				<div className='container-fluid p-0'>
					<div className='container _cardPage'>
						<div className='row justify-content-between'>
							<>
								<Breadcrumbs />
								<CardSlider />
								<CardDescriptions />
								<WhoForm />
								<WhoDataForm />
								<RepliesAccordion />
								<RecomendCard />
								<OtherDescriptions />
							</>
						</div>
					</div>
				</div>
			) : (
				<div>loading...</div>
			)}
		</>
	)
}
export default CardPage
