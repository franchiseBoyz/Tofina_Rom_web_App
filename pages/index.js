import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Text, Button} from '@chakra-ui/react';

const Banner = ({purpose, title2, title1, desc1, desc2, buttonText, imageUrl, linkName}) => (
  <Flex flexWrap="wrap" justifyContent='center' alignItems='center' m="10">
    <Image src ={imageUrl} width={500} height={300} alt="banner" />
    <Box p='5'>
      <Text color ="gray.500" fontSize="sm" fontWeight='medium'>{purpose}</Text>
      <Text fontSize ="3xl" fontWeight="bold">{title1}<br />{title2}</Text>
      <Text fontSize ="lg" paddingTop="3" paddingBottom='3' color='gray.700'>{desc1}<br />{desc2}</Text>
      <Button fontSize="xl" bg="blue.300" color="white">
        <Link href={linkName}><a>{buttonText}</a></Link>
      </Button>      
    </Box>
  </Flex>
);

export default function Home() {
  return (
    <div>
      <h1> Real Estate App</h1>
      <Banner
       purpose="RENT A HOME"
       title1="Rental Homes for"
       title2="Everyone"
       desc1="Explore Apartments, Villas and Homes"
       desc2="Welcome"
       buttonText="Explore Renting"
       linkName="/search?purpose=for-rent"
       imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />

      <Banner
       purpose="BUY A HOME"
       title1="Find, Buy and Own Your"
       title2="Dream Home"
       desc1="Explore Apartments, Villas and Homes"
       desc2="Welcome"
       buttonText="Explore Buying"
       linkName="/search?purpose=for-sale"
       imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      /> 
    </div>
  )
}