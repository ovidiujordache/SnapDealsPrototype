
import React from 'react'
import NavbarComponent from '../components/NavbarComponent'

import CategoriesComponent from '../components/CategoriesComponent'


import ComponentA from '../components/ComponentA'

import ComponentB from '../components/ComponentB'

import ComponentC from '../components/ComponentC'

import LayoutComponent from '../components/LayoutComponent'
const CategoriesPage=()=>{

	return (

<>

<NavbarComponent/>
<CategoriesComponent/>
<p>Categories Page</p>
<LayoutComponent>
 
 <ComponentB/> 	
  <ComponentC/>

    </LayoutComponent>

</>
		)

}
export default CategoriesPage;