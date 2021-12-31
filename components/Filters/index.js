import React from 'react';
import styles from './filters.module.scss';
import Select, { components } from 'react-select';
import { Carrot } from '../Icons';
const Filters = ({
	product,
	city,
	state,
	productOptions,
	stateOptions,
	cityOptions,
	setProductOptions,
	setStateOptions,
	setCityOptions,
	sliderData,
	sliderData2,
	sliderData3,
}) => {
	// const checkOp
	// const uniqProduct = [...new Set(productArr)];
	// const uniqState = [...new Set(stateArr)];
	// const uniqCity = [...new Set(cityArr)];
	console.log('1', productOptions);
	console.log('2', stateOptions);
	console.log('3', cityOptions);

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
			//backgroundColor: state.isSelected ? "rgb(95, 50, 187, 10%)" : "white",
		}),
		// control: (base, state) => ({
		//   ...base,
		//   height: 55,
		//   minHeight: 55,
		//   borderColor: state.isFocused
		// 	? props.error
		// 	  ? "red"
		// 	  : "#03658c"
		// 	: props.error
		// 	? "red"
		// 	: "#e0e0e0",
		//   boxShadow: "0 !important",
		//   "&:hover": {
		// 	borderColor: "#03658c",
		//   },
		//   "&:focus": {
		// 	borderColor: "#03658c",
		//   },
		// }),
		control: (base, state) => ({
			...base,
			color: state.isSelected ? '#fffffff' : '#ffffff',
			backgroundColor: state.isSelected ? '#232323' : '#232323',
			width: '100%',
			borderColor:'transparent'
		}),
		singleValue: (base, state) => ({
			...base,
			color: state.isSelected ? '#ffffff' : '#ffffff',
			fontSize:'17px'
		}),
		menuList: (base, state) => ({
			...base,
			paddingTop: '0',
			paddingBottom: '0',
		}),
	};
	//   <components.DropdownIndicator>
	//   <img src="https://via.placeholder.com/30x30"/>
	// </components.DropdownIndicator>

	return (
		<div className={styles.filter_section}>
			<h3>Filters</h3>
			<Select
				components={{ DropdownIndicator }}
				className={styles.select}
				placeholder='Product'
				onChange={(e) => {
					console.log('CHANGE 1', e.value);
					// setProductOptions(e.value)
					sliderData(e.value);
				}}
				options={productOptionList}
				styles={customStyles}
			/>
			<Select
				components={{ DropdownIndicator }}
				className={styles.select}
				placeholder='State'
				onChange={(e) => {
					console.log('CHANGE 2', e.value);
					// setStateOptions(e.value)
					sliderData2(e.value);
				}}
				options={stateOptionList}
				styles={customStyles}
			/>
			<Select
				components={{ DropdownIndicator }}
				className={styles.select}
				placeholder='City'
				onChange={(e) => {
					console.log('CHANGE 3', e.value);
					// setCityOptions(e.value)
					sliderData3(e.value);
				}}
				styles={customStyles}
				options={cityOptionList}
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
