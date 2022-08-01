import React from "react";
import { Typography,Container, Card , CardActions, CardContent , CardMedia , CssBaseline , AppBar,Toolbar,Grid, Button } from '@mui/material';
import {PhotoCamera} from '@mui/icons-material';
import styled from "@emotion/styled";
import photo from './images/with.jpg'

const arr = [1,2,3,4,5,,6,7,8,9];


function App() {




  return (
    <>
    <CssBaseline />
       <AppBar position="relative"  color="secondary">
        <Toolbar>
          <PhotoCamera sx={{marginRight: 1.5}}/>
            <Typography  variant="h6">Photo Gallery</Typography>
        </Toolbar>
       </AppBar>
       <main>
        <Div>
          <Container maxWidth="sm">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
              Photo Album
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero voluptatibus harum eveniet sapiente, temporibus ratione. Nulla
            </Typography>
            <div>
              <Grid container spacing={2} justifyContent="center">
              
                <Grid item>
                  <Button variant="contained" color="secondary">See my Photos</Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="secondary">Second Action</Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </Div>
        <Container maxWidth="md">
          <Grid container spacing={4} sx={{marginTop: '50px'}} >
              {arr.map((i) => (
                  <Grid item key={i} xs={12} sm={6} md={4}>
                    <StyledCard>
                      <CardMedia 
                      image={photo}
                      sx={{paddingTop: '56.25%'}}
                      />
                      <ContentCard>
                      <Typography variant="h5" gutterBottom>
                        Heading
                      </Typography>
                      <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      </Typography>
                      </ContentCard>
                      <CardActions>
                        <Button variant="outlined" color="secondary" size="small">View</Button>
                        <Button variant="outlined" color="secondary" size="small">Details</Button>
                      </CardActions>
                    </StyledCard>
                  </Grid>
            ))
              
              }
                 
                
          </Grid>
        </Container>
       </main>
       <footer style={{marginTop: "30px" , background: "#fefefe", padding: '50px 0'}}>
        <Container>
              <Typography variant="h5" color="textPrimary" align="center" gutterBottom>
               Footer
              </Typography>
              <Typography variant="subtitle1" color="textSecondary" align="center" gutterBottom>
                This is a test text for Footer
              </Typography>
        </Container>
       </footer>
    </>
  );
}



const Div = styled.div`
margin-top: 100px;
div{
  margin-top: 20px;
}
`;
const StyledCard = styled(Card)`
height: 100%;
display: flex;
flex-direction: column;
`
const StyledImg = styled(CardMedia)`
padding-top: 56.25%;
`
const ContentCard = styled(CardContent)`
flex-grow: 1;
`






export default App;
