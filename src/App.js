import React from 'react';
import './App.css';
import {useSpring, animated} from 'react-spring';
import {Transition} from 'react-spring/renderprops';
import { useMediaQuery } from 'react-responsive';

const costs = {
  ui: 125,
  uo: 625,
  gi: 554.5,
  go: 1855.25,
  livingSingle: "3256",
  livingDouble: "2514",
  carResident: "400",
  carCommuter: "324",
  meal: "2447",
  health: "1350"
};

function Hours(props) {
  const show = props.credit === "part-time";
  const level = props.level;
  const change = props.change;
  return (
    <Transition items={show} from={{height:0, overflow: "hidden" }} enter={{height: 72}} leave={{height:0}}>
      {show => show && (props => <div className="no-float" style={props}><Hoursdiv level={level} change={change}/></div>)}
    </Transition>
  );
}

function Hoursdiv(props) {
  const undergradCheck = props.level === "undergrad";
  return (
    <div className="input-container secondary-container" role="group" aria-labelledby="hours">
      <h3 id="hours">Hours</h3>
      <div className="input-group-hours">
        <input type="radio" id="three-hours" value={undergradCheck ? "1" : "2"} name="hours" onChange={props.change} defaultChecked></input>
        <label htmlFor="three-hours" className="number-font">3</label>
      </div>
      <div className="input-group-hours">
        <input type="radio" id="six-hours" value={undergradCheck ? "2" : "3"} name="hours" onChange={props.change}></input>
        <label htmlFor="six-hours" className="number-font">6</label>
      </div>
      {undergradCheck &&
      <div className="input-group-hours">
        <input type="radio" id="nine-hours" value="3" name="hours" onChange={props.change}></input>
        <label htmlFor="nine-hours" className="number-font">9</label>
      </div>
      }
    </div>
  );
}


function LevelTwo (props) {
  const show = props.distance;
  const change = props.expenses;
  const isMobile = useMediaQuery({ query: '(max-width: 370px)' })
  return (
    <Transition items={show} from={{height:0, overflow: "hidden", padding: "0px 0px"}} enter={isMobile ? {height: 450, padding: "10px 0px"} : {height: 288, padding: "10px 0px"}} leave={{height:0, padding: "0px 0px"}}>
    {show => show && (props => <div style={props} className="secondary-container no-float">
      <div className="input-container" role="group" aria-labelledby="living">
        <h3 id="living">Living on campus?</h3>
        <div className="input-group">
          <input type="radio" id="on-campus-single" value={costs.livingSingle} name="living" onChange={change}></input>
          <label htmlFor="on-campus-single">Single</label>
        </div>
        <div className="input-group">
          <input type="radio" id="on-campus-double" value={costs.livingDouble} name="living" onChange={change}></input>
          <label htmlFor="on-campus-double">Double</label>
        </div>
        <div className="input-group">
          <input type="radio" id="off-campus" value="0" name="living" onChange={change}></input>
          <label htmlFor="off-campus">No</label>
        </div>
      </div>
      <div className="input-container" role="group" aria-labelledby="car">
        <h3 id="car">Car on campus?</h3>
        <div className="input-group">
          <input type="radio" id="yes-resident" value={costs.carResident} name="car" onChange={change}></input>
          <label htmlFor="yes-resident">Resident</label>
        </div>
        <div className="input-group">
          <input type="radio" id="yes-commuter" value={costs.carCommuter} name="car" onChange={change}></input>
          <label htmlFor="yes-commuter">Commuter</label>
        </div>
        <div className="input-group no-right-margin">
          <input type="radio" id="no-car" value="0" name="car" onChange={change}></input>
          <label htmlFor="no-car">No</label>
        </div>
      </div>
      <div className="input-container" role="group" aria-labelledby="meal">
        <h3 id="meal">Meal Plan?</h3>
        <div className="input-group">
          <input type="radio" id="yes-meal-plan" value={costs.meal} name="meal" onChange={change}></input>
          <label htmlFor="yes-meal-plan">Yes</label>
        </div>
        <div className="input-group">
          <input type="radio" id="no-meal-plan" value="0" name="meal" onChange={change}></input>
          <label htmlFor="no-meal-plan">No</label>
        </div>
      </div>
      <div className="input-container" role="group" aria-labelledby="health">
        <h3 id="health">Health Insurance?</h3>
        <div className="input-group">
          <input type="radio" id="yes-health" value={costs.health} name="health" onChange={change}></input>
          <label htmlFor="yes-health">Yes</label>
        </div>
        <div className="input-group">
          <input type="radio" id="no-health" value="0" name="health" onChange={change}></input>
          <label htmlFor="no-health">No</label>
        </div>
      </div>
    </div>)}
    </Transition>
  )
}

function Animatedtotal (props) {
  const animateProps = useSpring({config:{duration: 500},number: props.totalAfter, from: {number: props.totalBefore}});
  return (
    <animated.span className="total-font">{animateProps.number.interpolate(number => Math.floor(number))}</animated.span>
  )
}

class Total extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      previousTotal: 0,
      currentTotal: 0
    };
  }
  componentDidUpdate (prevProps, prevState) {
    if (this.props.creditCost !== prevProps.creditCost || 
        this.props.multiplier !== prevProps.multiplier || 
        this.props.living !== prevProps.living || 
        this.props.car !== prevProps.car || 
        this.props.meal !== prevProps.meal || 
        this.props.health !== prevProps.health) 
    {
      const previous = Math.ceil(prevProps.creditCost * prevProps.multiplier) + Number(prevProps.living) + Number(prevProps.car) + Number(prevProps.meal) + Number(prevProps.health);
      const current = Math.ceil(this.props.creditCost * this.props.multiplier) + Number(this.props.living) + Number(this.props.car) + Number(this.props.meal) + Number(this.props.health);
      this.setState({previousTotal: previous, currentTotal: current})
    }
  }
  render() {
    return (
      <div className="total-container" aria-live="polite">
        <h3>TOTAL</h3>
        <p className="total-cost">$<Animatedtotal totalBefore={this.state.previousTotal} totalAfter={this.state.currentTotal}/></p>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      level: "",
      resident: "",
      credit: "",
      creditCostInitial: 0,
      multiplier: 0,
      distance: false,
      living: false,
      car: false,
      meal: false,
      health: false
    };
    this.handleLevel = this.handleLevel.bind(this);
    this.handleResident = this.handleResident.bind(this);
    this.handleCredit = this.handleCredit.bind(this);
    this.handleHours = this.handleHours.bind(this);
    this.handleDistance = this.handleDistance.bind(this);
    this.handleOtherExpenses = this.handleOtherExpenses.bind(this);
  }
  componentDidUpdate (prevProps, prevState) {
    if (this.state.multiplier == 3 && this.state.level === "grad" && this.state.level !== prevState.level) {
      document.getElementById("six-hours").checked = true;
    }
  }
  levelChanges (a,b,c) {
    if (this.state.credit === "part-time") {
      if (this.state.level === "undergrad"  && this.state.multiplier == 3) {
        this.setState({multiplier: 3})
      }
      else {
        this.setState(state => ({multiplier: Number(state.multiplier) + c}));
      }
    }
    this.state.resident === "in-state" ? this.setState({creditCostInitial:a}) : this.state.resident === "out-of-state" ? this.setState({creditCostInitial:b}) : this.setState({creditCostInitial:0});
  }
  handleLevel(e) {
    this.setState({[e.target.name]: e.target.value});
    if (e.target.value === "undergrad") {
      this.levelChanges(costs.ui, costs.uo, -1)
    }
    else {
      this.levelChanges(costs.gi, costs.go, 1)
    }
  }
  residentChanges (a,b) {
    this.state.level === "undergrad" ? this.setState({creditCostInitial: a}) : this.state.level === "grad" ? this.setState({creditCostInitial: b}) : this.setState({creditCostInitial:0});
  }
  handleResident(e){
    this.setState({[e.target.name]: e.target.value});
    if (e.target.value === "in-state") {
      this.residentChanges(costs.ui, costs.gi)
    }
    else {
      this.residentChanges(costs.uo, costs.go)
    }
  }
  handleCredit(e) {
    this.setState({[e.target.name]: e.target.id});
    if (e.target.id === "full-time") {
      this.setState({multiplier: e.target.value});
    }
    else {
      this.state.level === "undergrad" ? this.setState({multiplier: 1}) : this.setState({multiplier: 2});
    }
  }
  handleHours(e) {
      this.setState({multiplier: e.target.value});
  }
  handleDistance(e) {
    const boolValue = e.target.value === "true";
    this.setState({[e.target.name]: boolValue});
    if (e.target.id === "online") {
      this.setState({living: 0, car: 0, meal: 0, health: 0});
    }
  }
  handleOtherExpenses(e) {
    const expense = Number(e.target.value);
    this.setState({[e.target.name]: expense})
  }
  render () {
    return (
      <div className="container">
        <div className="title-container">
          <h2>Cost Calculator</h2>
          <hr/>
        </div>
        <form id="cost-calculator-form">
          <div class="section-one">
            <div className="input-container" role="group" aria-labelledby="level">
              <h3 id="level">Level</h3>
              <div className="input-group">
                <input type="radio" id="undergrad" value="undergrad" name="level" onChange={this.handleLevel}></input>
                <label htmlFor="undergrad">Undergraduate</label>
              </div>
              <div className="input-group">
                <input type="radio" id="grad" value="grad" name="level" onChange={this.handleLevel}></input>
                <label htmlFor="grad">Graduate</label>
              </div>
            </div>
            <div className="input-container" role="group" aria-labelledby="resident">
              <h3 id="resident">Resident</h3>
              <div className="input-group">
                <input type="radio" id="in-state" value="in-state" name="resident" onChange={this.handleResident}></input>
                <label htmlFor="in-state">In State</label>
              </div>
              <div className="input-group">
                <input type="radio" id="out-of-state" value="out-of-state" name="resident" onChange={this.handleResident}></input>
                <label htmlFor="out-of-state">Out of State</label>
              </div>
            </div>
            <div className="input-container" role="group" aria-labelledby="credit">
              <h3 id="credit">Credit</h3>
              <div className="input-group">
                <input type="radio" id="full-time" value="4" name="credit" onChange={this.handleCredit}></input>
                <label htmlFor="full-time">Full-Time</label>
              </div>
              <div className="input-group">
                <input type="radio" id="part-time" value="part-time" name="credit" onChange={this.handleCredit}></input>
                <label htmlFor="part-time">Part-Time</label>
              </div>
            </div>
            <Hours change={this.handleHours} level={this.state.level} credit={this.state.credit}/>
            <div className="input-container" role="group" aria-labelledby="distance">
              <h3 id="distance">Distance</h3>
              <div className="input-group">
                <input type="radio" id="in-person" value="true" name="distance" onChange={this.handleDistance}></input>
                <label htmlFor="in-person">In Person</label>
              </div>
              <div className="input-group">
                <input type="radio" id="online" value="false" name="distance" onChange={this.handleDistance}></input>
                <label htmlFor="online">Online</label>
              </div>
            </div>
          </div>
          <LevelTwo expenses={this.handleOtherExpenses} distance={this.state.distance}/>
        </form>
        <Total creditCost={this.state.creditCostInitial} multiplier={this.state.multiplier} distance={this.state.distance} living={this.state.living} car={this.state.car} meal={this.state.meal} health={this.state.health}/>
      </div>
    );
  }
}

export default App;
