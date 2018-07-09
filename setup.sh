#!/bin/bash
# Bash script to prepare textbook environment

# git submodule update --init --recursive --remote

cd ./public/textbook/JSAV
make

cd ./../
make min
