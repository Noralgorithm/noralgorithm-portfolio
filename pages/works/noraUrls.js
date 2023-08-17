import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Nora's URL shortener">
    <Container>
      <Title>
        Nora&apos; URL shortener <Badge>2023</Badge>
      </Title>
      <P>Website where I can create my own short urls.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://nora-urls.vercel.app/" color="pink.400">
            https://nora-urls.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          Web
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Next, React, Redis</span>
        </ListItem>
      </List>

      <WorkImage
        src="/images/Nora-Urls/noraUrls-img.PNG"
        alt="nora's url shortener page"
      />
     
    </Container>
  </Layout>
)

export default Work
