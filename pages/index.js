import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoLinkedin, IoLogoGithub, IoLogoMedium } from 'react-icons/io5'
import thumbMedium from '../public/images/links/medium.png'
import thumbDSA from '../public/images/links/dsa.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a full-stack developer based in India!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Aditya Patel
          </Heading>
          <p>Full Stack Developer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/aditya.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading
          as="h3"
          variant="section-title"
          style={{
            textDecoration: 'underline',
            textUnderlineOffset: '6px',
            textDecorationColor: '#525252',
            textDecorationThickness: '4px'
          }}
        >
          Work
        </Heading>
        <Paragraph>
          I am full-stack developer with a passion for building digital
          services/end-to-end websites. My expertise lies in launching products
          from planning and design stages to solving real-life problems with
          code. As a fun fact, I can dead-lift 150 kgs. 😺
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading
          as="h3"
          variant="section-title"
          style={{
            textDecoration: 'underline',
            textUnderlineOffset: '6px',
            textDecorationColor: '#525252',
            textDecorationThickness: '4px'
          }}
        >
          Bio
        </Heading>
        <BioSection>
          <BioYear>1996</BioYear>
          Born in India.
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Completed the Bachelor&apos;s of Engineering Program in
          Telecommunication Engineering Field at BMSIT Institute of Technology
          and Science
        </BioSection>
        <BioSection>
          <BioYear>2021 - 2022</BioYear>
          Worked at Nonceblox as a Full-Stack Developer
        </BioSection>
        <BioSection>
          <BioYear>2022 to present</BioYear>
          Working as a Full-Stack Developer at CX100
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading
          as="h3"
          variant="section-title"
          style={{
            textDecoration: 'underline',
            textUnderlineOffset: '6px',
            textDecorationColor: '#525252',
            textDecorationThickness: '4px'
          }}
        >
          I ♥
        </Heading>
        <Paragraph>
          Hiking, Camping, Playing Football, Gaming, Working Out
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading
          as="h3"
          variant="section-title"
          style={{
            textDecoration: 'underline',
            textUnderlineOffset: '6px',
            textDecorationColor: '#525252',
            textDecorationThickness: '4px'
          }}
        >
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/cacti23" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @cacti23
              </Button>
            </Link>
          </ListItem>

          <ListItem>
            <Link
              href="https://www.linkedin.com/in/adityap314/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @adityap314
              </Button>
            </Link>
          </ListItem>

          <ListItem>
            <Link href="https://medium.com/@aditya-patel" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoMedium />}
              >
                @aditya-patel
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6} mt={2}>
          <GridItem
            href="https://aditya-patel.medium.com/"
            title="Medium Blog"
            thumbnail={thumbMedium}
          >
            My Medium Blog
          </GridItem>
          <GridItem
            href="https://dsa-questions-tracker.vercel.app/"
            title="DSA Tracker App"
            thumbnail={thumbDSA}
          >
            An app to track your DSA progress
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="/posts" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
