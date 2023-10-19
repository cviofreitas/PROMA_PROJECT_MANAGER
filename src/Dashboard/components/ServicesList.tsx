import React from 'react'

// CSS imports
import './ServicesList.css'

import {  Service } from '../../models/project.model';


var formatterUSD = new Intl.NumberFormat('en-US', {
    style: "currency",
    currency: 'USD',
    maximumFractionDigits: 2,
});



type ServicesListProps = {
services: Service[]
}

const ServicesList = ({ services}:ServicesListProps) => {
    return (
        <div className='ServiceListContainer'>
            {services.map((service) =>
                <div className='FlexRow ServiceList'
                    key={service.id}
                    style={{
                        justifyContent: 'space-between',
                    }}>
                    <h4>
                        {service.service}
                    </h4>
                    <h4>
                        {formatterUSD.format(service.qty * service.rate)}
                    </h4>
                </div>
            )}
        </div>
    )
}

export default ServicesList