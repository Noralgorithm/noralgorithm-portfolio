import { Box, Container } from '@chakra-ui/react'
import Navbar from './navbar'
import Head from 'next/head'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8} flex>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Noralgorithm - Homepage</title>
      </Head>

      <Navbar path={router?.asPath} />

      <Container maxW="container.md" pt={20}>
        {children}
      </Container>
    </Box>
  )
}

export default Main
