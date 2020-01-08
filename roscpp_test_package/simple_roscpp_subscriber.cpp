#include "ros/ros.h"
#include "std_msgs/String.h"
#include <iostream>
using namespace std;


void counterCallback(const std_msgs::String::ConstPtr& msg)
{
  cout << msg->data << "\n";
}

int main(int argc, char **argv)
{
  ros::init(argc, argv, "roscpp_subscriber");

  ros::NodeHandle n;

  ros::Subscriber sub = n.subscribe("roscpp/counter", 1000, counterCallback);

  ros::spin();

  return 0;
}
