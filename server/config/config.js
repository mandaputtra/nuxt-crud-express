require('dotenv').config();//instatiate environment variables


let CONFIG = {} //Make this global to use all over the application

CONFIG.db_dialect = process.env.DB_DIALECT || 'mongo';
CONFIG.db_host = process.env.DB_HOST || 'localhost';
CONFIG.db_port = process.env.DB_PORT || '27017';
CONFIG.db_name = process.env.DB_NAME || 'nuxt_crud';
CONFIG.db_user = process.env.DB_USER || '';
CONFIG.db_password = process.env.DB_PASSWORD || '';

CONFIG.jwt_encryption  = process.env.JWT_ENCRYPTION || 'jwt_please_change';
CONFIG.jwt_expiration  = process.env.JWT_EXPIRATION || '10000';

module.exports = CONFIG;
