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
  health: "1313.50",
  ufees: [399.43, 798.85, 1198.28, 1642.50],
  gfees: [0, 320.80, 641.48, 1489.50]
};

const costsDLP = {
  ui: 101.34,
  uo: 506.76,
  gi: 652.2,
  go: 2182.65,
  ufees: [60.3, 120.6, 180.9, 241.2],
  gfees: [0, 87.51, 175.02, 262.53]
}


function Hours(props) {
  const level = props.level;
  const change = props.change;
  const credit = props.credit
  const show = credit !== "" && level !== "";
  return (
    <Transition items={show} from={{height:0, overflow: "hidden"}} enter={{height: 72}} leave={{height:0}}>
      {show => show && (props => <div className="no-float" style={props}><Hourscontainer level={level} change={change} credit={credit}/></div>)}
    </Transition>
  );
}

function Hourscontainer(props) {
  const undergradCheck = props.level === "undergrad";
  const showCredit = props.credit === "part-time";
  return (
    <div className="input-container secondary-container hours-container" role="group" aria-labelledby="hours">
      <h3 id="hours">Hours</h3>
        {showCredit ? (
          <div className="no-float">
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
            ) : (
            <div className="input-group-hours">
              <input type="radio" id="full-time-hours" name="hours" defaultChecked></input>
              <label htmlFor="full-time-hours" className="number-font">
                {undergradCheck ? "12+" : "9+"}
              </label>
            </div>
            )}
    </div>
  );
}

function LevelTwo (props) {
  const level = props.level;
  const multiplier = props.multiplier;
  const show = props.distance;
  const change = props.expenses;
  const credit = props.credit;
  const isMobile = useMediaQuery({ query: '(max-width: 370px)' });
  return (
    <Transition config={{duration:300}} items={show} from={{maxHeight:0, overflow: "hidden", padding: "0px 0px"}} enter={isMobile ? {maxHeight: 482, padding: "10px 0px"} : {maxHeight: 320, padding: "10px 0px"}} leave={{maxHeight:0, padding: "0px 0px"}}>
    {show => show && (props =>
      <div style={props} className="secondary-container no-float">
        <div className="input-container" role="group" aria-labelledby="car">
          <h3 id="car">Car on campus?</h3>
          <InputGroup id={"yes-resident"} value={costs.carResident} label={"Resident"} name={"car"} change={change}/>
          <InputGroup id={"yes-commuter"} value={costs.carCommuter} label={"Commuter"} name={"car"} change={change}/>
          <InputGroup id={"no-car"} value={"0"} label={"No"} name={"car"} change={change}/>
        </div>
        <div className="input-container" role="group" aria-labelledby="meal">
          <h3 id="meal">Meal Plan?</h3>
          <InputGroup id={"yes-meal-plan"} value={costs.meal} label={"Yes"} name={"meal"} change={change}/>
          <InputGroup id={"no-meal-plan"} value={"0"} label={"No"} name={"meal"} change={change}/>
        </div>
        <Living change={change} credit={credit}/>
        <Healthinsurance change={change} level={level} multiplier={multiplier}/>
      </div>)}
    </Transition>
  )
}
function Living (props) {
  const show = props.credit === "full-time";
  const isMobile = useMediaQuery({ query: '(max-width: 370px)' });
  const change = props.change;
  return (
    <Transition items={show} from={{height:0, overflow: "hidden"}} enter={isMobile ? {height: 126} : {height: 72}} leave={{height:0}}>
      {show => show && (props =>
    <div className="no-float" style={props}>
      <div className="input-container" role="group" aria-labelledby="living">
        <h3 id="living">Living on campus?</h3>
        <InputGroup id={"on-campus-single"} value={costs.livingSingle} label={"Single"} name={"living"} change={change}/>
        <InputGroup id={"on-campus-double"} value={costs.livingDouble} label={"Double"} name={"living"} change={change}/>
        <InputGroup id={"off-campus"} value={"0"} label={"No"} name={"living"} change={change}/>
      </div>
    </div>
  )}
  </Transition>
  )
}
function Healthinsurance (props) {
  const undergradCheck = props.multiplier > 1 && props.level === "undergrad";
  const gradCheck = props.multiplier > 2 && props.level === "grad";
  const change = props.change;
  const show = undergradCheck || gradCheck;
  const isMobile = useMediaQuery({ query: '(max-width: 370px)' });
  return (
    <Transition items={show} from={{height:0, overflow: "hidden"}} enter={isMobile ? {height: 131} : {height: 104}} leave={{height:0}}>
      {show => show && (props =>
      <div className="no-float" style={props}>
        <div className="input-container" role="group" aria-labelledby="health">
          <h3 id="health">Health Insurance?</h3>
          <p className="disclaimer">*if you already have health insurance this option may be waved</p>
          <InputGroup id={"yes-health"} value={costs.health} label={"Yes"} name={"health"} change={change}/>
          <InputGroup id={"no-health"} value={"0"} label={"No"} name={"health"} change={change}/>
        </div>
      </div>)}
    </Transition>
  )
}

function Animatedtotal (props) {
  const animateProps = useSpring({config:{duration: 530},number: props.totalAfter, from: {number: props.totalBefore}});
  return (
    <animated.span className="total-font">{animateProps.number.interpolate(number => number.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","))}</animated.span>
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
        this.props.health !== prevProps.health ||
        this.props.fees !== prevProps.fees)
    {
      const previous = Math.ceil(prevProps.creditCost * prevProps.multiplier) + Number(prevProps.living) + Number(prevProps.car) + Number(prevProps.meal) + Number(prevProps.health) + prevProps.fees;
      const current = Math.ceil(this.props.creditCost * this.props.multiplier) + Number(this.props.living) + Number(this.props.car) + Number(this.props.meal) + Number(this.props.health) + this.props.fees;
      this.setState({previousTotal: previous, currentTotal: current})
    }
  }
  render() {
    return (
      <div className="total-container" aria-live="polite">
        <h3>TOTAL</h3>
        <p className="total-cost">$<Animatedtotal totalBefore={this.state.previousTotal} totalAfter={this.state.currentTotal}/></p>
        <p className="disclaimer">*This total is an estimated cost paid to WCU. This estimation does not include program-specific fees, graduate tuition differentials, or additional personal costs.</p>
      </div>
    );
  }
}

const InputGroup = (props) => {
  return (
  <div className="input-group">
    <input type="radio" id={props.id} value={props.value ? props.value : props.id} name={props.name} onChange={props.change}></input>
    <label htmlFor={props.id}>{props.label}</label>
  </div>
  )
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
      health: false,
      fees: 0
    };
    this.handleLevel = this.handleLevel.bind(this);
    this.handleResident = this.handleResident.bind(this);
    this.handleCredit = this.handleCredit.bind(this);
    this.handleHours = this.handleHours.bind(this);
    this.handleDistance = this.handleDistance.bind(this);
    this.handleOtherExpenses = this.handleOtherExpenses.bind(this);
  }
  componentDidUpdate (prevProps, prevState) {
    if (this.state.multiplier == 3 && this.state.level === "grad" && this.state.level !== prevState.level && prevState.level !== "") {
      document.getElementById("six-hours").checked = true;
    }
  }
  levelChanges (a,b,c,d,e) {
    if (this.state.credit === "part-time") {
      if (this.state.level === "undergrad"  && this.state.multiplier == 3) {
        this.setState({multiplier: 3, fees: e[2]})
      }
      else if (this.state.level === "") {
        this.setState({multiplier: d, fees: e[d - 1]})
      }
      else {
        this.setState(state => ({multiplier: Number(state.multiplier) + c, fees: e[Number(state.multiplier) + c - 1]}));
      }
    }
    if (this.state.credit === "full-time") {
      this.setState({fees: e[this.state.multiplier - 1]})
    }
    this.state.resident === "in-state" ? this.setState({creditCostInitial:a}) : this.state.resident === "out-of-state" ? this.setState({creditCostInitial:b}) : this.setState({creditCostInitial:0});
  }
  handleLevel(e) {
    this.setState({[e.target.name]: e.target.value});
    const costVar = this.state.distance ? costs : costsDLP;
    if (e.target.value === "undergrad") {
      this.levelChanges(costVar.ui, costVar.uo, -1, 1, costVar.ufees)
    }
    else {
      this.levelChanges(costVar.gi, costVar.go, 1, 2, costVar.gfees)
    }
  }
  residentChanges (a,b) {
    this.state.level === "undergrad" ? this.setState({creditCostInitial: a}) : this.state.level === "grad" ? this.setState({creditCostInitial: b}) : this.setState({creditCostInitial:0});
  }
  handleResident(e){
    this.setState({[e.target.name]: e.target.value});
    const costVar = this.state.distance ? costs : costsDLP;
    if (e.target.value === "in-state") {
      this.residentChanges(costVar.ui, costVar.gi)
    }
    else {
      this.residentChanges(costVar.uo, costVar.go)
    }
  }
  handleCredit(e) {
    this.setState({[e.target.name]: e.target.id});
    const costVar = this.state.distance ? costs : costsDLP;
    if (e.target.id === "full-time") {
      this.setState({multiplier: e.target.value});
      this.state.level === "undergrad" ? this.setState({fees: costVar.ufees[3]}) : this.state.level === "grad" ? this.setState({fees: costVar.gfees[3]}) : this.setState({fees: 0});
    }
    else {
      this.setState({living: 0, health:0});
      this.state.level === "undergrad" ? this.setState({multiplier: 1}) : this.setState({multiplier: 2});
      this.state.level === "undergrad" ? this.setState({fees: costVar.ufees[0]}) : this.state.level === "grad" ? this.setState({fees: costVar.gfees[1]}) : this.setState({fees: 0});
    }
  }
  handleHours(e) {
      this.setState({multiplier: e.target.value});
      const costVar = this.state.distance ? costs : costsDLP;
      this.state.level === "undergrad" ? this.setState({fees: costVar.ufees[Number(e.target.value) - 1]}) : this.state.level === "grad" ? this.setState({fees: costVar.gfees[Number(e.target.value) - 1]}) : this.setState({fees: 0});
      if (e.target.id === "three-hours") {this.setState({health:0})}
  }
  distanceChanges(a) {
    const multiplier = Number(this.state.multiplier);
    if (this.state.level !== ""  && this.state.credit !== "") {
      if (this.state.level === "undergrad") {
        this.state.resident === "in-state" ? this.setState({creditCostInitial: a.ui, fees: a.ufees[multiplier - 1]}) : this.state.resident === "out-of-state" ? this.setState({creditCostInitial: a.uo, fees: a.ufees[multiplier - 1]}) : this.setState({creditCostInitial: 0, fees: a.ufees[multiplier - 1]});
      }
      else {
        this.state.resident === "in-state" ? this.setState({creditCostInitial: a.gi, fees: a.gfees[multiplier - 1]}) : this.state.resident === "out-of-state" ? this.setState({creditCostInitial: a.go, fees: a.gfees[multiplier - 1]}) : this.setState({creditCostInitial: 0, fees: a.gfees[multiplier - 1]});
      }
    }
  }
  handleDistance(e) {
    const boolValue = e.target.value === "true";
    this.setState({[e.target.name]: boolValue});
    if (e.target.id === "online") {
      this.setState({living: 0, car: 0, meal: 0, health: 0});
      this.distanceChanges(costsDLP)
    }
    else {
      this.distanceChanges(costs)
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
          <h2>Estimated Cost Calculator</h2>
          <hr/>
        </div>
        <form id="cost-calculator-form">
          <div class="section-one">
            <div className="input-container" role="group" aria-labelledby="level">
              <h3 id="level">Level</h3>
              <InputGroup id={"undergrad"} label={"Undergraduate"} name={"level"} change={this.handleLevel}/>
              <InputGroup id={"grad"} label={"Graduate"} name={"level"} change={this.handleLevel}/>
            </div>
            <div className="input-container" role="group" aria-labelledby="resident">
              <h3 id="resident">Resident</h3>
              <InputGroup id={"in-state"} label={"In State"} name={"resident"} change={this.handleResident}/>
              <InputGroup id={"out-of-state"} label={"Out of State"} name={"resident"} change={this.handleResident}/>
            </div>
            <div className="input-container" role="group" aria-labelledby="credit">
              <h3 id="credit">Credit</h3>
              <InputGroup id={"full-time"} value={"4"} label={"Full-Time"} name={"credit"} change={this.handleCredit}/>
              <InputGroup id={"part-time"} label={"Part-Time"} name={"credit"} change={this.handleCredit}/>
            </div>
            <Hours change={this.handleHours} level={this.state.level} credit={this.state.credit}/>
            <div className="input-container" role="group" aria-labelledby="distance">
              <h3 id="distance">Location</h3>
              <InputGroup id={"in-person"} value={"true"} label={"In Person"} name={"distance"} change={this.handleDistance}/>
              <InputGroup id={"online"} value={"false"} label={"Online"} name={"distance"} change={this.handleDistance}/>
            </div>
          </div>
          <LevelTwo credit={this.state.credit} level={this.state.level} multiplier={this.state.multiplier} expenses={this.handleOtherExpenses} distance={this.state.distance}/>
        </form>
        <Total creditCost={this.state.creditCostInitial} multiplier={this.state.multiplier} distance={this.state.distance} living={this.state.living} car={this.state.car} meal={this.state.meal} health={this.state.health} fees={this.state.fees}/>
      </div>
    );
  }
}

export default App;
