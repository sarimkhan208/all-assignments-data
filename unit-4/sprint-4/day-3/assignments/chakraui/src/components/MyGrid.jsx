import { Center, Grid, GridItem } from '@chakra-ui/react'

export default function MyGrid(){
    return <>
    <Grid h="400px" templateColumns={{base:'repeat(6,1fr)',sm:'repeat(6,1fr)',md:"repeat(6,1fr)"}}
     templateRows={{base:'repeat(6,1fr)',sm:'repeat(6,1fr)',md:"repeat(6,1fr)"}} gap={4} margin="5%">
        
        <GridItem bg="yellow" colSpan={{base:6,sm:3,md:3}} rowSpan={{base:1,sm:2,md:2}}></GridItem>
        <GridItem bg="yellow" colSpan={{base:6,sm:3,md:3}} rowSpan={{base:1,sm:2,md:2}}></GridItem>

        <GridItem bg="pink" colSpan={{base:6,sm:6,md:6}} rowSpan={{base:2,sm:2,md:2}} ></GridItem>


        <GridItem bg="blue" colSpan={{base:6,sm:6,md:2}} rowSpan={{base:1,sm:1,md:2}}></GridItem>

        <GridItem bg="blue" colSpan={{base:6,sm:6,md:2}} rowSpan={{base:1,sm:1,md:2}}></GridItem>

        <GridItem bg="blue" colSpan={{base:0,sm:0,md:2}} rowSpan={{base:0,sm:0,md:2}}></GridItem>
    </Grid>
    
    </>
}