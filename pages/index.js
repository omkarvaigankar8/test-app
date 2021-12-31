import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
// import Data from '../data.json';
import { arrayMaker } from '../utils/utils';
import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import Filters from '../components/Filters';
export default function Home({data}) {
	console.log('Data',data);
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
	const [filteredProducts, setFilteredProducts] = useState(data);
	const [productOptions, setProductOptions] = useState(uniqProduct);
	const [stateOptions, setStateOptions] = useState(uniqState);
	const [cityOptions, setCityOptions] = useState(uniqCity	);
	const [moreFiltered, setMoreFiltered] = useState(data);
	const [maxFiltered, setMaxFiltered] = useState(data);

	
	const sliderData = (val) => {
		let Data = filteredProducts.filter(function (event) {
			console.log('hi', event, val);
			return event.product_name == `${val}`;
		});
		console.log('DAATTTAAAAA', Data);
		setFilteredProducts(Data);
		setMoreFiltered(Data);
		setMaxFiltered(Data);
		productArr = [];
		stateArr = [];
		cityArr = [];
		Data.map((d) => {
			console.log('D', d);
			productArr.push(d.product_name);
			cityArr.push(d.address.city);
			stateArr.push(d.address.state);
		});
		uniqProduct = [...new Set(productArr)];
		console.log('ffffffffff', uniqProduct);
		uniqState = [...new Set(stateArr)];
		console.log('aaaaaa', uniqState);
		uniqCity = [...new Set(cityArr)];
		setProductOptions(uniqProduct);
		setStateOptions(uniqState);
		setCityOptions(uniqCity);
		console.log('cccccc', uniqCity);
	};
	const sliderData2 = (val) => {
		let Data = moreFiltered.filter(function (event) {
			return event.address.state == `${val}`;
		});
		console.log('DAATTTAAAAA', Data);
		setFilteredProducts(Data);
		setMoreFiltered(Data);
		setMaxFiltered(Data);
		productArr = [];
		stateArr = [];
		cityArr = [];
		Data.map((d) => {
			console.log('D', d);
			productArr.push(d.product_name);
			cityArr.push(d.address.city);
			stateArr.push(d.address.state);
		});
		uniqProduct = [...new Set(productArr)];
		console.log('ffffffffff', uniqProduct);
		uniqState = [...new Set(stateArr)];
		console.log('aaaaaa', uniqState);
		uniqCity = [...new Set(cityArr)];
		console.log('cccccc', uniqCity);
		setProductOptions(uniqProduct);
		setStateOptions(uniqState);
		setCityOptions(uniqCity);
	};
	const sliderData3 = (val) => {
		let Data = maxFiltered.filter(function (event) {
			return event.address.city == `${val}`;
		});
		console.log('DAATTTAAAAA', Data);
		setFilteredProducts(Data);
		setMoreFiltered(Data);
		setMaxFiltered(Data);
		productArr = [];
		stateArr = [];
		cityArr = [];
		Data.map((d) => {
			console.log('D', d);
			productArr.push(d.product_name);
			cityArr.push(d.address.city);
			stateArr.push(d.address.state);
		});
		uniqProduct = [...new Set(productArr)];
		console.log('ffffffffff', uniqProduct);
		uniqState = [...new Set(stateArr)];
		console.log('aaaaaa', uniqState);
		uniqCity = [...new Set(cityArr)];
		console.log('cccccc', uniqCity);
		setProductOptions(uniqProduct);
		setStateOptions(uniqState);
		setCityOptions(uniqCity);
	};

	return (
		<div className={styles.container}>
			<div className={styles.content_box}>
				<div className={styles.filters}>
				<div className={styles.heading}>
							<h1>Edvora</h1>
							<h4>Products</h4>
							<h5>Product Name</h5>
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
						/>
					</div>
				</div>
				<div className={styles.slider_container}>
					<div className={styles.heading}>
						<h1>Edvora</h1>
						<h4>Products</h4>
						<h5>Product Name</h5>
					</div>
					<Card card={filteredProducts} />
				</div>
			</div>
		</div>
	);
}
export async function getServerSideProps() {
	// Fetch data from external API
	const res = await fetch(`https://assessment-edvora.herokuapp.com`)
	const data = await res.json()
//    console.log('-----------------------------',data)
	// Pass data to the page via props
	return { props: { data } }
  }
