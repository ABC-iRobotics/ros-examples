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

const rosnodejs = require('rosnodejs')
const controlMsgs = rosnodejs.require('control_msgs').msg

rosnodejs.initNode('/ur_talker')
  .then(() => {
    const nh = rosnodejs.nh
    const pub = nh.advertise('/follow_joint_trajectory/goal'
    , controlMsgs.FollowJointTrajectoryActionGoal
    , {
      queueSize: 1,
      latching: true,
      throttleMs: 9
    })

    let msg = new controlMsgs.FollowJointTrajectoryActionGoal()
    let count = 0
    let secs = Math.floor(Date.now() / 1000)
    let nsecs = process.hrtime()
    let stamp = { secs: secs, nsecs: nsecs[1] }

    msg.header.seq = ++count
    msg.header.stamp = stamp
    msg.header.frame_id = ''
    msg.goal_id.stamp = stamp
    msg.goal_id.id = 'move_group-9-' + secs + '.' + nsecs[1]
    msg.goal.trajectory.header.seq = 0
    msg.goal.trajectory.header.stamp = stamp
    msg.goal.trajectory.header.frame_id = '/world'
    msg.goal.trajectory.joint_names = ['elbow_joint', 'shoulder_lift_joint', 'shoulder_pan_joint', 'wrist_1_joint', 'wrist_2_joint', 'wrist_3_joint']
    msg.goal.trajectory.points = [ {
      positions:
      [ -2.0801556643182173,
        -1.5668966170641498,
        -1.605283236302502,
        -1.0912902526213797,
        1.5952586159884694,
        -0.03575859324711912 ],
      velocities:
      [ 0.17809247625382332,
        -0.17678425870653636,
        -0.39331144480729696,
        -0.0093109095014811,
        -0.011290417309480338,
        -0.3932689271214698 ],
      accelerations:
      [ 1.4264131795104111,
        -1.4159351470276835,
        -3.1501871405607025,
        -0.07457476197485481,
        -0.09042942403396163,
        -3.149846599574927 ],
      effort: [],
      time_from_start: { secs: 0, nsecs: 150807302 } }
    ]
    msg.goal.path_tolerance = []
    msg.goal.goal_tolerance = []
    msg.goal.goal_time_tolerance = ''

    pub.publish(msg)
    rosnodejs.log.info('msg is published')
  })
