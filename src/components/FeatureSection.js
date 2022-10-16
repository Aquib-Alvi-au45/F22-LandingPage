import React from "react";
import './FeatureSection.css'
import Card from "../shared/Card";
import CardDocument from '../assets/card-document.svg'
import CardLayout from '../assets/card-layout.svg'
import CardLoading from '../assets/card-loading.svg'
import CardResponsive from '../assets/card-responsive.svg'
import CardSupport from '../assets/card-support.svg'
import CardUpdate from '../assets/card-update.svg'







const FeatureSection = () => {


    return (
        <>
            <div className="row">
                <Card src={CardResponsive} title={'Fully Responsive'} description={'  With lots of unique blocks, you can easily build a page without coding.'} />
                <Card src={CardLayout} title={' Multiple Layouts'} description={'  With lots of unique blocks, you can easily build a page without coding.'} logoBgColor={'rgba(240, 64, 55, 0.1)'} />
                <Card src={CardLoading} title={'Faster Loading'} description={'  With lots of unique blocks, you can easily build a page without coding.'} logoBgColor={'rgba(254, 220, 90, 0.1)'} />
            </div>
            <div className="row">
                <Card src={CardSupport} title={'Super Support'} description={'  With lots of unique blocks, you can easily build a page without coding.'} logoBgColor={'rgba(240, 64, 55, 0.1)'}/>
                <Card src={CardDocument} title={'Rich Documentation'} description={'  With lots of unique blocks, you can easily build a page without coding.'} logoBgColor={'rgba(254, 220, 90, 0.1)'}/>
                <Card src={CardUpdate} title={' Lifetime Updates'} description={'  With lots of unique blocks, you can easily build a page without coding.'} logoBgColor={'rgba(84, 84, 212, 0.1)'}/>
            </div>
        </>
    )

}

export default FeatureSection