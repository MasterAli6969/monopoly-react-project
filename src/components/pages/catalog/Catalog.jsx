import React from 'react'
import Breadcrumbs from './Breadcrumbs'
import SideBar from './SideBar'
import CatalogCards from './CatalogCards'
import Pagination from './Pagination'
import OtherDescriptions from './OtherDescriptions'
function Catalog() {
	return (
		<>
			<div className='container-fluid'>
				<div className='container'>
					<div className='row'>
						<Breadcrumbs />
						<SideBar />
						<CatalogCards />
						<Pagination />
						<OtherDescriptions />
					</div>
				</div>
			</div>
		</>
	)
}
export default Catalog
