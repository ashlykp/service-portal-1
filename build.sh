#!/bin/bash

echo "Building DCAR_Algo_Server..."
rm -rf release
./node_modules/webpack-cli/bin/cli.js -p --progress --env.prod --devtool 
echo "Build complete"

rm -rf deployment-files/DCAR_Algo_Server-aca-crd/files
mkdir deployment-files/DCAR_Algo_Server-aca-crd/files
cd release
echo "Archiveing the file to .tar.bz2..."
tar -cvjf ../deployment-files/DCAR_Algo_Server-aca-crd/files/DCAR_Algo_Server-aca.tar.bz2 ./DCAR_Algo_Server-aca.js
echo "Copied the compressed file to deployment chart folder..."
