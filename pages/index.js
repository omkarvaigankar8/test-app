import styles from '../styles/Home.module.scss';
import React, {useState } from 'react';
import Card from '../components/Card';
import Filters from '../components/Filters';
export default function Home({data}) {
	var productArr = [];
	var cityArr = [];
	var stateArr = [];

	data.map((data) => {
		productArr.push(data.product_name);
		cityArr.push(data.address.city);
		stateArr.push(data.address.state);
	});
	var uniqProduct = [...new Set(productArr)];
	var uniqState = [...new Set(stateArr)];
	var uniqCity = [...new Set(cityArr)];
	const [overallProducts, setOverallProducts] = useState(data);
	const [filteredProducts, setFilteredProducts] = useState(data);
	const [productOptions, setProductOptions] = useState(uniqProduct);
	const [stateOptions, setStateOptions] = useState(uniqState);
	const [cityOptions, setCityOptions] = useState(uniqCity	);
	const [moreFiltered, setMoreFiltered] = useState(data);
	const [maxFiltered, setMaxFiltered] = useState(data);
	const [selectedProduct,setSelectedProduct]= useState('All Products')
	const [selectedCity,setSelectedCity]= useState(null)
	const [selectedState,setSelectedState]= useState(null)


	
	const sliderData = (val) => {
		let Data = filteredProducts.filter(function (event) {
			return event.product_name == `${val}`;
		});
		setFilteredProducts(Data);
		setMoreFiltered(Data);
		setMaxFiltered(Data);
		productArr = [];
		stateArr = [];
		cityArr = [];
		Data.map((d) => {
			productArr.push(d.product_name);
			cityArr.push(d.address.city);
			stateArr.push(d.address.state);
		});
		uniqState = [...new Set(stateArr)];
		uniqCity = [...new Set(cityArr)];
		setStateOptions(uniqState);
		setCityOptions(uniqCity);
	};
	const changeProductHandler = (val) =>{
		productArr = []
		stateArr=[]
		cityArr=[]	
		let Data = data.filter(function (event) {
			return event.product_name == `${val}`;
		});
		setFilteredProducts(Data);
		setOverallProducts(Data)	
		setMoreFiltered(Data);
		setMaxFiltered(Data);	
		Data.map((d) => {
			productArr.push(d.product_name);
			cityArr.push(d.address.city);
			stateArr.push(d.address.state);
		});
		uniqState = [...new Set(stateArr)];
		uniqCity = [...new Set(cityArr)];
		setStateOptions(uniqState);
		setCityOptions(uniqCity);
	} 
	const changeStateHandler = (val) => {
		let Data = filteredProducts.filter(function (event) {
			return event.address.state == `${val}`;
		})
		setOverallProducts(Data)	

		setMoreFiltered(Data);
		setMaxFiltered(Data);
		productArr = [];
		stateArr = [];
		cityArr = [];
		Data.map((d) => {
			productArr.push(d.product_name);
			cityArr.push(d.address.city);
			stateArr.push(d.address.state);
		});
		uniqCity = [...new Set(cityArr)];
		setCityOptions(uniqCity);
	} 
	const sliderData2 = (val) => {
		let Data = moreFiltered.filter(function (event) {
			return event.address.state == `${val}`;
		});
		setOverallProducts(Data)	

		setMoreFiltered(Data);
		setMaxFiltered(Data);
		productArr = [];
		stateArr = [];
		cityArr = [];
		Data.map((d) => {
			productArr.push(d.product_name);
			cityArr.push(d.address.city);
			stateArr.push(d.address.state);
		});
		uniqCity = [...new Set(cityArr)];
		setCityOptions(uniqCity);
	};
	const sliderData3 = (val) => {
		let Data = maxFiltered.filter(function (event) {
			return event.address.city == `${val}`;
		});
		setOverallProducts(Data)	
		setMaxFiltered(Data);
		productArr = [];
		stateArr = [];
		cityArr = [];
		Data.map((d) => {
			productArr.push(d.product_name);
			cityArr.push(d.address.city);
			stateArr.push(d.address.state);
		});
	};
const changeCityHandler = (val) =>{
	let Data = moreFiltered.filter(function (event) {
		return event.address.city == `${val}`;
	})
	setOverallProducts(Data)			
	setMaxFiltered(Data);
}
	return (
		<div className={styles.container}>
			<div className={styles.content_box}>
				<div className={styles.filters}>
				<div className={styles.heading}>
							<h1>Edvora</h1>
						</div>
					<div className={styles.filter_container}>
					
						<Filters
							productOptions={productOptions}
							stateOptions={stateOptions}
							cityOptions={cityOptions}
							setProductOptions={setProductOptions}
							setStateOptions={setStateOptions}
							setCityOptions={setCityOptions}
							sliderData={sliderData}
							sliderData2={sliderData2}
							sliderData3={sliderData3}
							selectedProduct={selectedProduct}
							selectedState={selectedState}
							selectedCity={selectedCity}
							setSelectedProduct={setSelectedProduct}
							setSelectedCity={setSelectedCity}
							setSelectedState={setSelectedState}
							changeProductHandler={changeProductHandler}
							changeStateHandler={changeStateHandler}
							changeCityHandler={changeCityHandler}
						/>
					</div>
				</div>
				<div className={styles.slider_container}>
					<div className={styles.heading}>
						<h1>Edvora</h1>
						<h4>Products</h4>
						<h5>{selectedProduct}</h5>
					</div>
					<Card card={overallProducts} />
				</div>
			</div>
		</div>
	);
}
export async function getServerSideProps() {
	const res = await fetch(`https://assessment-edvora.herokuapp.com`)
	const data = await res.json()
	return { props: { data } }
  }
