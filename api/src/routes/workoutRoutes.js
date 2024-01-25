const requests = (key) => {
    const request = {
        '/users/login/': {
            post: {
                summary: 'Iniciar sesión',
                description: 'Endpoint para iniciar sesión y obtener un token de acceso.',
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    email: {
                                        type: 'string',
                                        example: 'admin@gmail.com'
                                    },
                                    password: {
                                        type: 'string',
                                        example: 'Hola123.'
                                    },
                                },
                            },
                        },
                    },
                },
                responses: {
                    '200': {
                        description: 'Inicio de sesión exitoso',
                        content: {
                            'application/json': {
                                example: {
                                    status: 'Success',
                                    message: `Hi user@example.com, you are logged`,
                                    authorization: 'jwt_token_here',
                                },
                            },
                        },
                    },
                    '401': {
                        description: 'Credenciales inválidas',
                        content: {
                            'application/json': {
                                example: {
                                    error: true,
                                    errorName: "UserError",
                                    message: "Error when try login sesion: Invalid email or password"
                                },
                            },
                        },
                    },
                },
            },
        },
        '/users/register/': {
            post: {
                summary: 'Registro de usuario',
                description: 'Endpoint para registrar un nuevo usuario, necesario token.',
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    full_name: {
                                        type: 'string',
                                        example: 'jugador99'
                                    },
                                    email: {
                                        type: 'string',
                                        example: 'jugador99@gmail.com'
                                    },
                                    password: {
                                        type: 'string',
                                        example: 'Hola123.'
                                    },
                                    role: {
                                        type: 'string',
                                        example: 'PLAYER'
                                    },
                                },
                            },
                        },
                    },
                },
                responses: {
                    '200': {
                        description: 'Registro exitoso',
                        content: {
                            'application/json': {
                                example: {
                                    status: "Success",
                                    message: "The user with the email jugador991@gmail.com has been created"
                                },
                            },
                        },
                    },
                    '401': {
                        description: 'Credenciales inválidas',
                        content: {
                            'application/json': {
                                example: {
                                    error: true,
                                    errorName: "tokenError",
                                    message: "Invalid authorization"
                                },
                            },
                        },
                    },
                    '400': {
                        description: 'Solicitud incorrecta',
                        content: {
                            'application/json': {
                                example: {
                                    error: true,
                                    errorName: "UserError",
                                    message: "Bad Request: Invalid Email / Password / Keys on Body / Role"
                                },
                            },
                        },
                    },
                    '409': {
                        description: 'Conflicto, usuario ya existente',
                        content: {
                            'application/json': {
                                example: {
                                    error: 'El usuario ya existe',
                                },
                            },
                        },
                    },
                },
            },
        },
        '/matches/': {
            get: {
                summary: 'Obtener todos los matches',
                description: 'Endpoint para obtener matches, necesario token',
                responses: {
                    '200': {
                        description: 'Inicio de sesión exitoso',
                        content: {
                            'application/json': {
                                example: {
                                    status: 'Success',
                                    message: `All matches`,
                                    data: 'Array of matches',
                                },
                            },
                        },
                    },
                    '401': {
                        description: 'Credenciales inválidas',
                        content: {
                            'application/json': {
                                example: {
                                    error: true,
                                    errorName: "TokenError",
                                    message: "Token has invalid or expired"
                                },
                            },
                        },
                    },
                },
            },
        },
        '/matches/bydate': {
            get: {
                summary: 'Obtener todos los matches segun date',
                description: 'Endpoint para obtener matches en un rango de fecha, necesario token',
                parameters: [
                    {
                        name: 'startDate',
                        in: 'query',
                        required: true,
                        type: 'string',
                        description: 'Start Date',
                    }, {
                        name: 'endDate',
                        in: 'query',
                        required: true,
                        type: 'string',
                        description: 'End Date',
                    }
                ],
                responses: {
                    '200': {
                        description: 'Inicio de sesión exitoso',
                        content: {
                            'application/json': {
                                example: {
                                    status: 'Success',
                                    message: `All matches`,
                                    data: 'Array of matches',
                                },
                            },
                        },
                    },
                    '401': {
                        description: 'Credenciales inválidas',
                        content: {
                            'application/json': {
                                example: {
                                    error: true,
                                    errorName: "TokenError",
                                    message: "Token has invalid or expired"
                                },
                            },
                        },
                    },
                },
            },
        }
    }

    return request[key]
}



export {
    requests
}

