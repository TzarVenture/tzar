"use client";
/* eslint-disable @next/next/no-img-element */
import studioTabOne from "@/app/data/studioTabOne";
import React, { Suspense, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useWindowSize } from "@react-hook/window-size/throttled";
import TabButton from "@/app/componants/SEOServices/TabButtonseopack";
import LocalSEOPackages from "./LocalSEOPackages";
import SEOPackagestab from "./SEOPackagestab";
import EcomPackagestab from "./EcomSEOPackages";


const { bg, title, tagline, projects, filters } = studioTabOne;


const SEOPackages = () => {

    const [tab, setTab] = useState('SEOPackagestab');


    return (
        <>
            <section className="seopack-tab">
                <Container>
                    <div className="seopack-title">
                        <h1>Find the Right Plan for You</h1>
                        <h2>Maximize Audience Engagement</h2>
                    </div>
                    <div className="seo-secion-pack">
                        <Suspense fallback={<h1>🌀 Loading...</h1>}>
                            <div className="ButtonsTab-seopack">
                                <TabButton
                                    isActive={tab === 'LocalSEOPackages'}
                                    onClick={() => setTab('LocalSEOPackages')}
                                >
                                    Local SEOPackages
                                </TabButton>
                                <TabButton
                                    isActive={tab === 'SEOPackagestab'}
                                    onClick={() => setTab('SEOPackagestab')}
                                >
                                    SEO Packages
                                </TabButton>
                                <TabButton
                                    isActive={tab === 'EcomPackagestab'}
                                    onClick={() => setTab('EcomPackagestab')}
                                >
                                    Ecom. SEO Packages
                                </TabButton>
                            </div>

                            {tab === 'LocalSEOPackages' && <LocalSEOPackages />}
                            {tab === 'SEOPackagestab' && <SEOPackagestab />}
                            {tab === 'EcomPackagestab' && <EcomPackagestab />}

                        </Suspense>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default SEOPackages;
