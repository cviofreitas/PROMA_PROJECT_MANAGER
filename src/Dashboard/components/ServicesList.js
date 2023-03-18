import React from 'react'

// CSS imports
import './ServicesList.css'
var formatterUSD = new Intl.NumberFormat('en-US', {
    style: "currency",
    currency: 'USD',
    maximumFractionDigits: 2,
});
const ServicesList = ({ services }) => {
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