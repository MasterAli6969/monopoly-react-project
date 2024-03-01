//<!--------------------- Хлебные крошки и загаловок ------------------->
import { Link } from 'react-router-dom'

function Breadcrumbs() {
	return (
		<>
			<div className='col-12 mb-3'>
				<nav aria-label='breadcrumb'>
					<ol className='breadcrumb'>
						<li className='breadcrumb-item'>
							<Link to='file:///home/ubuntu/monopoly-front-project/index.html'>
								Главная
							</Link>
						</li>
						<li className='breadcrumb-item active' aria-current='page'>
							Подарочные сертификаты и карты
						</li>
					</ol>
				</nav>
				<h3>Подарочные сертификаты и карты</h3>
			</div>
		</>
	)
}
export default Breadcrumbs
