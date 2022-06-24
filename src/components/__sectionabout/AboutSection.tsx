
import { Grid } from '@mui/material'
import React from 'react'
import AboutCard from './AboutCard'

const AboutSection = () => {
  return (
      <div>
          <Grid container xs={12} className="bg-about-bg text-white p-20 mt-20">
              <AboutCard />
          </Grid >
    </div>
  )
}

export default AboutSection