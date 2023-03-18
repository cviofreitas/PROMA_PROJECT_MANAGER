const userData = {
    profile: {
        userName: 'bobthebuilder23',
        name: {
            first: 'Robert',
            last: 'Smith',
        },
        email: 'bobSmith23@gmail.com',
        companyName: 'Black Cypress Homes',
        address: {
            street: '709 East Valley St',
            city: 'Hidden Oaks',
            state: 'CA',
            zipCode: '53727'
        },
        avatar: 'https://images.unsplash.com/photo-1548449112-96a38a643324?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    },
    clients: [
        {
            id: 1001,
            customerName: {
                last: 'Ellis',
                first: 'Joe',
            },
            address: {
                street: '1280 Bridge Rd',
                city: 'Hidden Valley',
                state: 'CA',
                zipCode: '53890'
            },
            phoneNum: '221-390-1909',
            email: 'joebrady@yahoo.com',
            projects: [
                {
                    projectName: 'Kitchen Renovation',
                    invoiceId: 1103,
                    services: [
                        {
                            id: 1,
                            service: 'Demolition and Disposal',
                            description: 'Remove all cabinets, counter tops, and back splash.',
                            qty: 1,
                            rate: 2250,
                        },
                        {
                            id: 2,
                            service: 'Cabinets',
                            description: '35 linear ft of cabinetry.',
                            qty: 16,
                            rate: 218.70,
                        },
                        {
                            id: 3,
                            service: 'Electrical',
                            description: 'Add two outlets, reroute stove outlet to kitchen island.',
                            qty: 3,
                            rate: 175,
                        },
                        {
                            id: 4,
                            service: 'Plumbing',
                            description: 'New sink, dishwasher, and fridge installation.',
                            qty: 3,
                            rate: 200,
                        },
                        {
                            id: 5,
                            service: 'Back splash',
                            description: '110 sqft of back splash and installation',
                            qty: 15,
                            rate: 16.89,
                        },
                        {
                            id: 6,
                            service: 'Labor cost',
                            description: '25/ hour',
                            qty: 120,
                            rate: 25,
                        },
                    ],
                    sentDate: {
                        day: 7,
                        month: 10,
                        year: 2022
                    },
                    dueDate: {
                        day: 1,
                        month: 12,
                        year: 2023
                    },
                    paid: 2500,
                    images: []

                }, {
                    projectName: 'Bathroom remodel',
                    invoiceId: 1104,
                    services: [
                        {
                            id: 1,
                            service: 'Demolition and Disposal',
                            description: 'Remove all cabinets, counter tops, and back splash.',
                            qty: 1,
                            rate: 1550,
                        },
                        {
                            id: 2,
                            service: 'Cabinets',
                            description: '10 linear ft of cabinetry.',
                            qty: 10,
                            rate: 218.70,
                        },
                        {
                            id: 3,
                            service: 'Vanity',
                            description: '2x Prowell Vanity',
                            qty: 2,
                            rate: 199.99,
                        },
                        {
                            id: 4,
                            service: 'Plumbing',
                            description: 'Vanity and toilet install',
                            qty: 3,
                            rate: 200,
                        },
                        {
                            id: 5,
                            service: 'Back splash',
                            description: '110 sqft of back splash and installation',
                            qty: 15,
                            rate: 16.89,
                        },
                        {
                            id: 6,
                            service: 'Flooring',
                            description: '80 Sqft',
                            qty: 80,
                            rate: 7,
                        },
                        {
                            id: 7,
                            service: 'Labor cost',
                            description: '25/ hour',
                            qty: 100,
                            rate: 25,
                        },
                    ],
                    sentDate: {
                        day: 7,
                        month: 10,
                        year: 2022
                    },
                    dueDate: {
                        day: 15,
                        month: 1,
                        year: 2023
                    },
                    paid: 8050.33,
                    images: []

                }


            ]
        },
        {
            id: 1002,
            customerName: {
                last: 'Hatfield',
                first: 'Ronin',
            },
            address: {
                street: '1850 South Lake Dr',
                city: 'Hidden Valley',
                state: 'CA',
                zipCode: '53892'
            },
            phoneNum: '221-379-2784',
            email: 'RonronHatfield@yahoo.com',
            projects: [
                {
                    projectName: 'Bathroom remodel',
                    invoiceId: 1105,
                    services: [
                        {
                            id: 1,
                            service: 'Demolition and Disposal',
                            description: 'Remove all cabinets, counter tops, and back splash.',
                            qty: 1,
                            rate: 1550,
                        },
                        {
                            id: 2,
                            service: 'Cabinets',
                            description: '10 linear ft of cabinetry.',
                            qty: 10,
                            rate: 218.70,
                        },
                        {
                            id: 3,
                            service: 'Vanity',
                            description: '2x Prowell Vanity',
                            qty: 2,
                            rate: 199.99,
                        },
                        {
                            id: 4,
                            service: 'Plumbing',
                            description: 'Vanity and toilet install',
                            qty: 3,
                            rate: 200,
                        },
                        {
                            id: 5,
                            service: 'Back splash',
                            description: '110 sqft of back splash and installation',
                            qty: 15,
                            rate: 16.89,
                        },
                        {
                            id: 6,
                            service: 'Flooring',
                            description: '80 Sqft',
                            qty: 80,
                            rate: 7,
                        },
                        {
                            id: 7,
                            service: 'Labor cost',
                            description: '25/ hour',
                            qty: 120,
                            rate: 25,
                        },
                    ],
                    sentDate: {
                        day: 9,
                        month: 10,
                        year: 2022
                    },
                    dueDate: {
                        day: 1,
                        month: 2,
                        year: 2023
                    },
                    paid: 7500,
                    images: []

                }

            ]
        },
        {
            id: 1003,
            customerName: {
                last: 'Bennett',
                first: 'Walter',
            },
            address: {
                street: '7600 West Linda Park',
                city: 'Hidden Valley',
                state: 'CA',
                zipCode: '53890'
            },
            phoneNum: '221-209-8891',
            email: 'walter67ben@yahoo.com',
            projects: [
                {
                    projectName: 'Kitchen Renovation',
                    invoiceId: 1106,
                    services: [
                        {
                            id: 1,
                            service: 'Demolition and Disposal',
                            description: 'Remove all cabinets, counter tops, and back splash.',
                            qty: 1,
                            rate: 2250,
                        },
                        {
                            id: 2,
                            service: 'Cabinets',
                            description: '35 linear ft of cabinetry.',
                            qty: 16,
                            rate: 218.70,
                        },
                        {
                            id: 3,
                            service: 'Electrical',
                            description: 'Add two outlets, reroute stove outlet to kitchen island.',
                            qty: 3,
                            rate: 175,
                        },
                        {
                            id: 4,
                            service: 'Plumbing',
                            description: 'New sink, dishwasher, and fridge installation.',
                            qty: 3,
                            rate: 200,
                        },
                        {
                            id: 5,
                            service: 'Back splash',
                            description: '110 sqft of back splash and installation',
                            qty: 15,
                            rate: 16.89,
                        },
                        {
                            id: 6,
                            service: 'Labor cost',
                            description: '25/ hour',
                            qty: 120,
                            rate: 25,
                        },
                    ],
                    sentDate: {
                        day: 7,
                        month: 10,
                        year: 2022
                    },
                    dueDate: {
                        day: 7,
                        month: 12,
                        year: 2022
                    },
                    paid: 3500,
                    images: []

                }

            ]
        },
        {
            id: 1004,
            customerName: {
                last: 'Hoover',
                first: 'Erin',
            },
            address: {
                street: '1265 Allen Rd',
                city: 'Hidden Valley',
                state: 'CA',
                zipCode: '53890'
            },
            phoneNum: '221-898-3992',
            email: 'joebrady@yahoo.com',
            projects: [
                {
                    projectName: 'Cabinet Refacing',
                    invoiceId: 1107,
                    services: [
                        {
                            id: 1,
                            service: 'Remove cabinet faces',
                            description: '16 cabinets',
                            qty: 16,
                            rate: 10,
                        },
                        {
                            id: 2,
                            service: 'Order new cabinet faces',
                            description: '35 linear ft of cabinetry.',
                            qty: 16,
                            rate: 70.50,
                        },
                        {
                            id: 3,
                            service: 'Order reface veneer',
                            description: 'Add two outlets, reroute stove outlet to kitchen island.',
                            qty: 2,
                            rate: 120.87,
                        },
                        {
                            id: 5,
                            service: 'Back splash',
                            description: '110 sqft of back splash and installation',
                            qty: 20,
                            rate: 16.09,
                        },
                        {
                            id: 6,
                            service: 'Labor cost',
                            description: '25/ hour',
                            qty: 43,
                            rate: 25,
                        },
                    ],
                    sentDate: {
                        day: 7,
                        month: 10,
                        year: 2022
                    },
                    dueDate: {
                        day: 7,
                        month: 12,
                        year: 2022
                    },
                    paid: 2926.54,
                    images: [],
                }

            ]
        },
        {
            id: 1005,
            customerName: {
                last: 'Forde',
                first: 'Jack',
            },
            address: {
                street: '178 Linda Dr',
                city: 'Hidden Valley',
                state: 'CA',
                zipCode: '53890'
            },
            phoneNum: '221-718-3672',
            email: 'fordeJP@gmail.com',
            projects: [
                {
                    projectName: 'Guest House',
                    invoiceId: 1109,
                    services: [
                        {
                            id: 1,
                            service: 'Remove cabinet faces',
                            description: '16 cabinets',
                            qty: 16,
                            rate: 10,
                        },
                        {
                            id: 99,
                            service: 'Paint',
                            description: '2 Gallons of paint',
                            qty: 16,
                            rate: 10,
                        },
                        {
                            id: 2,
                            service: 'Order new cabinet faces',
                            description: '35 linear ft of cabinetry.',
                            qty: 35,
                            rate: 70.50,
                        },
                        {
                            id: 3,
                            service: 'Outlets 5',
                            description: 'Add two outlets, reroute stove outlet to kitchen island.',
                            qty: 5,
                            rate: 120.87,
                        },
                        {
                            id: 5,
                            service: 'Back splash',
                            description: '110 sqft of back splash and installation',
                            qty: 100,
                            rate: 16.09,
                        },
                        {
                            id: 6,
                            service: 'Labor cost',
                            description: '25/ hour',
                            qty: 43,
                            rate: 25,
                        },
                    ],
                    sentDate: {
                        day: 1,
                        month: 1,
                        year: 2023
                    },
                    dueDate: {
                        day: 3,
                        month: 6,
                        year: 2023
                    },
                    paid: 5500.00,
                    images: [],
                },
                {
                    projectName: 'Full Renovation',
                    invoiceId: 1108,
                    services: [
                        {
                            id: 1,
                            service: 'Remove cabinet faces',
                            description: '16 cabinets',
                            qty: 16,
                            rate: 10,
                        },
                        {
                            id: 99,
                            service: 'Paint',
                            description: '2 Gallons of paint',
                            qty: 16,
                            rate: 10,
                        },
                        {
                            id: 2,
                            service: 'Order new cabinet faces',
                            description: '35 linear ft of cabinetry.',
                            qty: 35,
                            rate: 70.50,
                        },
                        {
                            id: 3,
                            service: 'Outlets 5',
                            description: 'Add two outlets, reroute stove outlet to kitchen island.',
                            qty: 5,
                            rate: 120.87,
                        },
                        {
                            id: 5,
                            service: 'Back splash',
                            description: '110 sqft of back splash and installation',
                            qty: 20,
                            rate: 16.09,
                        },
                        {
                            id: 6,
                            service: 'Labor cost',
                            description: '25/ hour',
                            qty: 43,
                            rate: 25,
                        },
                    ],
                    sentDate: {
                        day: 9,
                        month: 12,
                        year: 2022
                    },
                    dueDate: {
                        day: 2,
                        month: 12,
                        year: 2023
                    },
                    paid: 2500.00,
                    images: [],
                },

            ]
        },
        {
            id: 1006,
            customerName: {
                last: 'Bright',
                first: 'Amy',
            },
            address: {
                street: '7600 West Linda Park',
                city: 'Hidden Valley',
                state: 'CA',
                zipCode: '53890'
            },
            phoneNum: '221-209-8891',
            email: 'walter67ben@yahoo.com',
            projects: [
                {
                    projectName: 'Kitchen Renovation',
                    invoiceId: 1110,
                    services: [
                        {
                            id: 1,
                            service: 'Demolition and Disposal',
                            description: 'Remove all cabinets, counter tops, and back splash.',
                            qty: 1,
                            rate: 4250,
                        },
                        {
                            id: 2,
                            service: 'Cabinets',
                            description: '40 linear ft of cabinetry.',
                            qty: 40,
                            rate: 218.70,
                        },
                        {
                            id: 3,
                            service: 'Electrical',
                            description: 'Add two outlets, reroute stove outlet to kitchen island.',
                            qty: 2,
                            rate: 175,
                        },
                        {
                            id: 4,
                            service: 'Plumbing',
                            description: 'New sink, dishwasher, and fridge installation.',
                            qty: 3,
                            rate: 200,
                        },
                        {
                            id: 5,
                            service: 'Back splash',
                            description: '110 sqft of back splash and installation',
                            qty: 15,
                            rate: 16.89,
                        },
                        {
                            id: 6,
                            service: 'Labor cost',
                            description: '25/ hour',
                            qty: 120,
                            rate: 25,
                        },
                    ],
                    sentDate: {
                        day: 7,
                        month: 10,
                        year: 2022
                    },
                    dueDate: {
                        day: 7,
                        month: 12,
                        year: 2022
                    },
                    paid: 8500,
                    images: []

                }

            ]
        },
    ]


}

export default userData