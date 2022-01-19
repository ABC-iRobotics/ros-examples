#! /usr/bin/env python3

import rospy

from std_msgs.msg import Int32

rospy.init_node('rospy_publisher')
pub = rospy.Publisher('rospy/counter', Int32, queue_size=1)
rate = rospy.Rate(1)
count = Int32()
count.data = 0

while not rospy.is_shutdown():
  pub.publish(count.data)
  count.data += 1
  rate.sleep()
