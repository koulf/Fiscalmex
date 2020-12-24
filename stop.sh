#!/bin/bash
​

echo "stopping"
if sudo netstat -lpn | grep :443; then sudo killall node; fi