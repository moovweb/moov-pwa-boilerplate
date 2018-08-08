import React, { Component } from 'react'
import { Skeleton, BlankRow, Row, Space, Content, Tiles } from 'moov-pwa/Skeleton'
import withStyles from '@material-ui/core/styles/withStyles'
import { inject, observer } from 'mobx-react'
import { Typography } from '../../node_modules/@material-ui/core';

const styles = theme => ({
  imagePlaceholder: {
    paddingTop: '100%',
    flex: 1
  },
  text: {
    backgroundColor: theme.palette.background.paper
  }
})

@withStyles(styles)
@inject(({ app }) => ({ subcategory: app.subcategory }))
@observer
export default class SubcategorySkeleton extends Component {
  
  render() {
    const { subcategory } = this.props

    return (
      <Skeleton>
        <BlankRow/>
        <Row height="26px">
          <Space/>
          <Content width="200px">
            <Typography variant="title">{subcategory && subcategory.name}</Typography>
          </Content>
          <Space flex="1" minWidth="15px"/>
        </Row>
        <BlankRow/>
        <Row height="20px">
          <Space/>
          <Content flex="1"/>
          <Space/>
        </Row>
        <BlankRow/>
        <Row height="36px">
          <Space/>
          <Content flex="1"/>
          <Space/>
          <Content flex="1"/>
          <Space/>
        </Row>
        <BlankRow height="10px"/>
        <Row height="16px">
          <Space flex="1"/>
          <Content width="80px"/>
          <Space/>
        </Row>
        <BlankRow/>
        {this.createTiles()}
      </Skeleton>
    )

  }

  createTiles() {
    const tiles = []
    const { classes } = this.props

    for (let i=0; i<4; i++) {
      tiles.push(
        <div key={i}>
          <Row>
            <div className={classes.imagePlaceholder}/>
          </Row>
          <BlankRow height="15px"/>
          <Row height="16px">
            <Content flex="1"/>
          </Row>
          <BlankRow height="10px"/>
          <Row height="12px">
            <Content flex="1"/>
          </Row>
          <BlankRow height="12px"/>
          <Row height="10px">
            <Content flex="1"/>
          </Row>
          <BlankRow height="55px"/>
        </div>
      )
    }

    return <Tiles>{tiles}</Tiles>
  }

}

