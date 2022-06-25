import { Divider } from '@material-ui/core'
import { Box, Container, Grid, ListItem } from '@mui/material'


const AboutHeader = () => {
  return (
    <div>
      <Container maxWidth='md'>
				<Box>
					<Grid>
						<ListItem className='mb-10'>
							<Divider
								style={{
									color: 'white',
									borderBottom: '2px solid white',
									padding: '10px',
									marginRight: '10px',
									width: '2em'
								}}
							/>
							<h1>About.</h1>
						</ListItem>

						<ListItem>
							<p className='text-sm -mt-20 text-purple font-extrabold'>WE ARE MORE THEN WEATHE FORECAST</p>
						</ListItem>
					</Grid>
				</Box>
			</Container>
    </div>
  )
}

export default AboutHeader