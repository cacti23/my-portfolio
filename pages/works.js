import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbDSA from '../public/images/works/dsa-tracker.png'
import thumbNoteTaker from '../public/images/works/note-taker.png'
import thumbHackerNews from '../public/images/works/hacker-news.png'
import thumbAwesomeGallery from '../public/images/works/awesome-gallery.png'
import thumbExpenseTracker from '../public/images/works/expense-tracker.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading
        as="h3"
        fontSize={20}
        mb={4}
        style={{
          textDecoration: 'underline',
          textUnderlineOffset: '6px',
          textDecorationColor: '#525252',
          textDecorationThickness: '4px'
        }}
      >
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            link="https://dsa-questions-tracker.vercel.app/"
            title="DSA Tracker App"
            thumbnail={thumbDSA}
          >
            While going through our DSA journey, we all needs a solution to
            track our progress. This app is made exactly to solve that problem.
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            link="https://note-taker-app-black.vercel.app/"
            title="Note Taker App"
            thumbnail={thumbNoteTaker}
          >
            This app helps you to take notes. You can pin notes, move them to
            archive or move to trash. It is a simple application to make you
            life easy. 😺
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            link="https://objective-minsky-7d1cd6.netlify.app"
            thumbnail={thumbExpenseTracker}
            title="Expense Tracker App"
          >
            This is a MERN stack based app that helps you in tracking your
            expenses.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            link="https://xenodochial-edison-f072d6.netlify.app/"
            title="Hacker News App"
            thumbnail={thumbHackerNews}
          >
            App to shows the hacker news article related to the term you search
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            link="https://nostalgic-yalow-347c0f.netlify.app/"
            thumbnail={thumbAwesomeGallery}
            title="Awesome Gallery App"
          >
            An app that shows the images for the topic you search
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
