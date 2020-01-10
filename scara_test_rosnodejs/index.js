const rosnodejs = require('rosnodejs')
// rosnodejs.loadAllPackages()
const sensorMsgs = rosnodejs.require('sensor_msgs')

// Joint position vector
var jointState = new sensorMsgs.msg.JointState()

// nit ROS node
rosnodejs.initNode('/random_joint_coord_publisher', {onTheFly: true})
.then((nh) => {
  const jointStatePublisher = nh.advertise('/joint_states', 'sensor_msgs/JointState')
  setInterval(() => {
    jointState.header.stamp = rosnodejs.Time.now()
    jointState.name[0] = 'joint1'
    jointState.name[1] = 'joint2'
    jointState.name[2] = 'joint3'
    jointState.name[3] = 'joint4'
    jointState.position[0] = (Math.random() * 3.14) - 1.57
    jointState.position[1] = (Math.random() * 3.14) - 1.57
    jointState.position[2] = (Math.random() * 0.2) - 0.1
    jointState.position[3] = (Math.random() * 3.14) - 1.57

    jointStatePublisher.publish(jointState)
  }, 1000)
})


