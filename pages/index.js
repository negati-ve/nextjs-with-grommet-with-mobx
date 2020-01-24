import React from 'react'
import { Anchor, Box, Heading, Paragraph } from 'grommet'
import {observer, inject} from 'mobx-react'

@observer
@inject('store')
export default class Main extends React.Component{

render = () =>{
  return(
      <Box align="center" margin="large">
        <Heading>{this.props.store.userStore.name} is awesome!</Heading>
        <Paragraph>
          Find out more at{' '}
          <Anchor href="https://v2.grommet.io/">https://v2.grommet.io/</Anchor>
        </Paragraph>
      </Box>
  )
  }
}
