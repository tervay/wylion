./node_modules/openapi-typescript-codegen/bin/index.js -i meteo.yml -o src/client/ --useOptions
npx @svgr/cli --out-dir src/icons/meteocons/all --typescript -- node_modules/@bybas/weather-icons/production/line/all/
npx @svgr/cli --out-dir src/icons/meteocons/darksky --typescript -- node_modules/@bybas/weather-icons/production/line/darksky/
npx @svgr/cli --out-dir src/icons/meteocons/openweathermap --typescript -- node_modules/@bybas/weather-icons/production/line/openweathermap/
