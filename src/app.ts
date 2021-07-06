import 'reflect-metadata';
import { createExpressServer } from 'routing-controllers';
import http from 'http';
import { controllers } from './app/controllers';
require('dotenv-safe').config({
  allowEmptyValues: true
});

const express = createExpressServer({
  controllers: controllers,
})

const app = new http.Server(express);

export { app }