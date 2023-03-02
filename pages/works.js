import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
//import thumbnail
import offside_img from '../public/images/Offside/offside-adaptive.png'
import Layout from '../components/layouts/article'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" frontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="offside" title="Offside" thumbnail={offside_img}>
              A web and mobile application that combined the dynamics of
              collecting panini stickers and fantasy football.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
      <Section delay={0.6}>
        <Heading as="h5" w="100%" align="center" color="#555" opacity="0.2" fontSize={30}>More coming soon...</Heading>
      </Section>
    </Layout>
  )
}

export default Works
