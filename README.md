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
4. Clone the repository

## Create a roscpp package
1. Create a new package for 'roscpp_test_package' in 'src' folder 'catkin_create_pkg roscpp_test_package std_msgs roscpp'
2. Copy the 'simple_roscpp_publisher.cpp' and the 'simple_roscpp_subscriber.cpp' files from the 'roscpp_test_package' folder to the 'roscpp_test_package' package 'src' folder
3. Add these rows to the end of the 'roscpp_test_package/CMakeLists.txt' file
	```
	add_executable(simple_roscpp_publisher src/simple_roscpp_publisher.cpp)
	target_link_libraries(simple_roscpp_publisher ${catkin_LIBRARIES})
	add_dependencies(simple_roscpp_publisher roscpp_test_package_generate_messages_cpp)
	add_executable(simple_roscpp_subscriber src/simple_roscpp_subscriber.cpp)
	target_link_libraries(simple_roscpp_subscriber ${catkin_LIBRARIES})
	add_dependencies(simple_roscpp_subscriber roscpp_test_package_generate_messages_cpp)
	```

### Build the roscpp package
- cd ~/catkin_ws
- rospack profile

### Run the roscpp nodes
1. Run in 1st terminal: 'roscore'
2. Run in 4th terminal: 'rosrun roscpp_test_package simple_roscpp_publisher'
3. Run in 5th terminal: 'rosrun roscpp_test_package simple_roscpp_subscriber'

## Create a rospy package
1. Create a new package for 'rospy_test_package' in 'src' folder 'catkin_create_pkg rospy_test_package std_msgs rospy'
2. Copy the 'simple_rospy_publisher.py' and the 'simple_rospy_subscriber.py' files from the 'simple_rospy_package' folder to the 'rospy_test_package' package 'src' folder

### Build the rospy package
- cd ~/catkin_ws
- run the 'catkin_make' command 2 times
- rospack profile

### Run the rospy nodes
1. Run in 1st terminal: 'roscore'
2. Run in 2nd terminal: 'rosrun rospy_test_package simple_rospy_publisher.py'
3. Run in 3rd terminal: 'rosrun rospy_test_package simple_rospy_subscriber.py'

## Create a scara robot package
- Create a new package for 'scara_test_description' in 'src' folder 'catkin_create_pkg scara_test_description'
- Create a 'launch' and a 'urdf' folder in the 'scara_test_description' package folder
- Copy the 'upload_scara_test.launch' file from 'scara_test_description' folder to the 'scara_test_description' package 'launch' folder
- Copy the 'scara_robot_simple.urdf' file from 'scara_test_description' folder to the 'scara_test_description' package 'urdf' folder

## Create a launch package
- Create a new package for 'simple_start_package' in 'src' folder 'catkin_create_pkg simple_start_package'
- Create a 'launch' folder in the 'simple_start_package' package folder
- Copy the 'start.launch' file from the 'simple_start_package' folder to the 'simple_start_package' package 'launch' folder
- Run 'catkin_make' command in '~/catkin_ws' folder
- Run 'npm i' command in the 'scara_test_rosnodejs' folder
- Copy the 'urdf.html' file from the 'simple_rosbrigde_test' folder to the 'apache2' root folder (default path: '/var/www/html/')

### Usage
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

## Create a ROS message and service
- cd ~/catkin_ws/src
- catkin_create_pkg roscpp_test_service std_msgs roscpp
- cd ~/catkin_ws
- catkin_make
- cd ~/catkin_ws/src/roscpp_test_service
- mkdir msg
- cd msg
- echo "int64 num" > Num.msg
- open 'nano ~/catkin_ws/src/roscpp_test_service/package.xml' and uncomment these rows and save the file with CTRL+O ENTER and exit with CTRL+X:
	```
	<build_depend>message_generation</build_depend>
	<exec_depend>message_runtime</exec_depend>
	```
- open 'nano ~/catkin_ws/src/roscpp_test_service/CMakeLists.txt' and uncomment or/and add these rows and save the file with CTRL+O ENTER and exit with CTRL+X:
	```
	find_package(catkin REQUIRED COMPONENTS
	  ...
	  message_generation
	)
	catkin_package(
	  ...
	  CATKIN_DEPENDS message_runtime
	)
	add_message_files(
	  FILES
	  Num.msg
	)		
	generate_messages(
	  DEPENDENCIES
	  std_msgs
	)
	```

- cd ~/catkin_ws/src/roscpp_test_service
- mkdir srv
- cd srv
- open 'nano AddTwoInts.srv' add these rows to the file and save the file with CTRL+O ENTER and exit with CTRL+X:
	```
	int64 a
	int64 b
	---
	int64 sum
	```

- open 'nano ~/catkin_ws/src/roscpp_test_service/CMakeLists.txt' and uncomment or/and add these rows and save the file with CTRL+O ENTER and exit with CTRL+X:
	```
	add_service_files(
	  FILES
	  AddTwoInts.srv
	)
	```

- cp ~/Templates/roscpp_test_service/* ~/catkin_ws/src/roscpp_test_service/src/
- cd ~/catkin_ws/src/roscpp_test_service
- open 'nano CMakeLists.txt' add these rows to the end of the file and save the file with CTRL+O ENTER and exit with CTRL+X:
	```
	add_executable(simple_roscpp_server src/simple_roscpp_server.cpp)
	target_link_libraries(simple_roscpp_server ${catkin_LIBRARIES})
	add_dependencies(simple_roscpp_server roscpp_test_service_generate_messages_cpp)
	add_executable(simple_roscpp_client src/simple_roscpp_client.cpp)
	target_link_libraries(simple_roscpp_client ${catkin_LIBRARIES})
	add_dependencies(simple_roscpp_client roscpp_test_service_generate_messages_cpp)
	```

- cd ~/catkin_ws
- catkin_make
- rospack profile

### Usage:
1. Run in 1st terminal: roscore
2. Run in 2th terminal: rosrun roscpp_test_service simple_roscpp_server
3. Run in 3th terminal: rosrun roscpp_test_service simple_roscpp_client 103 34

