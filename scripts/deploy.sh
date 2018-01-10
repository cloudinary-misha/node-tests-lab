#!/bin/bash
set -ev

if [[ $TRAVIS_BRANCH == *"jenkins-staging"* ]]; then
  export CLOUDINARY_URL=$CLOUDINARY_URL_STAGING
fi