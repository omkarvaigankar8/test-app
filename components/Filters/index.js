import React, { useState } from 'react';
import styles from './filters.module.scss';
import Select, { components } from 'react-select';
import { Carrot } from '../Icons';
const Filters = ({
	productOptions,
	stateOptions,
	cityOptions,
	sliderData,
	sliderData2,
	sliderData3,
	selectedProduct,
	changeProductHandler,
	selectedState,
	selectedCity,
	setSelectedCity,
	setSelectedState,
	setSelectedProduct,
	changeStateHandler,
	changeCityHandler
}) => {
	const productOptionList = productOptions.map((op) => {
		return { value: `${op}`, label: `${op}` };
	});
	const stateOptionList = stateOptions.map((op) => {
		return { value: `${op}`, label: `${op}` };
	});
	const cityOptionList = cityOptions.map((op) => {
		return { value: `${op}`, label: `${op}` };
	});

	const customStyles = {
		indicatorSeparator: (styles) => ({ display: 'none' }),
		indicatorContainer: (styles) => ({ color: 'red', backgroundColor: 'red' }),
		option: (provided, state) => ({
			...provided,
			'&:hover': {
				backgroundColor: '#232323',
				color: '#ffffff',
			},

			color: state.isSelected ? 'white' : 'white',
			backgroundColor: state.isSelected ? '#232323' : '#232323',
		}),
		valueContainer: (base, state) => ({
			...base,
			color: '#ffffff',
		}),
		control: (base, state) => ({
			...base,
			color: state.isSelected ? 'red' : 'blue',
			backgroundColor: state.isSelected ? '#232323' : '#232323',
			width: '100%',
			borderColor: 'transparent',
		}),
		singleValue: (base, state) => ({
			...base,
			color: state.isSelected ? '#ffffff' : '#ffffff',
			fontSize: '17px',
		}),
		menuList: (base, state) => ({
			...base,
			paddingTop: '0',
			paddingBottom: '0',
			zIndex: '3',
		}),
	};
	return (
		<div className={styles.filter_section}>
			<h3>Filters</h3>
			<Select
				components={{ DropdownIndicator }}
				className={styles.select}
				placeholder='Product'
				onChange={(e) => {
					if (selectedProduct !== '' && selectedProduct !== e.value) {
						changeProductHandler(e.value);
						setSelectedState(null);
						setSelectedCity(null);
						setSelectedProduct(e.value)
					} else {
						setSelectedProduct(e.value)
						sliderData(e.value);

					}
				}}
				getOptionLabel={(option) => option.label}
				getOptionValue={(option) => option.label}
				options={productOptionList}
				styles={customStyles}
			/>
			<Select
				components={{ DropdownIndicator }}
				className={styles.select}
				placeholder='State'
				onChange={(e) => {
					if(selectedState !== null){
					changeStateHandler(e.value)	
					setSelectedState(e);
					setSelectedCity(null);
					}
					else{
					console.log('Chnge State:',e)
					setSelectedState(e);
					setSelectedCity(null);
					sliderData2(e.value);
				}}}
				options={stateOptionList}
				styles={customStyles}
				value={selectedState}
				name='State'
				getOptionLabel={(option) => option.label}
				getOptionValue={(option) => option.value}
			/>
			<Select
				components={{ DropdownIndicator }}
				className={styles.select}
				placeholder='City'
				onChange={(e) => {
					if(selectedCity !== null){
						changeCityHandler(e.value)	
						setSelectedCity(e);
					}
						else{
					console.log('Chnge',e)
					setSelectedCity(e);
					sliderData3(e.value);
				}}}
				styles={customStyles}
				options={cityOptionList}
				name='City'
				value={selectedCity}
				getOptionLabel={(option) => option.label}
				getOptionValue={(option) => option.label}
			/>
		</div>
	);
};
const DropdownIndicator = (props) => {
		return (
		<components.DropdownIndicator {...props}>
			<Carrot />
		</components.DropdownIndicator>
	);
};
export default Filters;
