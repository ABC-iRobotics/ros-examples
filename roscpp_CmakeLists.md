add_executable(simple_roscpp_publisher src/simple_roscpp_publisher.cpp)</br>
target_link_libraries(simple_roscpp_publisher ${catkin_LIBRARIES})</br>
add_dependencies(simple_roscpp_publisher roscpp_test_package_generate_messages_cpp)</br>
add_executable(simple_roscpp_subscriber src/simple_roscpp_subscriber.cpp)</br>
target_link_libraries(simple_roscpp_subscriber ${catkin_LIBRARIES})</br>
add_dependencies(simple_roscpp_subscriber roscpp_test_package_generate_messages_cpp)</br>