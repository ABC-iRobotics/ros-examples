#include "ros/ros.h"
#include "roscpp_test_service/AddTwoInts.h"

bool add(roscpp_test_service::AddTwoInts::Request  &req,
         roscpp_test_service::AddTwoInts::Response &res)
{
  res.sum = req.a + req.b;
  return true;
}

int main(int argc, char **argv)
{
  ros::init(argc, argv, "simple_roscpp_server");
  ros::NodeHandle n;

  ros::ServiceServer service = n.advertiseService("add_two_ints", add);
  ROS_INFO("Ready to add two ints.")
  ros::spin();

  return 0;
}
