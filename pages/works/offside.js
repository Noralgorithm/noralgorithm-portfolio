import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

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
    </Container>
  </Layout>
)

export default Work
