/**
     * @api {post} /oauth/token/ Return a access token by password
     * @apiVersion 0.1.0
     * @apiName GetTokenByPassword
     * @apiGroup Auth
     *
     * @apiParam {String} email The mail of user.
     * @apiParam {String} password Password of user.
     * @apiParam {String} grant_type Grant type that you will use (password).
     * @apiParam {String} client_id Is a static id.
     * @apiParam {String} client_secret Is a hash MD5 which is static.
     *
     * @apiSuccessExample Success-Response:
     *
     *   {
     *      "token_type": "bearer",
     *      "access_token": "10ebf3b24073bdce5fe0f6a2741e15ef6320fe95",
     *      "expires_in": 3600,
     *      "refresh_token": "d8e4799a6ab6ea96c941f46c506ad6dd9e6eba91"
     *   }
     * 
     * @apiHeaderExample {json} Header-Response:
     *     {
     *       "Content-Type": "application/json; charset=utf-8",
     *       "status": "200 OK"
     *     }
     *
     * @apiErrorExample Error-404:
     *     {
     *       "message": "The resource specified don't exist.",
     *     }
     *
     * @apiErrorExample Error-500:
     *     { 
     *       "OAuth2Error": "Invalid or missing grant_type parameter.",
     *     } 
     * @apiErrorExample Error-500:
     *     { 
     *       "OAuth2Error": "Invalid or missing client_id parameter.",
     *     } 
     * @apiErrorExample Error-500:
     *     { 
     *       "OAuth2Error": "Missing client_secret parameter.",
     *     } 
     * @apiErrorExample Error-500:
     *     { 
     *       "OAuth2Error": "Missing parameters email and password are required.",
     *     } 
*/

/**
     * @api {post} /oauth/token/ Return a access token by refresh_token
     * @apiVersion 0.1.0
     * @apiName GetTokenByRefreshToken
     * @apiGroup Auth
     *
     * @apiParam {String} refresh_token Hash that you got when called this endpoint with a password.
     * @apiParam {String} grant_type Grant type that you will use (refresh_token).
     * @apiParam {String} client_id Is a static id to this App.
     * @apiParam {String} client_secret Is a hash MD5 which is static.
     *
     * @apiSuccessExample Success-Response:
     *
     *   {
     *      "token_type": "bearer",
     *      "access_token": "82f2c801927cea02a8dc58524c14f05c026724b5",
     *      "expires_in": 3600,
     *      "refresh_token": "bd7721c89a1afba183010d6a8ac44cd3f5f47b6c"
     *   }
     * 
     * @apiHeaderExample {json} Header-Response:
     *     {
     *       "Content-Type": "application/json; charset=utf-8",
     *       "status": "200 OK"
     *     }
     *
     * @apiErrorExample Error-404:
     *{
     *  "message": "The resource specified don't exist.",
     * }
     *
     * @apiErrorExample Error-500:
     *     { 
     *       "OAuth2Error": "Invalid or missing grant_type parameter.",
     *     } 
     * @apiErrorExample Error-500:
     *     { 
     *       "OAuth2Error": "Invalid or missing client_id parameter.",
     *     } 
     * @apiErrorExample Error-500:
     *     { 
     *       "OAuth2Error": "Missing client_secret parameter.",
     *     } 
     * @apiErrorExample Error-500:
     *     { 
     *       "OAuth2Error": "Missing parameters email and password are required.",
     *     }
*/