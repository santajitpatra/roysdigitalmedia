import { Container, Heading } from '@radix-ui/themes'
import React from 'react'

const Jumbotron = () => {
    return (
        <Container  size={"2"} className='lg:px-28 py-28 px-4'>
            <h1 className="flex tracking-wider capitalize text-3xl font-extralight text-center text-primary-dark md:text-4xl lg:text-5xl">
                A modern marketing agency helping brands share their story through digital media.
            </h1>
        </Container>

    )
}

export default Jumbotron