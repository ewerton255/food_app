import * as React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { Icon, ListItem } from 'react-native-elements'
import { createBottomTabNavigator } from 'react-navigation'

export interface AppProps {
}

export interface AppState {
}

export class PrincipalScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Principal</Text>
      </View>
    );
  }
}

export class PedidosScreen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.order}>
          <Text style={styles.orderTitle}>Titulo Pedido</Text>
          <Text style={styles.orderDescription}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
            sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
            like Aldus PageMaker including versions of Lorem Ipsum.</Text>
        </View>

        <View style={styles.order}>
          <Text style={styles.orderTitle}>Titulo Pedido</Text>
          <Text style={styles.orderDescription}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
            sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
            like Aldus PageMaker including versions of Lorem Ipsum.</Text>
        </View>

        <View style={styles.order}>
          <Text style={styles.orderTitle}>Titulo Pedido</Text>
          <Text style={styles.orderDescription}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
            sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
            like Aldus PageMaker including versions of Lorem Ipsum.</Text>
        </View>
      </ScrollView>
    );
  }
}

const listItems = [
  {
    title: "Perfil",
    icon: 'account-circle'
  },{
    title: "Formas de pagamento",
    icon: 'credit-card'
  },
  {
    title: "Configurações",
    icon: 'build'
  },
  {
    title: "Ajuda",
    icon: 'help'
  },
  {
    title: "Sair",
    icon: 'exit-to-app'
  },
]

export class MinhaContaScreen extends React.Component {
  render() {
    return (
      <View style={styles.menu}>
        {
          listItems.map((item, i) => (
            <ListItem
              key={i}
              title={item.title}
              leftIcon={{ name: item.icon }}
            />
          ))
        }
      </View>
    );
  }
}

export default createBottomTabNavigator(
  {
    Inicio: {
      screen: PrincipalScreen, navigationOptions: {
        tabBarIcon: <Icon name="home"></Icon>
      }
    },
    Pedidos: {
      screen: PedidosScreen, navigationOptions: {
        tabBarIcon: <Icon name="assignment"></Icon>
      }
    },
    MinhaConta: {
      screen: MinhaContaScreen, navigationOptions: {
        tabBarIcon: <Icon name="account-circle"></Icon>
      }
    }
  }
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    flex: 1
  },
  order: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#87CEFA',
    padding: 10,
    borderRadius: 20,
    margin: 30
  },
  orderTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  orderDescription: {
    backgroundColor: '#D3D3D3'
  }
  , menu: {
    paddingTop: 25
  }
});