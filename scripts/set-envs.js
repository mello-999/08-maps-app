
const { writeFileSync, mkdirSync} = require( 'fs')

require('dotenv').config();

const targethPath = './src/environments/environment.ts';
const targethPathDev = './src/environments/environment.development.ts';

const mapboxkey = process.env['MAPBOX_KEY'];


if ( !mapboxkey ) {
    throw new Error('MAPBOX_KEY is not set')
}

const envFielsContent =  `

export const environments = {

    mapboxKey: "${ mapboxkey }" 
    };

`;


mkdirSync('./src/environments', { recursive: true } );


writeFileSync( targethPath, envFielsContent );
writeFileSync( targethPathDev, envFielsContent );




