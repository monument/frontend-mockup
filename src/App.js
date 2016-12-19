import React, { Component } from 'react'
import {Block, InlineBlock, Inline, Flex} from 'jsxstyle'
import makeStyleComponentClass from 'jsxstyle/lib/makeStyleComponentClass'
import _ from 'lodash'

const Image = ({src, srcset, alt, width, height, ...props}) =>
  <Flex flex='1' component='figure' margin='0' {...props}>
    <InlineBlock
      flex='1'
      component='img'
      width={width}
      height={height}
      objectFit='cover'
      mozObjectFit='cover'
      maxWidth='100%'
      props={{src, srcSet: srcset, role: 'presentation'}}
    />
  </Flex>

const Grid = makeStyleComponentClass({display: 'grid'}, 'Grid')

const FeaturedImage = ({src, ...props}) =>
  <Block {...props} width='100%' height='100%' />

const JobBlock = ({highlightedPhoto, imageFilter, title, photos, ...props}) =>
  <Flex
    component='article'
    overflow='hidden'
    height='100%'
    flexDirection='column'
    backgroundColor='#fafafa'
    borderRadius='5px'
    boxShadow='0 1px 5px #ccc'
    hoverBoxShadow='0 5px 50px rgba(0, 0, 0, 0.25)'
    transition='box-shadow 0.1s, transform 0.1s'
    cursor='pointer'
    {...props}
  >
    <FeaturedImage flex='1' filter={imageFilter} src={highlightedPhoto.src} />
    {/*<JobTitle title={title} />*/}
    {/*<PhotoRow photos={photos} />*/}
  </Flex>

const Jobs = () => (
  <Grid
    component='main'
    padding='20px'
    gridAutoFlow='row dense'
    gridTemplateColumns='repeat(auto-fill, 120px)'
    gridAutoRows='120px'
    gridGap='30px'
  >
    {[].map((job, i) =>
      <JobBlock key={i}
        gridColumnStart={`span ${job.width}`}
        gridRowStart={`span ${job.height}`}
        hoverTransform='scale(1.01)'
        transformOrigin='center center'
        imageFilter={job.cheap ? 'grayscale(75%)' : ''}
      />
    )}
  </Grid>
)

const base: string = (process.env.PUBLIC_URL: any)  // eslint-ignore-line

function Heading({level, children, ...props}) {
  return (
    <Block
      component={`h${level}`}
      margin='0'
      fontSize='1em'
      {...props}
    >
      {children}
    </Block>
  )
}

const Logo = (props) => (
  <Flex component='section'
    padding='2em 1em'
    position='relative'
    flexDirection='column'
    justifyContent='center'
    backgroundImage={`url(${base}/building.png)`}
    backgroundPositionX='center'
    backgroundPositionY='15%'
    backgroundSize='cover'
    {...props}
  >
    <Heading
      level={2}
      fontFamily='Bosnia Thin'
      fontSize='2.5em'
      lineHeight='0.95em'
    >
      <Inline color='hsla(255, 0%, 100%, 0.85)'>BenchmArk</Inline>
      <br/>
      <Inline color='hsla(255, 0%, 100%, 0.60)'>Monument</Inline>
    </Heading>
  </Flex>
)

const Paragraph = ({children, ...props}) => {
  return (
    <Block
      component='p'
      margin='0'
      fontFamily='-apple-system, BlinkMacSystemFont, Calibri, Ubuntu, sans-serif'
      {...props}
    >
      {children}
    </Block>
  )
}

const WhoWeAre = (props) => {
  return (
    <Flex component='section'
      padding='1em 1em'
      position='relative'
      flexDirection='column'
      justifyContent='center'
      {...props}
    >
      <Heading
        level={3}
        fontSize='1.85em'
        textTransform='uppercase'
        fontFamily='Bosnia Thin'
        marginBottom='1.15em'
        color='hsla(255, 0%, 100%, 0.85)'
      >
        Who <Inline color='hsla(255, 0%, 100%, 0.70)'>We Are</Inline>
      </Heading>
      <Paragraph>
        We are a 4<sup>th</sup>-generation monument company,
        with a combined 100+ years of experience.
      </Paragraph>
    </Flex>
  )
}

const WhereWeWork = (props) => {
  return (
    <Flex component='section'
      padding='1em 1em'
      position='relative'
      flexDirection='column'
      justifyContent='center'
      {...props}
    >
      <Heading
        level={3}
        fontSize='1.85em'
        textTransform='uppercase'
        fontFamily='Bosnia Thin'
        marginBottom='1.15em'
        color='hsla(255, 0%, 100%, 0.85)'
      >
        Where <Inline color='hsla(255, 0%, 100%, 0.70)'>We Work</Inline>
      </Heading>
      <Grid
        gridTemplateAreas='"address work-area" "location work-area"'
        gridTemplateColumns='1fr 1fr'
        gridTemplateRows='1fr 1fr'
        gridColumnGap='1em'
      >
        <Block component='address' gridArea='address'>
          1735 E. 11th St.<br />
          Tulsa, <abbr title='Oklahoma'>OK</abbr> 74104
        </Block>
        <Paragraph gridArea='location'>
          One block east of 11th & Utica
        </Paragraph>
        <Paragraph gridArea='work-area'>
          We go anywhere in Oklahoma, although mostly on the eastern
          side of the state. We also service parts of KS, MO, AR, and TX.
        </Paragraph>
      </Grid>
    </Flex>
  )
}

const Toolbar = (props) => {
  return (
    <Flex
      display='flex'
      flexFlow='row wrap'
      justifyContent='stretch'
      border='solid 2px #444'
      borderRight='0'
      borderBottom='0'
      fontSize='1em'
      backgroundColor='#444'
      textTransform='uppercase'
    >
      <Block
        flex='1'
        padding='0.5em'
        backgroundColor='white'
        marginBottom='2px'
        marginRight='2px'
      >
        Material
      </Block>
      <Block
        flex='1'
        padding='0.5em'
        backgroundColor='white'
        marginBottom='2px'
        marginRight='2px'
      >
        Size
      </Block>
      <Block
        flex='1'
        padding='0.5em'
        backgroundColor='white'
        marginBottom='2px'
        marginRight='2px'
      >
        Shape
      </Block>
      <Block
        flex='1'
        padding='0.5em'
        backgroundColor='white'
        marginBottom='2px'
        marginRight='2px'
      >
        Finish
      </Block>
      <Block
        flex='1'
        padding='0.5em'
        backgroundColor='white'
        marginBottom='2px'
        marginRight='2px'
        hoverBackgroundColor='rgba(255,255,255,0.5)'
      >
        Color
      </Block>
    </Flex>
  )
}

const WhatWeveDone = (props) => {
  return (
    <Block {...props}>
      <Toolbar />
      <Jobs />
    </Block>
  )
}

function App() {
  return (
    <Block
      textAlign='center'
      backgroundColor='hsl(0, 0%, 95%)'
      fontSize='calc( 16px + (32 - 16) * ( (100vw - 320px) / ( 1200 - 320) ))'
    >
      <Grid
        gridTemplateAreas='"logo" "who-we-are" "where-we-work"'
        //gridAutoRows='1fr'
        gridTemplateColumns='100vw'
        minHeight='80vh'
        backgroundColor='hsl(212, 35%, 50%)'
        className='container'
      >
        <Logo
          gridArea='logo'
          padding='2em'
        />

        <WhoWeAre
          className='who-we-are'
          gridArea='who-we-are'
          width='100%'
          backgroundColor='hsl(123, 41%, 45%)'
          backgroundImage={`url(${base}/whoweare-bg.png)`}
          backgroundPosition='center center'
          backgroundSize='cover'
          color='hsla(255, 0%, 100%, 0.95)'
        />
        <WhereWeWork
          className='where-we-work'
          gridArea='where-we-work'
          width='100%'
          backgroundColor='hsl(262, 47%, 63%)'
          backgroundImage={`url(${base}/wherewework-bg.png)`}
          backgroundPosition='center center'
          backgroundSize='cover'
          color='hsla(255, 0%, 100%, 0.95)'
        />

      </Grid>
      <WhatWeveDone
        gridArea='what-weve-done'
        backgroundColor='white'
        padding='2em'
        width='100%'
        color='#333'
      />
    </Block>
  )
}

export default App
