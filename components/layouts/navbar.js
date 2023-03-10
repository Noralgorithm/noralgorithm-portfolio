import Logo from './logo'
import NextLink from 'next/link'
import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue
} from '@chakra-ui/react'
import ThemeToggleButton from './theme-toggle-button'
import GithubButton from './github-button'

const LinkItem = ({ href, path, children }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('black.500', 'whiteAlpha.800')
  return (
    <Link
      as={NextLink}
      href={href}
      p={2}
      bg={active ? 'glassTeal' : undefined}
      color={active ? '#202023' : inactiveColor} //change later
    >
      {children}
    </Link>
  )
}

const Navbar = props => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing="tighter">
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, nmd: 0 }}
        >
          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>
          <LinkItem href="https://github.com/Noralgorithm" path={path}>
            <GithubButton />
          </LinkItem>
        </Stack>
        <Box flex={1} align="right">
          <ThemeToggleButton />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <Link as={NextLink} href="/">
                  <MenuItem>About</MenuItem>
                </Link>
                <Link as={NextLink} href="/works">
                  <MenuItem>Works</MenuItem>
                </Link>
                <Link as={NextLink} href="https://github.com/Noralgorithm">
                  <MenuItem>My Github</MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
