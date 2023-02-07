#!/bin/bash

# TEXT COLOR
export BLUE_TEXT='\033[0;34m'
export LIGHT_BLUE_TEXT='\033[1;34m'
export GREEN_TEXT='\033[0;32m'
export LIGHT_GREEN_TEXT='\033[1;32m'
export RED_TEXT='\033[0;31m'
export LIGHT_RED_TEXT='\033[1;31m'
export NO_COLOR_TEXT='\033[0m'

print_text()
{
  echo "${2}${1}${NO_COLOR_TEXT}"
}
export -f print_text

# --- End Definitions Section ---
# check if we are being sourced by another script or shell
[[ "${#BASH_SOURCE[@]}" -gt "1" ]] && { return 0; }
# --- Begin Code Execution Section ---
