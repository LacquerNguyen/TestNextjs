import React from 'react';
import Tabs from '../components/Tabs';

const Home = () => {

    const tabs = [
        {
            label: 'All',
            items: [
                {
                    title: 'TOI 3D Customize E-commerce',
                    imageUrl: './images/image-1.png',
                    link: 'https://tekup.vn/en/portfolio-item/toi-3d-customize-e-commerce-2/'
                },
                {
                    title: 'TOI 3D Customize E-commerce',
                    imageUrl: './images/image-2.png',
                    link: 'https://tekup.vn/en/portfolio-item/toi-3d-customize-e-commerce-2/'
                },


            ]
        },
        {
            label: 'Manpower Supply',
            items: [
                {
                    title: 'TOI 3D Customize E-commerce',
                    imageUrl: './images/image-3.png',
                    link: 'https://tekup.vn/en/portfolio-item/toi-3d-customize-e-commerce-2/'
                },
                {
                    title: 'TOI 3D Customize E-commerce',
                    imageUrl: './images/image-4.png',
                    link: 'https://tekup.vn/en/portfolio-item/toi-3d-customize-e-commerce-2/'
                },
                {
                    title: 'TOI 3D Customize E-commerce',
                    imageUrl: './images/image-3.png',
                    link: 'https://tekup.vn/en/portfolio-item/toi-3d-customize-e-commerce-2/'
                },
            ]
        },
        {
            label: 'Mobile App / Websites',
            items: [
                {
                    title: 'TOI 3D Customize E-commerce',
                    imageUrl: './images/image-3.png',
                    link: 'https://tekup.vn/en/portfolio-item/toi-3d-customize-e-commerce-2/'
                },
            ]
        },
        {
            label: 'UI/UX Design',
            items: [
                {
                    title: 'TOI 3D Customize E-commerce',
                    imageUrl: './images/image-3.png',
                    link: 'https://tekup.vn/en/portfolio-item/toi-3d-customize-e-commerce-2/'
                },
                {
                    title: 'TOI 3D Customize E-commerce',
                    imageUrl: './images/image-1.png',
                    link: 'https://tekup.vn/en/portfolio-item/toi-3d-customize-e-commerce-2/'
                },
                {
                    title: 'TOI 3D Customize E-commerce',
                    imageUrl: './images/image-2.png',
                    link: 'https://tekup.vn/en/portfolio-item/toi-3d-customize-e-commerce-2/'
                },
            ]
        },
    ];

    return (
        <div>
            <Tabs tabs={tabs} />
        </div>
    );
};

export default Home;