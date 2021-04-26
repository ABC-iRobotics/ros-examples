# ros-examples

## Overview
Some ROS examples to practice

## TOC
1. [Requirements](#requirements)
2. [Installation](#installation)
3. [Configuration](#configuration)
4. [Example Usage 1](#example-usage-1)
5. [Example Usage 2](#example-usage-2)
6. [Bugs, feature requests, etc](#bugs-feature-requests-etc)

## Requirements
- ROS Kinetic or Melodic Desktop Full installation on Ubuntu
- tf2-web-republisher
- rosbridge-suite
- joint-state-publisher-gui
- Node.js
- apache2

### Optional
- openssh-server
- mc
- node-red
- terminator

## Configuration
1. Create catkin workspace 'mkdir -p ~/catkin_ws/src'
2. In the 'catkin_ws' folder run 'catkin_make'
3. Configurate the '.bashrc': 'echo "source ~/catkin_ws/devel/setup.bash" >> ~/.bashrc'
4. Create a new package for 'roscpp_test_package' in 'src' folder 'catkin_create_pkg roscpp_test_package std_msgs roscpp'
5. Create a new package for 'rospy_test_package' in 'src' folder 'catkin_create_pkg rospy_test_package std_msgs rospy'
6. Create a new package for 'scara_test_description' in 'src' folder 'catkin_create_pkg scara_test_description'
7. Create a new package for 'simple_start_package' in 'src' folder 'catkin_create_pkg simple_start_package'

## Installation
- Clone the repository
- Copy the 'simple_roscpp_publisher.cpp' and the 'simple_roscpp_subscriber.cpp' files from the 'roscpp_test_package' folder to the 'roscpp_test_package' package 'src' folder
- Add [these rows](roscpp_CMakeLists.md) to the end of the 'roscpp_test_package/CMakeLists.txt' file
- Copy the 'simple_rospy_publisher.py' and the 'simple_rospy_subscriber.py' files from the 'simple_rospy_package' folder to the 'rospy_test_package' package 'src' folder
- Create a 'launch' and a 'urdf' folder in the 'scara_test_description' package folder
- Copy the 'upload_scara_test.launch' file from 'scara_test_description' folder to the 'scara_test_description' package 'launch' folder
- Copy the 'scara_robot_simple.urdf' file from 'scara_test_description' folder to the 'scara_test_description' package 'urdf' folder
- Create a 'launch' folder in the 'simple_start_package' package folder
- Copy the 'start.launch' file from the 'simple_start_package' folder to the 'simple_start_package' package 'launch' folder
- Copy the 'urdf.html' file from the 'simple_rosbrigde_test' folder to the 'apache2' root folder (default path: '/var/www/html/')
- Run 'catkin_make' command in '~/catkin_ws' folder
- Run 'npm i' command in the 'scara_test_rosnodejs' folder

## Example Usage 1
1. Run in 1st terminal: 'roscore'
2. Run in 2nd terminal: 'rosrun rospy_test_package simple_rospy_publisher.py'
3. Run in 3rd terminal: 'rosrun rospy_test_package simple_rospy_subscriber.py'
4. Run in 4th terminal: 'rosrun roscpp_test_package simple_roscpp_publisher'
5. Run in 5th terminal: 'rosrun roscpp_test_package simple_roscpp_subscriber'

## Example Usage 2
1. Run in 1nd terminal: 'roslaunch scara_test_description upload_scara_test.launch'
2. Run in 2nd terminal: 'rosrun robot_state_publisher robot_state_publisher'
3. Run in 3rd ternimal: 'rosparam set use_gui true'
4. Run in 3rd terminal: 'rosrun joint_state_publisher joint_state_publisher'
- OR
4. Run in 3th terminal: 'nodejs "CLONED-REPO-PATH"/scara_test_rosnodejs/index.js'
5. Run in 4th terminal: 'rosrun rviz rviz' and Add 'RobotModel' and Set the Fixed Frame to 'world'
- Optional:
6. Run in 5th terminal: 'rosrun tf2_web_republisher tf2_web_republisher'
7. Run in 6th terminal: 'roslaunch rosbridge_server rosbridge_websocket.launch' and open a Browser and open the http://localhost/urdf.html

## Acknowledgement
We acknowledge the financial support of this work by the Hungarian State and the European Union under the  EFOP-3.6.1-16-2016-00010 project.

## Bugs, feature requests, etc
Please use the [GitHub issue tracker][].

[GitHub issue tracker]: https://github.com/ABC-iRobotics/ros-kinetic-examples/issues
