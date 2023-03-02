import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'

const Work = () => (
  <Layout title="offside">
    <Container>
      <Title>
        Offside <Badge>2022</Badge>
      </Title>
      <P>
        A web and mobile application that combined the dynamics of collecting
        panini stickers and fantasy football. It was a great business project
        that was developed under a work environment, where I had the role of
        fullstack developer.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://playoffside.online/" color="pink.400">
            https://playoffside.online/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          Web/Android/iOS
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, Express, React, React Native</span>
        </ListItem>
      </List>

      <WorkImage src='/images/Offside/landingImg.png' alt="offside landing page"/>
      <WorkImage src='/images/Offside/loginImg.png' alt="offside landing page"/>
      <WorkImage src='/images/Offside/dashboardImg.png' alt="offside landing page"/>
      <WorkImage src='/images/Offside/albumCoverImg.png' alt="offside landing page"/>
      <WorkImage src='/images/Offside/fantasyImg.png' alt="offside landing page"/>
      
    </Container>
  </Layout>
)

export default Work
