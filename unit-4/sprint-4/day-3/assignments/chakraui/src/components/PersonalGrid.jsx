import { Center, Grid, GridItem } from '@chakra-ui/react'


export default function PersonalGrids(){
    return <>
    <Grid templateColumns={{md:'15% 60% 15%',"2xl":'100%'}} margin="5%">
        <GridItem w='100%' h='250' bg='blue.500' ><Center height="100%" fontSize="30px">Nav</Center></GridItem>
        <GridItem w='100%' h='250' bg='red.500' ><Center height="100%" fontSize="30px">Content</Center></GridItem>
        <GridItem w='100%' h='250' bg='yellow.500' ><Center height="100%" fontSize="30px">Widget</Center></GridItem>
    </Grid>
    
    </>
}