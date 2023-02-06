import {
  Container,
  Box,
  Heading,
  Image,
  Link,
  Button,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import NextLink from 'next/link'
import { BioSection, BioYear } from '../components/bio.js'

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mb={6}
        align="center"
      >
        Hello, I&apos;m a web developer based in Venezuela!
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" varian="page-title">
            Jose Andres
          </Heading>
          <p>Fullstack Web Developer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            displat="inline-block"
            borderRadius="full"
            src="/images/profile-image.png"
            alt="Profile Image"
          />
        </Box>
      </Box>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Description
        </Heading>
        <Paragraph>
          {' '}
          Jose Andres is a full-stack developer based in Venezuela with a
          passion for building digital services. He is currently a computer
          science student in the "Universidad Católica Andrés Bello".{' '}
          <Link as={NextLink} href="https://github.com/Noralgorithm">
            Github
          </Link>
          .
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            {' '}
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My Portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.4}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2002</BioYear>
          Born in Guayana, Venezuela.
        </BioSection>
        <BioSection>
          <BioYear>2003</BioYear>
          Equisde
        </BioSection>
        <BioSection>
          <BioYear>2004</BioYear>
          asodaij
        </BioSection>
      </Section>

      <Section delay={0.6}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
      </Section>
    </Container>
  )
}

export default Page
