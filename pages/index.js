import {
  Container,
  Box,
  Heading,
  Image,
  Button,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import NextLink from 'next/link'
import { BioSection, BioYear } from '../components/bio.js'

const Page = () => {
  return (
    <Layout>
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
              src="/images/profile-image.jpg"
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
            Hi!, I&apos;m a full-stack developer based in Venezuela with a
            passion for building digital solutions and web applications.
            I&apos;m currently a computer science student in the
            &quot;Universidad Católica Andrés Bello&quot;.
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
            <BioYear>2018</BioYear>
            Obtained a high school diploma in sciences from &quot;UECIC Gonzalo
            Mendez II&quot;.
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            Computer science degree started.
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            I began my journey in web development.
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Started building my portfolio by taking on freelance projects.
          </BioSection>
        </Section>
        <Section delay={0.6}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            Art, music, playing Some Instruments, Rubik&apos;s Cube, Software Architecture.
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
