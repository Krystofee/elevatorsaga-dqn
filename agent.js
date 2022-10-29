class RandomElevatorAgent {
  constructor() {
    console.log("Agent constructor");
  }

  init(elevators, floors) {
    console.log("Agent init");
  }

  update(dt, elevators, floors) {
    // We normally don't need to do anything here
    console.log("Agent update");
  }
}

function getAgentCodeObject() {
  return new RandomElevatorAgent();
}

$(function () {});
