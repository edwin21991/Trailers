import React, {Component} from 'react'
import {
  FlatList,
  Text
} from 'react-native'
import Layout from '../components/suggestion-list-layout'
import Empty from '../components/empty'
import Separator from '../../sections/components/vertical-separator'
import Suggestion from '../components/suggestion'
import { connect } from 'react-redux'

class SuggestionList extends Component {
  keyExtractor = item => item.id.toString()
  renderEmpty=()=> <Empty text="No hay sugerencias :("/>
  itemSeparator=()=> <Separator />

  viewMovie=(item)=>{
    this.props.dispatch({
      type:'SET_SELECTED_MOVIE',
      payload:{
        movie: item,
      }
    })
  }

  renderItem = ({item}) => {
    return(
    <Suggestion 
      {...item}
      onPress={()=>{this.viewMovie(item)}}  
    />
    )
  }

  render(){
    return(
      <Layout
        title='Recomendados para ti'
      >
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.list}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem = {this.renderItem}
        >
        </FlatList>
      </Layout>
    )
  }
}

function mapStateToProps(state){
  return {
    list: state.suggestionList
  }
}

export default connect(mapStateToProps)(SuggestionList)