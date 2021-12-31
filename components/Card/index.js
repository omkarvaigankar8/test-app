import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Controller, Navigation, Pagination, Thumbs } from 'swiper';
// import "swiper/swiper-bundle.css";
import 'swiper/css';
// import "swiper/css/pagination"
import 'swiper/css/navigation';
import styles from './Card.module.scss';
// import './swiper/swiper.min.css';
import Image from 'next/image';
import moment from 'moment';

SwiperCore.use([Navigation, Pagination, Thumbs, Controller]);

const Card = ({ card }) => {
	console.log(card);
	const slides = [];

	return (
		<div>
			<Swiper
				breakpoints={{
					320: {
						width: 320,
						slidesPerView: 1,
					},
					360: {
						width: 360,
						slidesPerView: 1,
					},
					576: {
						width: 576,
						slidesPerView: 1,
					},
					768: {
						width: 768,
						slidesPerView: 2,
					},
					991: {
						width: 991,
						slidesPerView: 3,
					},
				}}
				tag='section'
				wrapperTag='ul'
				navigation={true}
				spaceBetween={50}
				slidesPerView={2}
				className={styles.list_container}
				// loop={true}
				id='main'
			>
				{card.length !== 0 &&
					card &&
					card.map((c) => (
						<SwiperSlide
							key={Math.floor((1 + Math.random()) * 0x10000)
								.toString(16)
								.substring(1)}
							tag='li'
							className={styles.list}
						>
							<div className={styles.product_card}>
								<div className={styles.info_box}>
									<div className={styles.image_container}>
										<Image
											className={`${styles.img_fluid} ${styles.carousel_img}`}
											src={
												c.image
													? c.image
													: 'https://www.indiaspora.org/wp-content/uploads/2018/10/image-not-available.jpg'
											}
											alt={c.title}
											width={70}
											height={70}
											loading={'lazy'}
										/>
									</div>

									<div className={styles.content}>
										<h5>{c.product_name}</h5>
										<p className={styles.band_para}>{c.brand_name}</p>
										<p>$ {c.price}</p>
									</div>
								</div>

								<div className={styles.more_info}>
									<p className={styles.band_para}>
										{c.address.city}, {c.address.state}
									</p>
									<p className={styles.band_para}>{moment(c.date).format('DD:MM:YYYY')}</p>
								</div>
								<p className={styles.band_para}>{c.discription}</p>
							</div>
						</SwiperSlide>
					))}
			</Swiper>
		</div>
	);
};

export default Card;
