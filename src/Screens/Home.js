import React, { Component } from 'react'
import { View, Text, Button, InteractionManager, StyleSheet, Image, ScrollView } from 'react-native'
import * as firebaseAPI from '../firebaseAuths/firebaseAPI';
import { Images } from '../Themes';

export default class Home extends Component {

    booksList = () => {
        this.props.navigation.navigate('BooksList');
    }

    logout(navigation) {
        firebaseAPI.logoutUser()

        InteractionManager.runAfterInteractions(() => {
            navigation.pop()
        })
    }

    render() {
        return (
            <View style={styles.container}>

            
                <Image source={Images.backgroundEllipse} resizeMode='cover' style={{ position: "absolute", top: -290 }} />
                <Image style={styles.logo} source={Images.bookIco} />
                    
                    <ScrollView>
                        <Text style={{padding:30}}>
                            The Book Grocer online offers a broad and ever increasing range of discounted remainder and secondhand books.

                            Our specialty is sourcing discounted books of amazing quality and passing on to our customers the best possible price.
                            We take our book buying very seriously indeed. We scour the globe and the best publishers and suppliers for the best bargains, but no book simply arrives in our warehouse simply because it's cheap. It has to be something we want to read ourselves and would reccomend to others.
                            We like to be known as the business which sells discounted books yet looks and feels like a retail bookstore.

                            We are an Australian, family-owned business. We have been buying and selling books since 2000, when the first Castlebooks store opened in Kingston, ACT.

                            In 2007 we opened the first Book Grocer in Brunswick, Victoria. Book Grocers can now be found in a range of locations across Victoria, NSW, and of course, Canberra.

                            Our staff also love reading and recommending books to others and we are proud of the role they play in demonstrating to our customers how good discount books can be.
                        </Text>
                    </ScrollView>
                    <Text style={styles.button} onPress={() => this.props.navigation.navigate('BooksList')}>Show Books</Text>
                <Button title="Logout" onPress={() => { this.logout(this.props.navigation) }} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
   
      logo: {
        marginBottom:55,
        marginTop:20
      },
      button: {
        textAlign: 'center',
        marginHorizontal: 0,
        width: '90%',
        height: 56,
        padding: 15,
        backgroundColor: '#4CAF50',
        borderRadius: 15,
        marginTop: 40,
        color:'#ffffff'
      },
    
});