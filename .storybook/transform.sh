#!/bin/bash

DEBUG="${DEBUG:-@modernpoacher/sprockets*}"

node -e 'import("./.storybook/transform.mjs").then(({ default: transform }) => transform())'
