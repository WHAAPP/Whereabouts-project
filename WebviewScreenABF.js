import React from 'react';
import { StyleSheet, Dimensions, View, WebView} from 'react-native';


const ScreenHeight  = Dimensions.get('window').height;
const ScreenWidth   = Dimensions.get('window').width;

const styles = StyleSheet.create({
    fullscreen: {
        width: ScreenWidth,
        height: ScreenHeight,
        backgroundColor: 'rgba(176,224,230, 1)',
    },
});

// The webview React component
export default class WebviewScreenUK extends React.Component{ 
            static navigationsOptions = ({ navigation, navigationsOptions}) => {
                return{  
                    headerStyle: { 
                        backgroundColor: navigationsOptions.headerTintColor,
                     },
                     headerTintColor: navigationsOptions.headerStyle.backgroundColor,
                 };
            };
            constructor(props){
                super(props)
                this.state={
                    isLoading: false
                }
            }
            // componentWillUnmount() {
            //     this.timer =  setTimeout(this.isLoading,1000)
            //     timer.clearTimeout(this);
            //   }
            
            isLoading(){
                 console.log('Loading Webview')
                 }

render() {
   const DEFAULT_URL_ABF = 'https://www.arbetsformedlingen.se/';

    return (
        <View style={{flex:1}}>
            <WebView 
            ref='myWebviewPol'
            source={{uri: DEFAULT_URL_ABF }} 
            onLoad={this.loading}
            onWebViewMessage={this.onWebViewMessage}
            automaticallyAdjustContentInsets={true}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            startInLoadingState={true}
            />
        </View>
     );
   }
 }
