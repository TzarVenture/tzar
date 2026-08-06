"use client";
/* eslint-disable @next/next/no-img-element */
import studioTabOne from "@/app/data/studioTabOne";
import React, { Suspense, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useWindowSize } from "@react-hook/window-size/throttled";
import TabButton from "@/app/componants/WebsitePricing/WebTabButton";
import PlanShopify from "../ShopifyEnquiry/PlanShopify";
import EcomPlanShopify from "../ShopifyEnquiry/EcomPlanShopify";


const { bg, title, tagline, projects, filters } = studioTabOne;

const masonryOptions = {
    transitionDuration: 500,
};

const getFilteredProjects = (filterData) =>
    filterData === "filterData"
        ? projects
        : projects.filter((project) => project.filter.includes(filterData));


const WebDevTab = ({ projectPage = true, filterData }) => {
    const [width, height] = useWindowSize({ fps: 60 });
    const breakpoint = 600;
    const [filter, setFilter] = useState('bra');
    const filteredProjects = getFilteredProjects(filter);

    const initialState = {
        filterData: "",
    };

    const [tab, setTab] = useState('EComPricing');

    return (
        <section className="protfoilo-tab">
            <Suspense fallback={<h1>🌀 Loading...</h1>}>
                <div className="ButtonsTabwebPrice">
                    <TabButton
                        isActive={tab === 'EComPricing'}
                        onClick={() => setTab('EComPricing')}
                    >
                        E-Commerce Pricing
                    </TabButton>
                    <TabButton
                        isActive={tab === 'PlanShopify'}
                        onClick={() => setTab('PlanShopify')}
                    >
                        Shopify Ecommerce Pricing
                    </TabButton>
                </div>

                {tab === 'PlanShopify' && <PlanShopify />}
                {tab === 'EComPricing' && <EcomPlanShopify />}

            </Suspense>
        </section>

    );
};

export default WebDevTab;
