import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="venter" color="#fff">
        Hello, I&apos;m a full-stack developer based in Venezuela!
      </Box>
      <Box display={{md:'flex'}}>
        <Box flexGrow={1}>
          <Heading as="h2" varian="page-title">
            Jose Andres
          </Heading>
          <p>Web Developer</p>
        </Box>
      </Box>
      <div>Hello, world!</div>
    </Container>
  )
}

export default Page
