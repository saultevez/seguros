import React from "react";
import "../App.css";
import { useSpring, animated } from "react-spring";
import { Transition } from "react-spring/renderprops";
import logo from '../assets/img/logo.svg';
import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from 'react'

function NicotineUse(props) {
  const age = props.age;
  const sex = props.sex;
  const nicotine = props.nicotine;
  const change = props.change;
  const show = nicotine == 1;
  return (
    <Transition items={show} from={{ height: 0, overflow: "hidden" }} enter={{ height: 170 }} leave={{ height: 0 }}>
      {(show) =>
        show &&
        ((props) => (
          <div className='no-float' style={props}>
            <NicotineYearsContainer age={age} change={change} sex={sex} nicotine={nicotine} />
          </div>
        ))
      }
    </Transition>
  );
}

function NicotineYearsContainer(props) {
  const showNicotine = props.nicotine == 1;
  return (
    <div className='input-container secondary-container hours-container' role='group' aria-labelledby='nicotine-use'>
      <h3 id='NicotineUse'>Cuantos años</h3>
      {showNicotine ? (
        <div className='no-float'>
          <div className='input-group-hours'>
            <input type='radio' id='less-than-five' value="2" name='NicotineUse' onChange={props.change}></input>
            <label htmlFor='less-than-five' className='number-font'>
            Menos de 5 años
            </label>
          </div>
          <div className='input-group-hours'>
            <input type='radio' id='five-to-ten' value="3" name='NicotineUse' onChange={props.change}></input>
            <label htmlFor='five-to-ten' className='number-font'>
              Entre 5-10 años
            </label>
          </div>
          <div className='input-group-hours'>
            <input type='radio' id='more-than-10' value="4" name='NicotineUse' onChange={props.change}></input>
            <label htmlFor='more-than-10' className='number-font'>
              Más de 10 años
            </label>
          </div>
        </div>
      ) : (
        <div className=''> 
        </div>
      )}
    </div>
  );
}

function Animatedtotal(props) {
  const animateProps = useSpring({ config: { duration: 530 }, number: props.totalAfter, from: { number: props.totalBefore } });
  return (
    <animated.span className='total-font'>
      {animateProps.number.interpolate((number) => number.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","))}
    </animated.span>
  );
}

class Total extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      previousTotal: 0,
      currentTotal: 0,
    };
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.agePrice !== prevProps.agePrice ||
      this.props.sexPrice !== prevProps.sexPrice ||
      this.props.nicotinePrice !== prevProps.nicotinePrice
    ) {
      const previous =
        Number(prevProps.agePrice) +
        Number(prevProps.sexPrice) +
        Number(prevProps.nicotinePrice);
      const current =
        Number(this.props.agePrice) +
        Number(this.props.sexPrice) +
        Number(this.props.nicotinePrice);
      this.setState({ previousTotal: previous, currentTotal: current });
    }
  }
  render() {
    return (
      <div className='total-container' aria-live='polite'>
        <hr></hr>
        <h3>TOTAL</h3>
        <p className='total-cost'>
          s/.<Animatedtotal totalBefore={this.state.previousTotal} totalAfter={this.state.currentTotal} />
        <span class="mes"> /mes </span></p>
        <p className='disclaimer'>
          *Este total es un costo estimado basado en las respuestas a este cuestiorio. <br></br> El costo final puede variar.
        </p>
      </div>
    );
  }
}

const InputGroup = (props) => {
  return (
    <div className='input-group'>
      <input type='radio' id={props.id} value={props.value} name={props.name} onClick={props.change}></input>
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
};
const InputText = (props) => {
  return (
    <div className='input-group'>
      <input type='text' id={props.id} name={props.name} onChange={props.change}></input>
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
};



class Svida extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ageBaseMultiplier: 6.18,
      ageAddPerYear: 0.19,
      ageMin: 18,
      age: 0,
      agePrice: 0,
      sex: "",
      sexPrice: 0,
      nicotine: 0,
      nicotineMultiplier: 40,
      nicotineUseYears: 0,
      nicotinePrice: 0,
      costInitial: 0,
      addedCost: 0,
    };
    this.timer = null;
    this.setAgePrice = this.setAgePrice.bind(this);
    this.setNicotinePrice = this.setNicotinePrice.bind(this);
    this.handleAge = this.handleAge.bind(this);
    this.handleSex = this.handleSex.bind(this);
    this.handleNicotine = this.handleNicotine.bind(this);
    this.handleNicotineUse = this.handleNicotineUse.bind(this);
  }

  componentDidUpdate (prevProps, prevState) {
    if(prevState.age !== this.state.age) {
      this.handleCheck();
    };
    if (prevState.sex !== this.state.sex) {
      this.setSexPrice();
    };
    if (prevState.nicotineUseYears !== this.state.nicotineUseYears ||
      prevState.nicotine !== this.state.nicotine)  {
      this.setNicotinePrice();
    }
  }
  handleCheck = () => {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.setAgePrice();
    }, 1000);
  }

  handleAge = e => {
    this.setState({
      age: e.target.value
    });
  };

  setAgePrice() {
    if (this.state.age >= this.state.ageMin) {
      this.setState({
        agePrice: this.state.age * (this.state.ageBaseMultiplier + ((this.state.age - this.state.ageMin) * this.state.ageAddPerYear))
      });
    } else {
      this.setState({
        agePrice: 0
      });
    }
  }

  setSexPrice() {
    if (this.state.sex === "hombre") {
      this.setState({ sexPrice: 1})
    }
    else {
      this.setState({ sexPrice: 0})
    };
  }

  handleSex(e) {
    this.setState({ sex: e.target.value });
  }

  setNicotinePrice() {
      this.setState({
        nicotinePrice: this.state.nicotineMultiplier * this.state.nicotineUseYears * this.state.nicotine
      });
  }

  handleNicotine(e) {
    this.setState({ nicotine: e.target.value });
  }
  handleNicotineUse(e) {
    this.setState({ nicotineUseYears: e.target.value });
    
  }
  render() {
    return (
      <div className='container slim card'>
        <div class="nav">
          
        </div>
        <div className='title-container'>
          <h2>Calcula tu seguro de vida</h2>
          <Total
          agePrice = {this.state.agePrice}
          sexPrice = {this.state.sexPrice}
          nicotinePrice = {this.state.nicotinePrice}
        />
          <hr />
        </div>
        <form id='cost-calculator-form'>
          <div class='section-one'>
            <div className='input-container' role='group' aria-labelledby='edad'>
              <h3 id='edad'>Edad</h3>
              <InputText id={"años"} label={"años"} name={"edad"} change={this.handleAge} />
            </div>
            <div className='input-container' role='group' aria-labelledby='Sexo'>
              <h3 id='sexo'>Sexo</h3>
              <div class="input-options">
              <InputGroup id={"hombre"} value={"hombre"} label={"Hombre"} name={"sexo"} change={this.handleSex} />
              <InputGroup id={"mujer"} value={"mujer"} label={"Mujer"} name={"sexo"} change={this.handleSex} />
              </div>
            </div>
            <div className='input-container' role='group' aria-labelledby='nicotine'>
              <h3 id='nicotine'>¿Consumes o has consumido productos con nicotina?</h3>
              <div class="input-options">
                <InputGroup id={"si"} value={1} label={"Si"} name={"nicotine"} change={this.handleNicotine} />
              <InputGroup id={"no"} value={0} label={"No"} name={"nicotine"} change={this.handleNicotine} /></div>
            </div>
            <NicotineUse change={this.handleNicotineUse} nicotine={this.state.nicotine} />
          </div>
        </form>
      </div>
    );
  }
}

export default Svida;
