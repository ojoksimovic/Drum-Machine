import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDrum } from '@fortawesome/free-solid-svg-icons';
import { faToggleOn } from '@fortawesome/free-solid-svg-icons';
import { faToggleOff } from '@fortawesome/free-solid-svg-icons';
import KeyboardEventHandler from 'react-keyboard-event-handler';


class DrumMachine extends React.Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.togglePower = this.togglePower.bind(this);
        this.padPress = this.padPress.bind(this);
        this.keyPress = this.keyPress.bind(this);
        this.state = ({
            power: "off",
            fun: "off",
            text: "Press a pad.",
            previousPad: ""
        });

    };

    toggle() {
        const toggleOff = document.querySelector("#toggle-off");
        const toggleOn = document.querySelector("#toggle-on");
        const pads = document.getElementsByClassName("pad");
        if (this.state.fun == "off") {
            toggleOff.className = "hidden";
            toggleOn.className = "visible";
            this.setState({
                fun: "on"
            });

        } else {
            toggleOff.className = "visible";
            toggleOn.className = "hidden";
            this.setState({
                fun: "off"
            });

            const root = document.querySelector("#root");
            root.style.backgroundColor = "#66757F";
        };

    };

    togglePower() {
        const togglePowerOff = document.querySelector("#toggle-power-off");
        const togglePowerOn = document.querySelector("#toggle-power-on");
        const screen = document.querySelector("#display");
        const screenText = document.querySelector("#screen-text");
        const pads = document.getElementsByClassName("pad");
        if (this.state.power == "off") {
            togglePowerOff.className = "hidden";
            togglePowerOn.className = "visible";
            screen.style.backgroundColor = "#d0ff00";
            screenText.className = "visible";
            this.setState({
                power: "on",
                text: "Press a pad."
            });
            for (let i = 0; i < pads.length; i++) {
                pads[i].className = "pad pad-on col-4 drum-pad"
            };
        } else {
            togglePowerOff.className = "visible";
            togglePowerOn.className = "hidden";
            screen.style.backgroundColor = "#292F33";
            screenText.className = "hidden";
            this.setState({
                power: "off"
            });
            for (let i = 0; i < pads.length; i++) {
                pads[i].className = "pad pad-off col-4 drum-pad"
            };
        };
    };

    padPress(event) {

        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const root = document.querySelector("#root");
        const audiot1 = document.querySelector("#Q");
        const audiot2 = document.querySelector("#W");
        const audiot3 = document.querySelector("#E");
        const audiom1 = document.querySelector("#A");
        const audiom2 = document.querySelector("#S");
        const audiom3 = document.querySelector("#D");
        const audiob1 = document.querySelector("#Z");
        const audiob2 = document.querySelector("#X");
        const audiob3 = document.querySelector("#C");

        const funaudiot1 = document.querySelector("#fun-audio-t1");
        const funaudiot2 = document.querySelector("#fun-audio-t2");
        const funaudiot3 = document.querySelector("#fun-audio-t3");
        const funaudiom1 = document.querySelector("#fun-audio-m1");
        const funaudiom2 = document.querySelector("#fun-audio-m2");
        const funaudiom3 = document.querySelector("#fun-audio-m3");
        const funaudiob1 = document.querySelector("#fun-audio-b1");
        const funaudiob2 = document.querySelector("#fun-audio-b2");
        const funaudiob3 = document.querySelector("#fun-audio-b3");


        if (this.state.power == "on"){
            if (this.state.fun == "off") {
                switch(event.target.id) {
                    case "t1":
                        audiot1.currentTime = 0;
                        audiot1.play();
                        this.setState({
                            text: "hi-hat (open)"
                        });
                        break;
                    case "t2":
                        audiot2.currentTime = 0;
                        audiot2.play();
                        this.setState({
                            text: "crash"
                        });
                        break;
                    case "t3":
                        audiot3.currentTime = 0;
                        audiot3.play();
                        this.setState({
                            text: "ride"
                        });
                        break;
                    case "m1":
                        audiom1.currentTime = 0;
                        audiom1.play();
                        this.setState({
                            text: "tom 1"
                        });
                        break;
                    case "m2":
                        audiom2.currentTime = 0;
                        audiom2.play();
                        this.setState({
                            text: "tom 2"
                        });
                        break;
                    case "m3":
                        audiom3.currentTime = 0;
                        audiom3.play();
                        this.setState({
                            text: "tom 3"
                        });
                        break;
                    case "b1":
                        audiob1.currentTime = 0;
                        audiob1.play();
                        this.setState({
                            text: "bass"
                        });
                        break;
                    case "b2":
                        audiob2.currentTime = 0;
                        audiob2.play();
                        this.setState({
                            text: "snare"
                        });
                        break;
                    case "b3":
                        audiob3.currentTime = 0;
                        audiob3.play();
                        this.setState({
                            text: "hi-hat (closed)"
                        });
                        break;

                };
            };

            if (this.state.fun == "on") {
                switch(event.target.id) {
                    case "t1":
                        funaudiot1.currentTime = 0;
                        funaudiot1.play();
                        this.setState({
                            text: "bonus alert"
                        });
                        break;
                    case "t2":
                        funaudiot2.currentTime = 0;
                        funaudiot2.play();
                        this.setState({
                            text: "quick jump"
                        });
                        break;
                    case "t3":
                        funaudiot3.currentTime = 0;
                        funaudiot3.play();
                        this.setState({
                            text: "changing tab"
                        });
                        break;
                    case "m1":
                        funaudiom1.currentTime = 0;
                        funaudiom1.play();
                        this.setState({
                            text: "game over"
                        });
                        break;
                    case "m2":
                        funaudiom2.currentTime = 0;
                        funaudiom2.play();
                        this.setState({
                            text: "slot machine wheel"
                        });
                        break;
                    case "m3":
                        funaudiom3.currentTime = 0;
                        funaudiom3.play();
                        this.setState({
                            text: "fairy sparkle"
                        });
                        break;
                    case "b1":
                        funaudiob1.currentTime = 0;
                        funaudiob1.play();
                        this.setState({
                            text: "racer start"
                        });
                        break;
                    case "b2":
                        funaudiob2.currentTime = 0;
                        funaudiob2.play();
                        this.setState({
                            text: "game notification"
                        });
                        break;
                    case "b3":
                        funaudiob3.currentTime = 0;
                        funaudiob3.play();
                        this.setState({
                            text: "unlock"
                        });
                        break;

                };
            };
        };

        if (this.state.fun == "on" && this.state.power == "on") {
            root.style.backgroundColor = "#" + randomColor;
        };

    };

    // Get the input field

    componentDidMount(){
        document.addEventListener("keydown", this.keyPress, false);
    };

    keyPress(event) {
        const T1 = document.querySelector("#t1");
        const T2 = document.querySelector("#t2");
        const T3 = document.querySelector("#t3");
        const M1 = document.querySelector("#m1");
        const M2 = document.querySelector("#m2");
        const M3 = document.querySelector("#m3");
        const B1 = document.querySelector("#b1");
        const B2 = document.querySelector("#b2");
        const B3 = document.querySelector("#b3");
        
        if (this.state.power == "on"){
            switch(event.keyCode) {
                case 81:
                    T1.click();
                    break;
                case 87:
                    T2.click();
                    break;
                case 69:
                    T3.click();
                    break;
                case 65:
                    M1.click();
                    break;
                case 83:
                    M2.click();
                    break;
                case 68:
                    M3.click();
                    break;
                case 90:
                    B1.click();
                    break;
                case 88:
                    B2.click();
                    break;
                case 67:
                    B3.click();
                    break;
            };

        };
    };


    render() {
        return (
            <div className = "container-fluid" id = "drum-machine">
            <div className = "row">
            <div className = "col-12 text-center">
            <h1 id = "main-title">Olivera's Drum Machine <FontAwesomeIcon icon={faDrum}/></h1>
            </div>
            </div>

            <div className = "row">
            <div id = "drum-container" className = "col-sm-8 offset-sm-2 col-xs-12 text-center">

            <div id = "top-drum-pad" className = "drum-pad-row row">

            <button id = "t1" className = "pad pad-off col-4 drum-pad" onClick={this.padPress}>
            <audio id="Q" className = "clip" src="./hi-hat-open.mp3" preload="auto"></audio>
            <audio id="fun-audio-t1" src="./arcade-bonus-alert.mp3" preload="auto"></audio>Q
            </button>

            <button id = "t2" className = "pad pad-off col-4 drum-pad" onClick={this.padPress}>
            <audio id="W" className = "clip" src="./crash.mp3" preload="auto"></audio>
            <audio id="fun-audio-t2" src="./arcade-quick-jump.mp3" preload="auto"></audio>W
            </button>

            <button id = "t3" className = "pad pad-off col-4 drum-pad" onClick={this.padPress}>
            <audio id="E" className = "clip" src="./ride.mp3" preload="auto"></audio>
            <audio id="fun-audio-t3" src="./arcade-retro-changing-tab.mp3" preload="auto"></audio>E
            </button>
            </div>

            <div id = "middle-drum-pad" className = "drum-pad-row row">

            <button id = "m1" className = "pad pad-off col-4 drum-pad" onClick={this.padPress}>
            <audio id="A" className = "clip" src="./tom1.mp3" preload="auto"></audio>
            <audio id="fun-audio-m1" src="./arcade-retro-game-over.mp3" preload="auto"></audio>A
            </button>

            <button id = "m2" className = "pad pad-off col-4 drum-pad" onClick={this.padPress}>
            <audio id="S" className = "clip" src="./tom2.mp3" preload="auto"></audio>
            <audio id="fun-audio-m2" src="./arcade-slot-machine-wheel.mp3" preload="auto"></audio>S
            </button>

            <button id = "m3" className = "pad pad-off col-4 drum-pad" onClick={this.padPress}>
            <audio id="D" className = "clip" src="./tom3.mp3" preload="auto"></audio>
            <audio id="fun-audio-m3" src="./fairy-arcade-sparkle.mp3" preload="auto"></audio>D
            </button>
            </div>

            <div id = "bottom-drum-pad" className = "drum-pad-row row">

            <button id = "b1" className = "pad pad-off col-4 drum-pad" onClick={this.padPress}>
            <audio id="Z" className = "clip" src="./bass.mp3" preload="auto"></audio>
            <audio id="fun-audio-b1" src="./retro-arcade-racer-start.mp3" preload="auto"></audio>Z
            </button>

            <button id = "b2" className = "pad pad-off col-4 drum-pad" onClick={this.padPress}>
            <audio id="X" className = "clip" src="./snare.mp3" preload="auto"></audio>
            <audio id="fun-audio-b2" src="./retro-game-notification.mp3" preload="auto"></audio>X
            </button>

            <button id = "b3" className = "pad pad-off col-4 drum-pad" onClick={this.padPress}>
            <audio id="C" className = "clip" src="./hi-hat-closed.mp3" preload="auto"></audio>
            <audio id="fun-audio-b3" src="./unlock-game-notification.mp3" preload="auto"></audio>C
            </button>
            </div>

            <div id = "control" className = "row">

            <div id = "logo" className = "col-3">
            <p>Arevilo Pro</p>

            </div>

            <div id = "display" className = "col-6">
            <p id = "screen-text" className = "hidden">{this.state.text}</p>
            </div>

            <div id = "toggle-div" className = "col-3 text-left">
            <a id = "toggle-on" onClick = {this.toggle} className = "hidden" href = "#"><FontAwesomeIcon size = "2x" color = "#55ACEE" icon = { faToggleOn }/> FUN On</a>
            <a id = "toggle-off" onClick = {this.toggle} href = "#"><FontAwesomeIcon size = "2x" color = "#55ACEE" icon = { faToggleOff }/> FUN Off</a>
            <br/>

            <a id = "toggle-power-off" onClick = {this.togglePower} href = "#"><FontAwesomeIcon size = "2x" color = "white" icon = { faToggleOff }/> Power Off</a>

            <a id = "toggle-power-on" onClick = {this.togglePower} className = "hidden" href = "#"><FontAwesomeIcon size = "2x" color = "white" icon = { faToggleOn }/> Power On</a>

            <p></p>
            </div>
            </div>
            </div>
            </div>
            </div>
        );
    };
};

export default DrumMachine;
