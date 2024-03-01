import { footerLinks, footerContacts } from './data'
import logo from '../../assets/img/logoMono.png'
import { Link } from 'react-router-dom'

function Footer() {
	return (
		<>
			<div className='col-12 mt-5 pt-5 pb-5 bg-accent-colors shadow-lg'>
				<footer className='container'>
					<div>
						<img src={logo} className='footer__logo' />
					</div>
					<div className='d-flex flex-wrap justify-content-between'>
						{footerLinks.map(item => {
							return (
								<ul
									key={item.name}
									className='nav flex-column text-main-colors-lists'
								>
									<li>
										<h4>{item.name}</h4>
									</li>
									{item.links.map(item => {
										return (
											<li key={item.text}>
												<a
													className='nav-link active link__edit'
													aria-current='page'
													href={item.url}
												>
													{item.text}
												</a>
											</li>
										)
									})}
								</ul>
							)
						})}
					</div>
					<nav className='nav flex-column mt-5'>
						<h4>Контакты</h4>
						{footerContacts.map(item => {
							return (
								<div key={item.id}>
									<p className='footer__title'>{item.title}</p>
									{item.links.map(item => {
										return (
											<div key={item.id}>
												<Link className='nav-link link__edit' to={item.url}>
													{item.text}
												</Link>
											</div>
										)
									})}
								</div>
							)
						})}
					</nav>
				</footer>
			</div>
		</>
	)
}

export default Footer
