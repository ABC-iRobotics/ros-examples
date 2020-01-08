#! /usr/bin/env python

import rospy

from std_msgs.msg import Int32

def callback(msg):
  print msg.data

rospy.init_node('rospy_subscriber')
sub = rospy.Subscriber('rospy/counter', Int32, callback)
rospy.spin()
