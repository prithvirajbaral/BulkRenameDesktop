#!/bin/bash

script_name=$0
script_full_path=$(dirname "$0")

echo "script_name: $script_name"
echo "full_path: $script_full_path"

node "$script_full_path/index.js"
