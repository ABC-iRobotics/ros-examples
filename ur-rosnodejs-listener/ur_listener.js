#!/usr/bin/env node

/************************************************************************
 Copyright (c) 2017, Rethink Robotics
 Copyright (c) 2017, Ian McMahon

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
************************************************************************/

'use strict'

// Require rosnodejs itself
const rosnodejs = require('rosnodejs')
// Requires the sensor_msgs message package
const sensorMsgs = rosnodejs.require('sensor_msgs').msg

function urListener() {
  // Register node with ROS master
  rosnodejs.initNode('/ur_listener')
    .then((rosNode) => {
      // Create ROS subscriber on the '/joint_states' topic expecting JointState messages
      let sub = rosNode.subscribe('/joint_states', 'sensor_msgs/JointState',
        (data) => { // define callback execution
          console.log(data.position)
        }
      )
    })
}

if (require.main === module) {
  // Invoke Main Listener Function
  urListener()
}
