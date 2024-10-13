

import NavbarComponent from '../components/NavbarComponent'


import HomeComponent from '../components/HomeComponent'



import ComponentA from '../components/ComponentA'

import ComponentB from '../components/ComponentB'

import ComponentC from '../components/ComponentC'

import LayoutComponent from '../components/LayoutComponent'



const HomePage=()=>{

	return (

<>

<NavbarComponent/>
<HomeComponent/>
<p>Home Page</p>
<LayoutComponent>
 <ComponentA/> 
 <ComponentB/> 	
  <ComponentC/>

    </LayoutComponent>
   
</>
		)

}

export default HomePage;