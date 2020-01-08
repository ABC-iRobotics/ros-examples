#include "ros/ros.h"
#include "std_msgs/String.h"
#include <sstream>
#include <iostream>
using namespace std;

int main(int argc, char **argv)
{

  ros::init(argc, argv, "roscpp_publisher");

  ros::NodeHandle n;

  ros::Publisher counter_pub = n.advertise<std_msgs::String>("roscpp/counter", 1000);

  ros::Rate loop_rate(1);

  int count = 0;
  while (ros::ok())
  {

    std_msgs::String msg;

    std::stringstream ss;
    ss << count << " from roscpp_publisher";
    msg.data = ss.str();

    counter_pub.publish(msg);

    ros::spinOnce();

    loop_rate.sleep();
    ++count;
  }

  return 0;
}
