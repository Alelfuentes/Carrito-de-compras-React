import { Component } from 'react';
import Productos from './components/Productos'
import Layout from './components/Layout'
import Title from './components/Title'
import Navbar from './components/Navbar'

class App extends Component{
  state = {
    productos:[
      { name:'Tomate', price: '15', img:'/productos/tomate.jpg'},
      { name:'Lechuga', price: '15', img:'/productos/lechuga.jpg'},
      { name:'Pepino', price: '15', img:'/productos/pepino.jpg'}
    ],
    carro:[],
    esCarroVisible: false,
  }

  agregarAlcarro = (producto) => {
    const {carro} = this.state
    if (carro.find(x => x.name === producto.name)){
      const newCarro = carro.map(x => x.name === producto.name
        ? ({
          ...x,
          cantidad: x.cantidad + 1
        })
        : x)
      return this.setState({carro:newCarro})
    }
    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1,
      })
    })
  }

  mostrarCarro = () => {
    this.setState({esCarroVisible: !this.setState.esCarroVisible})
  }

  render(){
    const {esCarroVisible} = this.state
    return(
      <div>
        <Navbar carro={this.state.carro} 
                esCarroVisible={esCarroVisible} 
                mostrarCarro={this.mostrarCarro} />
        <Layout>
          <Title/>
          <Productos 
          agregarAlcarro={this.agregarAlcarro}
          productos={this.state.productos}
        />
        </Layout>
      </div>
    )
  }
}

export default App;
