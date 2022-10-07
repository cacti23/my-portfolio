import Head from 'next/head'
import dynamic from 'next/dynamic'
import Navbar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Aditya's homepage" />
        <meta name="author" content="Aditya Patel" />
        <meta name="author" content="aditya" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Aditya Patel" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@adi1ya_patel" />
        <meta name="twitter:creator" content="@adi1ya_patel" />
        <meta name="twitter:image" content="https://www.craftz.dog/card.png" />
        <meta property="og:site_name" content="Aditya Patel" />
        <meta name="og:title" content="Aditya Patel" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.craftz.dog/card.png" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>

        <title>Aditya Patel - Homepage</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelDog />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
