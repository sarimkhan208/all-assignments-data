
import { Grid, GridItem } from '@chakra-ui/react'
export default function MultiDimGrid(){
    return <>


    <Grid h="400px" templateColumns={{base:'repeat(1,1fr)',sm:'repeat(1,1fr)',md:"repeat(3,1fr)"}}
     templateRows={{base:'repeat(3,1fr)',sm:'repeat(3,1fr)',md:"repeat(3,1fr)"}} gap={4} margin="5%">
        <GridItem bg="red" colSpan={{base:0,sm:0,md:2}} rowSpan={{base:0,sm:0,md:2}}></GridItem>
        <GridItem bg="orange" rowSpan={{base:0,sm:0,md:3}} ></GridItem>
        <GridItem bg="yellow" colSpan={{base:0,sm:0,md:2}} ></GridItem>
    </Grid>

    </>
}