import React from 'react';
import { withNavigation } from '@react-navigation/compat';
import { TouchableOpacity, StyleSheet, Platform, Dimensions,StatusBar } from 'react-native';
import {Block, NavBar, theme } from 'galio-framework';

import Icon from './Icon';
import Tabs from './Tabs';
import argonTheme from '../constants/Theme';
const { height, width } = Dimensions.get('window');
const iPhoneX = () => Platform.OS === 'ios' && (height === 812 || width === 812 || height === 896 || width === 896);

class Header extends React.Component {
  handleLeftPress = () => {
    const { back, navigation} = this.props;
    return (back ? navigation.goBack() : navigation.openDrawer());
  }
  handleRightPress = () => {
    const { back, navigation } = this.props;
    navigation.navigate("Articulos");
    //return (back ? navigation.goBack() : navigation.navigate("Articulos"));
  }
  
  
  renderTabs = () => {
    const { tabs, tabIndex, navigation } = this.props;
    const defaultTab = tabs && tabs[0] && tabs[0].id;
    
    if (!tabs) return null;

    return (
      <Tabs
        data={tabs || []}
        initialIndex={tabIndex || defaultTab}
        onChange={id => navigation.setParams({ tabId: id })} />
    )
  }


  renderHeader = () => {
    const { search, options, tabs } = this.props;
    if (search || tabs || options) {
      return (
        <Block center>
          
         
          {tabs ? this.renderTabs() : null}
        </Block>
      );
    }
  }


  render() {
    const { back, title, white, transparent, bgColor, iconColor, titleColor,home,subasta, perfil, navigation, ...props } = this.props;

    const noShadow = ['Search', 'Categories', 'Deals', 'Pro', 'Profile','Catalogo','Producto'].includes(title);
    const headerStyles = [
      !noShadow ? styles.shadow : null,
      transparent ? { backgroundColor: 'rgba(0,0,0,0)' } : null,
    ];

    const navbarStyles = [
      styles.navbar,
      bgColor && { backgroundColor: bgColor }
    ];
    //fijarse error aca
      if(home == true){
        return (
          <Block style={headerStyles}>
            <StatusBar hidden/>
            <NavBar
              back={false}
              title={'BetFast'}
              style={navbarStyles}
              transparent={transparent}
         
              
              rightStyle={{ alignItems: 'center' }}
              left={
                <Icon 
                  name={back ? 'nav-left' : "menu-8"} family="ArgonExtra" 
                  size={20} onPress={this.handleLeftPress} 
                  color={iconColor || (white ? argonTheme.COLORS.WHITE : argonTheme.COLORS.ICON)}
                  style={{ marginTop: 2 }}
                />
                  
              }
              leftStyle={{ paddingVertical: 12, flex: 0.2 }}
              titleStyle={[
                styles.title,
                { color: '#0084AE' },
                titleColor && { color: titleColor }
              ]}
              {...props}
            />
            {this.renderHeader()}
          </Block>
        );
      }else{
        if (subasta == true){

          return (
            <Block style={headerStyles}>
            <StatusBar hidden/>
              <NavBar
                back={false}
                title={'BetFast'}
                style={navbarStyles}
                transparent={transparent}
                
                right={
                  <TouchableOpacity onPress={this.handleRightPress}>
                    <Icon 
                      name={'bell'} family="ArgonExtra" 
                      size={20} 
                      color={'black'}
                      style={{ marginTop: 2 }}
                    />
                  </TouchableOpacity>
                }
                rightStyle={{ alignItems: 'center' }}
                left={
                  <Icon 
                    name={back ? 'nav-left' : "menu-8"} family="ArgonExtra" 
                    size={20} onPress={this.handleLeftPress} 
                    color={iconColor || (white ? argonTheme.COLORS.WHITE : argonTheme.COLORS.ICON)}
                    style={{ marginTop: 2 }}
                  />
                    
                }
                leftStyle={{ paddingVertical: 12, flex: 0.2 }}
                titleStyle={[
                  styles.title,
                  { color: '#0084AE' },
                  titleColor && { color: titleColor }
                ]}
                {...props}
              />
              
              {this.renderHeader()}
            </Block>
          );
        }else{
          if(perfil==true){
            return (
              <Block style={headerStyles}>
              <StatusBar hidden/>
                <NavBar
                  back={false}
                  title={'BetFast'}
                  style={navbarStyles}
                  transparent={transparent}
                  
                  /*aca aceptamos cambios*/
                  rightStyle={{ alignItems: 'center' }}
                  left={
                    <Icon 
                      name={back ? 'nav-left' : "menu-8"} family="ArgonExtra" 
                      size={20} onPress={this.handleLeftPress} 
                      color={iconColor || (white ? argonTheme.COLORS.WHITE : argonTheme.COLORS.ICON)}
                      style={{ marginTop: 2 }}
                    />
                      
                  }
                  leftStyle={{ paddingVertical: 12, flex: 0.2 }}
                  titleStyle={[
                    styles.title,
                    { color: '#0084AE' },
                    titleColor && { color: titleColor }
                  ]}
                  {...props}
                />
                
                {this.renderHeader()}
              </Block>
            );
          }else{
          return (
            <Block style={headerStyles}>
            <StatusBar hidden/>
              <NavBar
                back={false}
                title={title}
                style={navbarStyles}
                transparent={transparent}
                
                rightStyle={{ alignItems: 'center' }}
                left={
                  <Icon 
                    name={back ? 'nav-left' : "menu-8"} family="ArgonExtra" 
                    size={20} onPress={this.handleLeftPress} 
                    color={iconColor || (white ? argonTheme.COLORS.WHITE : argonTheme.COLORS.ICON)}
                    style={{ marginTop: 2 }}
                  />
                    
                }
                leftStyle={{ paddingVertical: 12, flex: 0.2 }}
                titleStyle={[
                  styles.titleNav,
                  { color: argonTheme.COLORS.BLACK },
                  titleColor && { color: titleColor }
                ]}
                {...props}
              />
              {this.renderHeader()}
            </Block>
          );
        }
      }
    }
  }
}   

const styles = StyleSheet.create({
  button: {
    padding: 12,
    position: 'relative',
    
  },
  title: {
    width: '100%',
    fontSize: 24,
    fontWeight:'normal',
    paddingLeft:theme.SIZES.BASE*7.5,
    
  },
  titleNav:{
    width: '100%',
    fontSize: 16,
    fontWeight:'normal',
    textAlign:'center',
    textAlignVertical:'center',
    paddingLeft:theme.SIZES.BASE*2.5,
  },
  navbar: {
    paddingVertical: 0,
    paddingBottom: theme.SIZES.BASE * 1.5,
    paddingTop: iPhoneX ? theme.SIZES.BASE * 4 : theme.SIZES.BASE,
    marginTop:-20,
    zIndex: 5
  },
  shadow: {
    backgroundColor:'#EEBB00' ,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 20 },
    shadowRadius: 50,
    shadowOpacity: 50,
    elevation: 20,
  },
  notify: {
    backgroundColor: argonTheme.COLORS.LABEL,
    borderRadius: 4,
    height: theme.SIZES.BASE / 2,
    width: theme.SIZES.BASE / 2,
    position: 'absolute',
    top: 9,
    right: 12,
  },
  
  divider: {
    borderRightWidth: 0.3,
    borderRightColor: theme.COLORS.ICON,
  },
  tab: {
    backgroundColor: theme.COLORS.TRANSPARENT,
    width: width * 0.35,
    borderRadius: 0,
    borderWidth: 0,
    height: 24,
    elevation: 0,
  },
  tabTitle: {
    lineHeight: 19,
    fontWeight: '400',
    color: argonTheme.COLORS.HEADER
  },
});

export default withNavigation(Header);
