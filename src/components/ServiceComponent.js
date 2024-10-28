import React from 'react'

const ServiceComponent = () => {
    const service = [
        {
            id: 1,
            title: 'Service 1',
            description: 'Web development service',
            image: 'https://picsum.photos/200/300'
        },
        {
            id: 2,
            title: 'Service 2',
            description: 'Web development service',
            image: 'https://picsum.photos/200/300'
        },
        {
            id: 3,
            title: 'Service 3',
            description: 'Web development service',
            image: 'https://picsum.photos/200/300'
        },
        {
            id: 4,
            title: 'Service 4',
            description: 'Web development service',
            image: 'https://picsum.photos/200/300'
        },
        {
            id: 5,
            title: 'Service 5',
            description: 'Web development service',
            image: 'https://picsum.photos/200/300'
        },
        {
            id: 6,
            title: 'Service 6',
            description: 'Web development service',
            image: 'https://picsum.photos/200/300'
        },
        {
            id: 7,
            title: 'Service 7',
            description: 'Web development service',
            image: 'https://picsum.photos/200/300'
        },
        {
            id: 8,
            title: 'Service 8',
            description: 'Web development service',
            image: 'https://picsum.photos/200/300'
        },
        {
            id: 9,
            title: 'Service 9',
            description: 'Web development service',
            image: 'https://picsum.photos/200/300'
        },
        {
            id: 10,
            title: 'Service 10',
            description: 'Web development service',
            image: 'https://picsum.photos/200/300'
        },
    ];

    return (
        <div id='services' className='mt-20 scroll-smooth px-4'>
            <h1 className='text-4xl font-bold text-center mb-10'>Our Services</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    service.map((item) => (
                        <div key={item.id} className='bg-gray-200 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
                            <div className='flex justify-center items-center'>
                                <h1 className='text-2xl font-semibold mb-4 text-center'>{item.title}</h1>
                            </div>

                            <div className='min-h-[200px]'>
                                <img 
                                    src={item.image} 
                                    className='w-full h-[200px] rounded-md object-cover object-center' 
                                    alt={item.title}
                                />
                            </div>

                            <div className='mt-4'>
                                <p className='text-base text-gray-700 text-center'>{item.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ServiceComponent
