import React, { Component } from "react";
import TopSwitchPanel from "./TopSwitchPanelComponent";
import { BUTTONDATA } from "../shared/data";
import RenderSound from "./RenderSound";
import Volume from "./VolumeComponent";
import { Loading } from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";
import { connect } from "react-redux";
import {
  togglePower,
  toggleVolume,
  toggleDisplay,
  fetchData
} from "../redux/ActionCreators";

const mapStateToProps = state => {
  //console.log(state.playing);
  return {
    power: state.power,
    volume: state.volume,
    display: state.display,
    dataObj: state.dataObj
  };
};
const mapDispatchToProps = dispatch => {
  return {
    togglePower: currentState => {
      dispatch(togglePower(currentState));
    },
    toggleVolume: newVolume => {
      dispatch(toggleVolume(newVolume));
    },
    toggleDisplay: newDisplay => {
      dispatch(toggleDisplay(newDisplay));
    },
    fetchData: () => {
      dispatch(fetchData());
    }
  };
};

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: false
    };
  }

  componentDidMount() {
    // console.log(this.props.dataObj.playing.data.playing);
    this.props.fetchData();
    document.addEventListener("keydown", this.handleKeydownSound);
  }
  componentWillUnmount() {
    document.EventListener("keydown", this.handleKeydownSound);
  }
  //handles power, turns machine on and off
  handlePower = () => {
    this.props.togglePower(this.props.power.power);
  };

  //handles the sounds when use keyboard
  handleKeydownSound = event => {
    const drumKey = this.props.dataObj.data.find(
      obj => obj.keyCode === event.keyCode
    );

    const power = this.props.power;
    if (power && drumKey) {
      this.playSound(`${baseUrl + drumKey.url}`, drumKey.name);
      this.togglePlaying();
      // this.toggleData(drumKey.id);
    } else if (!power && drumKey) {
      alert("Please turn the app on!");
    }
  };
  //handles the sounds when use mouse click
  handleClickSound = (url, soundName, index) => {
    const power = this.props.power.power;
    if (power) {
      this.playSound(url, soundName);
      this.togglePlaying();
      //  this.toggleData(index);
    } else return alert("Please turn the app on!");
  };

  //plays the sound and activate the volume function
  playSound = (url, soundName) => {
    let sound = new Audio(url);
    sound.volume = this.props.volume.volume;
    sound.play();
    this.handleDisplay(soundName);
  };

  //changes message on the display
  handleDisplay = soundName => {
    this.props.toggleDisplay(soundName);
    setTimeout(() => {
      this.props.toggleDisplay("");
    }, 1000);
  };

  //changes the Volume
  handleVolume = event => {
    const power = this.props.power;
    const newVolume = event.target.value;
    const message = "Volume: " + event.target.value * 100;

    if (power) {
      this.props.toggleVolume(newVolume);
      this.handleDisplay(message);
    }
  };
  //change display background color
  getRandomColor() {
    let colorValues = ["#D81159", "#218380", "#73D2DE", "#FFBC42", "#8F2D56"];
    return colorValues[Math.floor(Math.random() * colorValues.length)];
  }
  togglePlaying = () => {
    this.setState({ playing: true });
    setTimeout(() => {
      this.setState({ playing: false });
    }, 200);
  };
  //change data.playing to true
  /*toggleData = index => {
    let obj = JSON.parse(JSON.stringify(this.props.dataObj.data));
    obj[index].playing;
    this.props.fetchData({ buttonData: obj });
    //this.setState();

    setTimeout(() => {
      obj[index].playing = false;
      this.props.fetchData({ buttonData: obj });
    }, 200);
    console.log(obj);
  };*/

  render() {
    if (this.props.dataObj.isLoading) {
      return (
        <div className="container">
          <div className="row">
            <Loading />
          </div>
        </div>
      );
    } else if (this.props.dataObj.errMess) {
      return (
        <div className="container">
          <div className="row">
            <h4>{this.props.dataObj.errMess}</h4>
          </div>
        </div>
      );
    } else if (this.props.dataObj.data != null)
      return (
        <div className="drum-machine">
          <div className="drum-panel row">
            <TopSwitchPanel
              handlePower={this.handlePower}
              getRandomColor={this.getRandomColor}
              power={this.props.power}
              dataObj={this.props.dataObj.data}
              display={this.props.display}
              playing={this.state.playing}
            />
          </div>
          <div className="drum-pads">
            <RenderSound
              handleClickSound={this.handleClickSound}
              dataObj={this.props.dataObj.data}
              power={this.props.power}
              getRandomColor={this.getRandomColor}
              playing={this.state.playing}
            />
          </div>
          <Volume
            handleVolume={this.handleVolume}
            currentVolume={this.props.volume}
          />
        </div>
      );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
