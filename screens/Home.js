import React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Block, theme } from 'galio-framework';
import DropDownPicker from 'react-native-dropdown-picker';
import { Card } from '../components';
import articles from '../constants/articles';
import { Header } from 'react-native/Libraries/NewAppScreen';
const { width } = Dimensions.get('screen');

class Home extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      open: false,
      value: null,
      items: [
        {label: 'Plantino', value: 'apple'},
        {label: 'Oro', value: 'banana'}
      ]
    };

    this.setValue = this.setValue.bind(this);

  }

  setOpen(open) {
    this.setState({
      open
    });
  }

  setValue(callback) {
    this.setState(state => ({
      value: callback(state.value)
    }));
  }

  setItems(callback) {
    this.setState(state => ({
      items: callback(state.items)
    }));
  }


  renderArticles = () => {
    const { open, value, items } = this.state;
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
        <Block flex>
         <DropDownPicker
            open = {open}
            value={value}
            items = {items}
            setOpen = {this.setOpen}  
            setValue={this.setValue}
            setItems = {this.setItems}
        />
         <Card item={articles[0]} horizontal  />
         <Card item={articles[1]} horizontal  />
         <Card item={articles[2]} horizontal  />
          <Card item={articles[3]} horizontal />
          <Card item={articles[4]} full />
        </Block>
      </ScrollView>
    )
  }

  render() {
    return (
      <Block flex center style={styles.home}>
        {this.renderArticles()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,    
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
});

export default Home;
