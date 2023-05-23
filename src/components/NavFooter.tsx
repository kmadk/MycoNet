import { FunctionComponent } from "react"

import { Typography, Box, Link, Grid } from "@material-ui/core"

const AppFooter: FunctionComponent = () => (
  <Box paddingBottom={2}>
    <Typography variant="body2" component="div">
      <Grid container spacing={1}>
        <Grid item>
          <Link
            href="https://github.com/kmadk/MycoNet/issues"
            underline="hover"
            target="_blank"
            rel="noreferrer"
            color="textPrimary"
          >
            Report an issue
          </Link>
        </Grid>
      </Grid>
    </Typography>
  </Box>
)

export default AppFooter
