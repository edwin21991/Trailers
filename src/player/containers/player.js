import React, {Component} from 'react'
import { Video } from 'expo-av'
import {
  StyleSheet,
  ActivityIndicator,
  Text,
} from 'react-native'
import Layout from '../components/layout'
import ControlLayout from '../components/control-layout'
import PlayPause from '../components/play-pause'

class Player extends Component {
  state = {
    loading: true,
    paused: true,
  }
  onBuffer=({isBuffering})=>{
    this.setState({
      loading: isBuffering
    })
  }
  onLoad=()=>{
    this.setState({
      loading: false
    })
  }
  PlayPause =()=>{
    this.setState({
      paused: !this.state.paused
    })
  }
  
  render(){
    return(
      <Layout  
        loading={this.state.loading}  
        Video={
          <Video
            source={
              // {uri:'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'}
              require('../../videos/media/colpatria.mp4')
            }
            rate={1.0}
            volume={1.0}
            isMuted={false}
            shouldPlay={this.state.paused}
            isLooping
            useNativeControls
            style={styles.video}        
            resizeMode="contain"
            isBuffering={this.onBuffer}
            onLoad={this.onLoad}
          />
        }
        loader={
          <ActivityIndicator color='red' />
        }
        // controls={
        //   <ControlLayout>
        //     <PlayPause 
        //       onPress={
        //         this.PlayPause
        //       }
        //     />
        //     <Text>progress bar | </Text>
        //     <Text>time left |</Text>
        //     <Text>fullscrean |</Text>

        //   </ControlLayout>
        // }
      />
    )
  }
}

const styles = StyleSheet.create({
  video:{
    position:"absolute",
    left:0,
    right:0,
    bottom:0,
    top:0,
  }
})
export default Player