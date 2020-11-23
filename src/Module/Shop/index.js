import React from "react";
import './style.css'
import {Container, Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label,Card,CardBody,CardText,CardTitle,CardImg} from 'reactstrap'
import CurrencyFormat from "react-currency-format";
const data = [
  {id:1, name:'Camisetas', description:'Hechos de material reciclaje, sin crueldad animal.Disponible en variedad de modelos y tallas',price:'1000', amount:'19'},
  {id:2, name:'Calcetines', description:'Hechos de material reciclaje, sin crueldad animal.Disponible en variedad de modelos y tallas',price:'12000', amount:'10'},
  {id:3, name:'Zapatos', description:'Hechos de material reciclaje, sin crueldad animal.Disponible en variedad de modelos y tallas',price:'20000', amount:'5'},
  {id:4, name:'Shorts', description:'Hechos de material reciclaje, sin crueldad animal.Disponible en variedad de modelos y tallas',price:'32000', amount:'20'},
  {id:5, name:'Pantalones', description:'Hechos de material reciclaje, sin crueldad animal.Disponible en variedad de modelos y tallas',price:'42000', amount:'10'},
  {id:6, name:'Abrigos', description:'Hechos de material reciclaje, sin crueldad animal.Disponible en variedad de modelos y tallas',price:'52000', amount:'10'},
]

class Shop extends React.Component {
  state={
    data:data
  }
  render() {
    return (
      <>
      <Container>
        <br />
          <Button className="btn-add">Agregar Nuevo producto</Button>
        <br/>
        <div className="col-12 d-flex justify-content-center flex-wrap">
          { this.state.data.map((product, i) =>(
            <Card className="col-3 m-3" key={i}>
              <CardBody>
                <CardImg></CardImg>
                <CardTitle className="m-0">{product.name}</CardTitle>
                <CardText className="m-0">{product.description}</CardText>
                <CardText className="m-0 card-black">
                  Precio: <CurrencyFormat
                value={product.price}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              /></CardText>
                <CardText className="m-0 card-black">Cant : {product.amount} pz</CardText>
              </CardBody>
            </Card>
          )
          
          )}
        </div>
      </Container>
      </>
    );
  }
}

export default Shop;