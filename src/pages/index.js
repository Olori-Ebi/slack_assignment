import React from 'react'
import { useState } from 'react'
import Footer from '../components/Footer';
import FooterResponsive from '../components/FooterResponsive';
import HeroSection from '../components/Hero';
import InfoSection from '../components/InfoSection';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setIsClicked] = useState(false);
  const [productClicked, setProductClicked] = useState(false);
  const [companyClicked, setCompanyClicked] = useState(false);
  const [pricingClicked, setPricingClicked] = useState(false);
  const [resourcesClicked, setResourcesClicked] = useState(false);


  const toggle = () => setIsOpen(!isOpen)
  const setClicked = () => setIsClicked(!clicked)
  const productToggle = () => setProductClicked(!productClicked)
  const companyToggle = () => setCompanyClicked(!companyClicked)
  const pricingToggle = () => setPricingClicked(!pricingClicked)
  const resourcesToggle = () => setResourcesClicked(!resourcesClicked)
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection />
      <Footer />
      <FooterResponsive productClicked={productClicked} productToggle={productToggle} clicked={clicked} companyClicked={companyClicked} companyToggle={companyToggle} setClicked={setClicked} pricingClicked={pricingClicked} pricingToggle = {pricingToggle} resourcesClicked={resourcesClicked} resourcesToggle={resourcesToggle} />
    </>
  )
}

export default Home
