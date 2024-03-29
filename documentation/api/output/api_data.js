define({ "api": [
  {
    "type": "post",
    "url": "/oauth/token/",
    "title": "Return a access token by password",
    "version": "0.1.0",
    "name": "GetTokenByPassword",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>The mail of user.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "password",
            "description": "<p>Password of user.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "grant_type",
            "description": "<p>Grant type that you will use (password).</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n   \"token_type\": \"bearer\",\n   \"access_token\": \"10ebf3b24073bdce5fe0f6a2741e15ef6320fe95\",\n   \"expires_in\": 3600,\n   \"refresh_token\": \"d8e4799a6ab6ea96c941f46c506ad6dd9e6eba91\"\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "examples": [
        {
          "title": "Header-Response:",
          "content": "{\n  \"Content-Type\": \"application/json; charset=utf-8\",\n  \"status\": \"200 OK\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-404:",
          "content": "{\n  \"message\": \"The resource specified don't exist.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{ \n  \"OAuth2Error\": \"Invalid or missing grant_type parameter.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{ \n  \"OAuth2Error\": \"Invalid or missing client_id parameter.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{ \n  \"OAuth2Error\": \"Missing client_secret parameter.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{ \n  \"OAuth2Error\": \"Missing parameters email and password are required.\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../../source/controllers/serverOAuth/doc/OAuth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/oauth/token/",
    "title": "Return a access token by refresh_token",
    "version": "0.1.0",
    "name": "GetTokenByRefreshToken",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "refresh_token",
            "description": "<p>Hash that you got when called this endpoint with a password.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "grant_type",
            "description": "<p>Grant type that you will use (refresh_token).</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n   \"token_type\": \"bearer\",\n   \"access_token\": \"82f2c801927cea02a8dc58524c14f05c026724b5\",\n   \"expires_in\": 3600,\n   \"refresh_token\": \"bd7721c89a1afba183010d6a8ac44cd3f5f47b6c\"\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "examples": [
        {
          "title": "Header-Response:",
          "content": "{\n  \"Content-Type\": \"application/json; charset=utf-8\",\n  \"status\": \"200 OK\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-404:",
          "content": "{\n \"message\": \"The resource specified don't exist.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{ \n  \"OAuth2Error\": \"Invalid or missing grant_type parameter.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{ \n  \"OAuth2Error\": \"Invalid or missing client_id parameter.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{ \n  \"OAuth2Error\": \"Missing client_secret parameter.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{ \n  \"OAuth2Error\": \"Missing parameters email and password are required.\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../../source/controllers/serverOAuth/doc/OAuth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/file/",
    "title": "Creates a file",
    "version": "1.0.0",
    "name": "CreateFile",
    "group": "file",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "content",
            "description": "<p>Content or description of the file.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Name or title of the file.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "user_creator",
            "description": "<p>User who uploads the file.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n   \"_id\": \"559795c64fc9bea00a464a71\",\n   \"content\": \"Libro Pmbok\",\n   \"name\": \"capitulo 2\",\n   \"user_creator\": \"sout\",\n   \"create_date\": \"2015-07-04T08:03:45.889Z\",\n   \"__v\": 0,\n   \"answer\": [],\n   \"status\": false\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "examples": [
        {
          "title": "Header-Request:",
          "content": "{\n  \"Authorization\": \"Bearer 2af428236a809a023e68ec543a61b9366da7b56f\",\n}",
          "type": "json"
        },
        {
          "title": "Header-Response:",
          "content": "{\n  \"Content-Type\": \"application/json; charset=utf-8\",\n  \"status\": \"201 Created\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-404:",
          "content": "{\n \"message\": \"The resource specified don't exist.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"The access token was not found.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"The access token provided has expired.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"Malformed auth header.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"Only one method may be used to authenticate at a time (Auth header, GET or POST).\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../../source/controllers/api/file.js",
    "groupTitle": "file"
  },
  {
    "type": "delete",
    "url": "/file/:id",
    "title": "Delete a specific File",
    "version": "1.0.0",
    "name": "DeleteFile",
    "group": "file",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>File to delete.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"msg\":\"File Successfully Deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "examples": [
        {
          "title": "Header-Request:",
          "content": "{\n  \"Authorization\": \"Bearer 2af428236a809a023e68ec543a61b9366da7b56f\",\n}",
          "type": "json"
        },
        {
          "title": "Header-Response:",
          "content": "{\n  \"Content-Type\": \"application/json; charset=utf-8\",\n  \"status\": \"200 OK\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-404:",
          "content": "{\n \"message\": \"The resource specified don't exist.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"The access token was not found.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"The access token provided has expired.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"Malformed auth header.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"Only one method may be used to authenticate at a time (Auth header, GET or POST).\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../../source/controllers/api/file.js",
    "groupTitle": "file"
  },
  {
    "type": "get",
    "url": "/file/:id",
    "title": "Gets a specific file",
    "version": "1.0.0",
    "name": "GetFile",
    "group": "file",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>File to look for.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " \n{\n   \"_id\": \"559795c64fc9bea00a464a71\",\n   \"content\": \"Libro Pmbok\",\n   \"name\": \"capitulo 2\",\n   \"user_creator\": \"sout\",\n   \"create_date\": \"2015-07-04T08:03:45.889Z\",\n   \"__v\": 0,\n   \"answer\": [],\n   \"status\": false\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "examples": [
        {
          "title": "Header-Request:",
          "content": "{\n  \"Authorization\": \"Bearer 2af428236a809a023e68ec543a61b9366da7b56f\",\n}",
          "type": "json"
        },
        {
          "title": "Header-Response:",
          "content": "{\n  \"Content-Type\": \"application/json; charset=utf-8\",\n  \"status\": \"200 OK\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-404:",
          "content": "{\n \"message\": \"The resource specified don't exist.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"The access token was not found.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"The access token provided has expired.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"Malformed auth header.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"Only one method may be used to authenticate at a time (Auth header, GET or POST).\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../../source/controllers/api/file.js",
    "groupTitle": "file"
  },
  {
    "type": "get",
    "url": "/file/",
    "title": "Return a list of files",
    "version": "1.0.0",
    "name": "GetFiles",
    "group": "file",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n[\n  {\n    \"_id\": \"559795074fc9bea00a464a70\",\n    \"content\": \"Clase ITIL Susana\",\n    \"name\": \"Diagrama clases Base\",\n    \"user_creator\": \"diego\",\n    \"create_date\": \"2015-07-04T08:03:45.889Z\",\n    \"__v\": 0,\n    \"answer\": [],\n    \"status\": false\n  },\n  {\n    \"_id\": \"559795c64fc9bea00a464a71\",\n    \"content\": \"Libro Pmbok\",\n    \"name\": \"capitulo 2\",\n    \"user_creator\": \"sout\",\n    \"create_date\": \"2015-07-04T08:03:45.889Z\",\n    \"__v\": 0,\n    \"answer\": [],\n    \"status\": false\n  }\n]",
          "type": "json"
        }
      ]
    },
    "header": {
      "examples": [
        {
          "title": "Header-Request:",
          "content": "{\n  \"Authorization\": \"Bearer 2af428236a809a023e68ec543a61b9366da7b56f\",\n}",
          "type": "json"
        },
        {
          "title": "Header-Response:",
          "content": "{\n  \"Content-Type\": \"application/json; charset=utf-8\",\n  \"status\": \"200 OK\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-404:",
          "content": "{\n \"message\": \"The resource specified don't exist.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"The access token was not found.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"The access token provided has expired.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"Malformed auth header.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"Only one method may be used to authenticate at a time (Auth header, GET or POST).\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../../source/controllers/api/file.js",
    "groupTitle": "file"
  },
  {
    "type": "get",
    "url": "/fileGroup/:idGroup",
    "title": "Gets all Files from a Group",
    "version": "1.0.0",
    "name": "GetGroupFiles",
    "group": "file",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Group from you want to reach the files.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " \n[\n  {\n    \"_id\": \"559795074fc9bea00a464a70\",\n    \"content\": \"Clase ITIL Susana\",\n    \"name\": \"Diagrama clases Base\",\n    \"user_creator\": \"diego\",\n    \"create_date\": \"2015-07-04T08:03:45.889Z\",\n    \"__v\": 0,\n    \"answer\": [],\n    \"status\": false\n  },\n  {\n    \"_id\": \"559795c64fc9bea00a464a71\",\n    \"content\": \"Libro Pmbok\",\n    \"name\": \"capitulo 2\",\n    \"user_creator\": \"sout\",\n    \"create_date\": \"2015-07-04T08:03:45.889Z\",\n    \"__v\": 0,\n    \"answer\": [],\n    \"status\": false\n  }\n]",
          "type": "json"
        }
      ]
    },
    "header": {
      "examples": [
        {
          "title": "Header-Request:",
          "content": "{\n  \"Authorization\": \"Bearer 2af428236a809a023e68ec543a61b9366da7b56f\",\n}",
          "type": "json"
        },
        {
          "title": "Header-Response:",
          "content": "{\n  \"Content-Type\": \"application/json; charset=utf-8\",\n  \"status\": \"200 OK\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-404:",
          "content": "{\n \"message\": \"The resource specified don't exist.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"The access token was not found.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"The access token provided has expired.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"Malformed auth header.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"Only one method may be used to authenticate at a time (Auth header, GET or POST).\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../../source/controllers/api/file.js",
    "groupTitle": "file"
  },
  {
    "type": "post",
    "url": "/file/",
    "title": "Updates a file",
    "version": "1.0.0",
    "name": "UpdateFile",
    "group": "file",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the file to update.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "content",
            "description": "<p>Content or description of the file.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Name or title of the file.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the file.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n   \"_id\": \"559795c64fc9bea00a464a71\",\n   \"content\": \"Libro Pmbok\",\n   \"name\": \"capitulo 2\",\n   \"user_creator\": \"sout\",\n   \"create_date\": \"2015-07-04T08:03:45.889Z\",\n   \"__v\": 0,\n   \"answer\": [],\n   \"status\": false\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "examples": [
        {
          "title": "Header-Request:",
          "content": "{\n  \"Authorization\": \"Bearer 2af428236a809a023e68ec543a61b9366da7b56f\",\n}",
          "type": "json"
        },
        {
          "title": "Header-Response:",
          "content": "{\n  \"Content-Type\": \"application/json; charset=utf-8\",\n  \"status\": \"201 Created\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-404:",
          "content": "{\n \"message\": \"The resource specified don't exist.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"The access token was not found.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"The access token provided has expired.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"Malformed auth header.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"Only one method may be used to authenticate at a time (Auth header, GET or POST).\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../../source/controllers/api/file.js",
    "groupTitle": "file"
  },
  {
    "type": "post",
    "url": "/group/",
    "title": "Creates a group",
    "version": "1.0.0",
    "name": "CreateGroup",
    "group": "group",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the group.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the group.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "url_image",
            "description": "<p>URL of the group profile.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "privileges",
            "description": "<p>Privileges of the group (personal, public, private).</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "administrators",
            "description": "<p>One or more administrators of the group.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n  \"_id\": \"559799468dcbb06a176de448\",\n  \"name\": \"Lobos\",     *   \n  \"description\": \"Gurpo de lobos aulladores\",\n  \"date_creation\": \"2015-07-04T08:27:08.748Z\",\n  \"url_image\": \"lorempixel.com/g/400/200\",\n  \"privileges\": \"public\",\n  \"__v\": 0,\n  \"file\": [],\n  \"image\": [],\n  \"post\": [],\n  \"administrators\": [\n    \"559786baa361ca280ffa15f0\"\n  ],\n  \"members\": [],\n  \"status\": true\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "examples": [
        {
          "title": "Header-Request:",
          "content": "{\n  \"Authorization\": \"Bearer 2af428236a809a023e68ec543a61b9366da7b56f\",\n}",
          "type": "json"
        },
        {
          "title": "Header-Response:",
          "content": "{\n  \"Content-Type\": \"application/json; charset=utf-8\",\n  \"status\": \"201 Created\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-404:",
          "content": "{\n \"message\": \"The resource specified don't exist.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"The access token was not found.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"The access token provided has expired.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"Malformed auth header.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"Only one method may be used to authenticate at a time (Auth header, GET or POST).\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../../source/controllers/api/group.js",
    "groupTitle": "group"
  },
  {
    "type": "delete",
    "url": "/group/:id",
    "title": "Delete a specific Group",
    "version": "1.0.0",
    "name": "DeleteGroup",
    "group": "group",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Group to delete.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"msg\":\"Group Successfully Deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "examples": [
        {
          "title": "Header-Request:",
          "content": "{\n  \"Authorization\": \"Bearer 2af428236a809a023e68ec543a61b9366da7b56f\",\n}",
          "type": "json"
        },
        {
          "title": "Header-Response:",
          "content": "{\n  \"Content-Type\": \"application/json; charset=utf-8\",\n  \"status\": \"200 OK\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-404:",
          "content": "{\n \"message\": \"The resource specified don't exist.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"The access token was not found.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"The access token provided has expired.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"Malformed auth header.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"Only one method may be used to authenticate at a time (Auth header, GET or POST).\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../../source/controllers/api/group.js",
    "groupTitle": "group"
  },
  {
    "type": "get",
    "url": "/groupUserBelongs/:idUser",
    "title": "Gets all the Groups where a User belongs",
    "version": "1.0.0",
    "name": "GetBelongUserGroups",
    "group": "group",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the User who belongs to those Groups.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n  \"_id\": \"559786bba361ca280ffa15f1\",\n  \"name\": \"my g-cloud\",\n  \"description\": \"My personal folder\",\n  \"date_creation\": \"2015-07-04T07:04:54.592Z\",\n  \"privileges\": \"personal\",\n  \"__v\": 0,\n  \"file\": [],\n  \"image\": [],\n  \"post\": [],\n  \"administrators\": [\n    \"559786baa361ca280ffa15f0\"\n  ],\n  \"members\": [],\n  \"status\": true\n},\n{\n  \"_id\": \"558c297bcb25211407129fac\",\n  \"name\": \"Ing 9A\",\n  \"description\": \"Grupo Ingenieria\",\n  \"date_creation\": \"2015-06-25T16:13:20.492Z\",\n  \"privileges\": \"Admin\",\n  \"url_image\": \"4g5f6d7s8a90fghrhgfh\",\n  \"__v\": 0,\n  \"file\": [],\n  \"image\": [],\n  \"post\": [],\n  \"administrators\": [],\n  \"members\": [],\n  \"status\": true\n},\n{\n  \"_id\": \"559799468dcbb06a176de448\",\n  \"name\": \"Lobos\",     *   \n  \"description\": \"Gurpo de lobos aulladores\",\n  \"date_creation\": \"2015-07-04T08:27:08.748Z\",\n  \"url_image\": \"lorempixel.com/g/400/200\",\n  \"privileges\": \"public\",\n  \"__v\": 0,\n  \"file\": [],\n  \"image\": [],\n  \"post\": [],\n  \"administrators\": [\n    \"559786baa361ca280ffa15f0\"\n  ],\n  \"members\": [],\n  \"status\": true\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "examples": [
        {
          "title": "Header-Request:",
          "content": "{\n  \"Authorization\": \"Bearer 2af428236a809a023e68ec543a61b9366da7b56f\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-404:",
          "content": "{\n \"message\": \"The resource specified don't exist.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"The access token was not found.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"The access token provided has expired.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"Malformed auth header.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"Only one method may be used to authenticate at a time (Auth header, GET or POST).\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../../source/controllers/api/group.js",
    "groupTitle": "group"
  },
  {
    "type": "get",
    "url": "/group/:id",
    "title": "Gets a specific group",
    "version": "1.0.0",
    "name": "GetGroup",
    "group": "group",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Group to look for.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n  \"_id\": \"559799468dcbb06a176de448\",\n  \"name\": \"Lobos\",     *   \n  \"description\": \"Gurpo de lobos aulladores\",\n  \"date_creation\": \"2015-07-04T08:27:08.748Z\",\n  \"url_image\": \"lorempixel.com/g/400/200\",\n  \"privileges\": \"public\",\n  \"__v\": 0,\n  \"file\": [],\n  \"image\": [],\n  \"post\": [],\n  \"administrators\": [\n    \"559786baa361ca280ffa15f0\"\n  ],\n  \"members\": [],\n  \"status\": true\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "examples": [
        {
          "title": "Header-Request:",
          "content": "{\n  \"Authorization\": \"Bearer 2af428236a809a023e68ec543a61b9366da7b56f\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-404:",
          "content": "{\n \"message\": \"The resource specified don't exist.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"The access token was not found.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"The access token provided has expired.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"Malformed auth header.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"Only one method may be used to authenticate at a time (Auth header, GET or POST).\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../../source/controllers/api/group.js",
    "groupTitle": "group"
  },
  {
    "type": "get",
    "url": "/group/",
    "title": "Return a list of groups",
    "version": "1.0.0",
    "name": "GetGroups",
    "group": "group",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n[\n   {\n     \"_id\": \"558c297bcb25211407129fac\",\n     \"name\": \"Ing 9A\",\n     \"description\": \"Grupo Ingenieria\",\n     \"date_creation\": \"2015-06-25T16:13:20.492Z\",\n     \"privileges\": \"Admin\",\n     \"url_image\": \"4g5f6d7s8a90fghrhgfh\",\n     \"__v\": 0,\n     \"file\": [],\n     \"image\": [],\n     \"post\": [],\n     \"administrators\": [],\n     \"members\": [],\n     \"status\": true\n   },\n   {\n     \"_id\": \"559775a37adfe1b40377a690\",\n     \"name\": \"Venta de Perritos\",\n     \"description\": \"Perritos de todas las razas\",\n     \"create_date\": \"2015-07-04T05:52:03.283Z\",\n     \"url_image\": \"1234567\",\n     \"privileges\": \"private\",\n     \"__v\": 0,\n     \"file\": [],\n     \"image\": [],\n     \"post\": [],\n     \"administrators\": [],\n     \"members\": [],\n     \"status\": true\n   },\n   {\n  \"_id\": \"559784231b993bfe0e8667b8\",\n  \"name\": \"my g-cloud\",\n  \"description\": \"My personal folder\",\n  \"date_creation\": \"2015-07-04T06:53:11.132Z\",\n  \"privileges\": \"personal\",\n  \"__v\": 0,\n  \"file\": [],\n  \"image\": [],\n  \"post\": [],\n  \"administrators\": [],\n  \"members\": [],\n     \"status\": true\n   },\n   {\n     \"_id\": \"559786bba361ca280ffa15f1\",\n     \"name\": \"my g-cloud\",\n     \"description\": \"My personal folder\",\n     \"date_creation\": \"2015-07-04T07:04:54.592Z\",\n     \"privileges\": \"personal\",\n     \"__v\": 0,\n     \"file\": [],\n     \"image\": [],\n     \"post\": [],\n     \"administrators\": [\n       \"559786baa361ca280ffa15f0\"\n     ],\n     \"members\": [],\n     \"status\": true\n   },\n   {\n     \"_id\": \"559799468dcbb06a176de448\",\n     \"name\": \"Lobos\",     *   \n     \"description\": \"Gurpo de lobos aulladores\",\n     \"date_creation\": \"2015-07-04T08:27:08.748Z\",\n     \"url_image\": \"lorempixel.com/g/400/200\",\n     \"privileges\": \"public\",\n     \"__v\": 0,\n     \"file\": [],\n     \"image\": [],\n     \"post\": [],\n     \"administrators\": [\n       \"559786baa361ca280ffa15f0\"\n     ],\n     \"members\": [],\n     \"status\": true\n   }\n]",
          "type": "json"
        }
      ]
    },
    "header": {
      "examples": [
        {
          "title": "Header-Request:",
          "content": "{\n  \"Authorization\": \"Bearer 2af428236a809a023e68ec543a61b9366da7b56f\",\n}",
          "type": "json"
        },
        {
          "title": "Header-Response:",
          "content": "{\n  \"Content-Type\": \"application/json; charset=utf-8\",\n  \"status\": \"200 OK\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-404:",
          "content": "{\n \"message\": \"The resource specified don't exist.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"The access token was not found.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"The access token provided has expired.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"Malformed auth header.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"Only one method may be used to authenticate at a time (Auth header, GET or POST).\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../../source/controllers/api/group.js",
    "groupTitle": "group"
  },
  {
    "type": "get",
    "url": "/personalUserGroup/:idUser",
    "title": "Gets the personal Group of a User.",
    "version": "1.0.0",
    "name": "GetPersonalGroup",
    "group": "group",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the User.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n  \"_id\": \"559786bba361ca280ffa15f1\",\n  \"name\": \"my g-cloud\",\n  \"description\": \"My personal folder\",\n  \"date_creation\": \"2015-07-04T07:04:54.592Z\",\n  \"privileges\": \"personal\",\n  \"__v\": 0,\n  \"file\": [],\n  \"image\": [],\n  \"post\": [],\n  \"administrators\": [\n    \"559786baa361ca280ffa15f0\"\n  ],\n  \"members\": [],\n  \"status\": true\n},",
          "type": "json"
        }
      ]
    },
    "header": {
      "examples": [
        {
          "title": "Header-Request:",
          "content": "{\n  \"Authorization\": \"Bearer 2af428236a809a023e68ec543a61b9366da7b56f\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-404:",
          "content": "{\n \"message\": \"The resource specified don't exist.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"The access token was not found.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"The access token provided has expired.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"Malformed auth header.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"Only one method may be used to authenticate at a time (Auth header, GET or POST).\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../../source/controllers/api/group.js",
    "groupTitle": "group"
  },
  {
    "type": "get",
    "url": "/groupUser/:idUser",
    "title": "Gets all the Groups created by a User",
    "version": "1.0.0",
    "name": "GetUserGroups",
    "group": "group",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>User from you want to reach the Groups.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n  \"_id\": \"559786bba361ca280ffa15f1\",\n  \"name\": \"my g-cloud\",\n  \"description\": \"My personal folder\",\n  \"date_creation\": \"2015-07-04T07:04:54.592Z\",\n  \"privileges\": \"personal\",\n  \"__v\": 0,\n  \"file\": [],\n  \"image\": [],\n  \"post\": [],\n  \"administrators\": [\n    \"559786baa361ca280ffa15f0\"\n  ],\n  \"members\": [],\n  \"status\": true\n},\n{\n  \"_id\": \"559799468dcbb06a176de448\",\n  \"name\": \"Lobos\",     *   \n  \"description\": \"Gurpo de lobos aulladores\",\n  \"date_creation\": \"2015-07-04T08:27:08.748Z\",\n  \"url_image\": \"lorempixel.com/g/400/200\",\n  \"privileges\": \"public\",\n  \"__v\": 0,\n  \"file\": [],\n  \"image\": [],\n  \"post\": [],\n  \"administrators\": [\n    \"559786baa361ca280ffa15f0\"\n  ],\n  \"members\": [],\n  \"status\": true\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "examples": [
        {
          "title": "Header-Request:",
          "content": "{\n  \"Authorization\": \"Bearer 2af428236a809a023e68ec543a61b9366da7b56f\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-404:",
          "content": "{\n \"message\": \"The resource specified don't exist.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"The access token was not found.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"The access token provided has expired.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"Malformed auth header.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"Only one method may be used to authenticate at a time (Auth header, GET or POST).\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../../source/controllers/api/group.js",
    "groupTitle": "group"
  },
  {
    "type": "put",
    "url": "/group/",
    "title": "Updates a group",
    "version": "1.0.0",
    "name": "UpdateGroup",
    "group": "group",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the group to update.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the group.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the group.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "url_image",
            "description": "<p>URL of the group profile.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the group.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "privileges",
            "description": "<p>Privileges of the group (personal, public, private).</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n  \"_id\": \"559799468dcbb06a176de448\",\n  \"name\": \"Lobos\",     *   \n  \"description\": \"Gurpo de lobos aulladores\",\n  \"date_creation\": \"2015-07-04T08:27:08.748Z\",\n  \"url_image\": \"lorempixel.com/g/400/200\",\n  \"privileges\": \"public\",\n  \"__v\": 0,\n  \"file\": [],\n  \"image\": [],\n  \"post\": [],\n  \"administrators\": [\n    \"559786baa361ca280ffa15f0\"\n  ],\n  \"members\": [],\n  \"status\": true\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "examples": [
        {
          "title": "Header-Request:",
          "content": "{\n  \"Authorization\": \"Bearer 2af428236a809a023e68ec543a61b9366da7b56f\",\n}",
          "type": "json"
        },
        {
          "title": "Header-Response:",
          "content": "{\n  \"Content-Type\": \"application/json; charset=utf-8\",\n  \"status\": \"201 Created\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-404:",
          "content": "{\n \"message\": \"The resource specified don't exist.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"The access token was not found.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"The access token provided has expired.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"Malformed auth header.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"Only one method may be used to authenticate at a time (Auth header, GET or POST).\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../../source/controllers/api/group.js",
    "groupTitle": "group"
  },
  {
    "type": "post",
    "url": "/image/",
    "title": "Creates a image",
    "version": "1.0.0",
    "name": "CreateImage",
    "group": "image",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "content",
            "description": "<p>Content or description of the image.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Name or title of the image.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "user_creator",
            "description": "<p>User who uploads the image.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n  \"_id\": \"559793914fc9bea00a464a6d\",\n  \"content\": \"Work In Progress\",\n  \"name\": \"Grafica \",\n  \"user_creator\": \"987654jhgf76543gfd\",\n  \"create_date\": \"2015-07-04T08:03:45.887Z\",\n  \"__v\": 0,\n  \"answer\": [],\n  \"status\": true\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "examples": [
        {
          "title": "Header-Request:",
          "content": "{\n  \"Authorization\": \"Bearer 2af428236a809a023e68ec543a61b9366da7b56f\",\n}",
          "type": "json"
        },
        {
          "title": "Header-Response:",
          "content": "{\n  \"Content-Type\": \"application/json; charset=utf-8\",\n  \"status\": \"201 Created\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-404:",
          "content": "{\n \"message\": \"The resource specified don't exist.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"The access token was not found.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"The access token provided has expired.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"Malformed auth header.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"Only one method may be used to authenticate at a time (Auth header, GET or POST).\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../../source/controllers/api/image.js",
    "groupTitle": "image"
  },
  {
    "type": "post",
    "url": "/image/",
    "title": "Creates a image",
    "version": "1.0.0",
    "name": "CreateImage",
    "group": "image",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the image to update.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "content",
            "description": "<p>Content or description of the image.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Name or title of the image.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the image.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n  \"_id\": \"559793914fc9bea00a464a6d\",\n  \"content\": \"Work In Progress\",\n  \"name\": \"Grafica \",\n  \"user_creator\": \"987654jhgf76543gfd\",\n  \"create_date\": \"2015-07-04T08:03:45.887Z\",\n  \"__v\": 0,\n  \"answer\": [],\n  \"status\": true\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "examples": [
        {
          "title": "Header-Request:",
          "content": "{\n  \"Authorization\": \"Bearer 2af428236a809a023e68ec543a61b9366da7b56f\",\n}",
          "type": "json"
        },
        {
          "title": "Header-Response:",
          "content": "{\n  \"Content-Type\": \"application/json; charset=utf-8\",\n  \"status\": \"201 Created\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-404:",
          "content": "{\n \"message\": \"The resource specified don't exist.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"The access token was not found.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"The access token provided has expired.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"Malformed auth header.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"Only one method may be used to authenticate at a time (Auth header, GET or POST).\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../../source/controllers/api/image.js",
    "groupTitle": "image"
  },
  {
    "type": "delete",
    "url": "/image/:id",
    "title": "Delete a specific Image",
    "version": "1.0.0",
    "name": "DeleteImage",
    "group": "image",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Image to delete.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"msg\":\"Image Successfully Deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "examples": [
        {
          "title": "Header-Request:",
          "content": "{\n  \"Authorization\": \"Bearer 2af428236a809a023e68ec543a61b9366da7b56f\",\n}",
          "type": "json"
        },
        {
          "title": "Header-Response:",
          "content": "{\n  \"Content-Type\": \"application/json; charset=utf-8\",\n  \"status\": \"200 OK\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-404:",
          "content": "{\n \"message\": \"The resource specified don't exist.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"The access token was not found.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"The access token provided has expired.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"Malformed auth header.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"Only one method may be used to authenticate at a time (Auth header, GET or POST).\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../../source/controllers/api/image.js",
    "groupTitle": "image"
  },
  {
    "type": "get",
    "url": "/imageGroup/:idGroup",
    "title": "Gets all Images from a Group",
    "version": "1.0.0",
    "name": "GetGroupImages",
    "group": "image",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Group from you want to reach the images.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n  \"_id\": \"559793914fc9bea00a464a6d\",\n  \"content\": \"Work In Progress\",\n  \"name\": \"Grafica \",\n  \"user_creator\": \"987654jhgf76543gfd\",\n  \"create_date\": \"2015-07-04T08:03:45.887Z\",\n  \"__v\": 0,\n  \"answer\": [],\n  \"status\": true\n},\n{\n  \"_id\": \"559793cc4fc9bea00a464a6e\",\n  \"content\": \"Homework de Telecomunicaciones\",\n  \"name\": \"Apuntes del Pizarron\",\n  \"user_creator\": \"987654jhgf76543gfd\",\n  \"create_date\": \"2015-07-04T08:03:45.887Z\",\n  \"__v\": 0,\n  \"answer\": [],\n  \"status\": false\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "examples": [
        {
          "title": "Header-Request:",
          "content": "{\n  \"Authorization\": \"Bearer 2af428236a809a023e68ec543a61b9366da7b56f\",\n}",
          "type": "json"
        },
        {
          "title": "Header-Response:",
          "content": "{\n  \"Content-Type\": \"application/json; charset=utf-8\",\n  \"status\": \"200 OK\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-404:",
          "content": "{\n \"message\": \"The resource specified don't exist.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"The access token was not found.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"The access token provided has expired.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"Malformed auth header.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"Only one method may be used to authenticate at a time (Auth header, GET or POST).\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../../source/controllers/api/image.js",
    "groupTitle": "image"
  },
  {
    "type": "get",
    "url": "/image/:id",
    "title": "Gets a specific image",
    "version": "1.0.0",
    "name": "GetImage",
    "group": "image",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Image to look for.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " \n{\n  \"_id\": \"559793914fc9bea00a464a6d\",\n  \"content\": \"Work In Progress\",\n  \"name\": \"Grafica \",\n  \"user_creator\": \"987654jhgf76543gfd\",\n  \"create_date\": \"2015-07-04T08:03:45.887Z\",\n  \"__v\": 0,\n  \"answer\": [],\n  \"status\": true\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "examples": [
        {
          "title": "Header-Request:",
          "content": "{\n  \"Authorization\": \"Bearer 2af428236a809a023e68ec543a61b9366da7b56f\",\n}",
          "type": "json"
        },
        {
          "title": "Header-Response:",
          "content": "{\n  \"Content-Type\": \"application/json; charset=utf-8\",\n  \"status\": \"200 OK\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-404:",
          "content": "{\n \"message\": \"The resource specified don't exist.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"The access token was not found.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"The access token provided has expired.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"Malformed auth header.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"Only one method may be used to authenticate at a time (Auth header, GET or POST).\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../../source/controllers/api/image.js",
    "groupTitle": "image"
  },
  {
    "type": "get",
    "url": "/image/",
    "title": "Return a list of images",
    "version": "1.0.0",
    "name": "GetImages",
    "group": "image",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n[\n   {\n     \"_id\": \"559793914fc9bea00a464a6d\",\n     \"content\": \"Work In Progress\",\n     \"name\": \"Grafica \",\n     \"user_creator\": \"987654jhgf76543gfd\",\n     \"create_date\": \"2015-07-04T08:03:45.887Z\",\n     \"__v\": 0,\n     \"answer\": [],\n     \"status\": true\n   },\n   {\n     \"_id\": \"559793cc4fc9bea00a464a6e\",\n     \"content\": \"Homework de Telecomunicaciones\",\n     \"name\": \"Apuntes del Pizarron\",\n     \"user_creator\": \"987654jhgf76543gfd\",\n     \"create_date\": \"2015-07-04T08:03:45.887Z\",\n     \"__v\": 0,\n     \"answer\": [],\n     \"status\": false\n   }\n]",
          "type": "json"
        }
      ]
    },
    "header": {
      "examples": [
        {
          "title": "Header-Request:",
          "content": "{\n  \"Authorization\": \"Bearer 2af428236a809a023e68ec543a61b9366da7b56f\",\n}",
          "type": "json"
        },
        {
          "title": "Header-Response:",
          "content": "{\n  \"Content-Type\": \"application/json; charset=utf-8\",\n  \"status\": \"200 OK\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-404:",
          "content": "{\n \"message\": \"The resource specified don't exist.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"The access token was not found.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"The access token provided has expired.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"Malformed auth header.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"Only one method may be used to authenticate at a time (Auth header, GET or POST).\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../../source/controllers/api/image.js",
    "groupTitle": "image"
  },
  {
    "type": "post",
    "url": "/invitation/",
    "title": "Creates a invitation",
    "version": "1.0.0",
    "name": "CreateInvitation",
    "group": "invitation",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id_group",
            "description": "<p>Id of the group that will be invited.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "sender_user",
            "description": "<p>Id of the user that sends the invitation.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "invited_user",
            "description": "<p>Id of the user to be invited.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n  \"id_group\": \"34567dfghjk63292\",\n  \"sender_user\": \"559786baa361ca280ffa15f0\",\n  \"invited_user\": \"01011010101077h\",\n  \"create_date\": \"2015-07-19T19:49:22.298Z\",\n  \"_id\": \"55abff4227121c1016cd6b6c\",\n  \"status\": \"En espera\"\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "examples": [
        {
          "title": "Header-Request:",
          "content": "{\n  \"Authorization\": \"Bearer 2af428236a809a023e68ec543a61b9366da7b56f\",\n}",
          "type": "json"
        },
        {
          "title": "Header-Response:",
          "content": "{\n  \"Content-Type\": \"application/json; charset=utf-8\",\n  \"status\": \"201 Created\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-404:",
          "content": "{\n \"message\": \"The resource specified don't exist.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"The access token was not found.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"The access token provided has expired.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"Malformed auth header.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"Only one method may be used to authenticate at a time (Auth header, GET or POST).\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../../source/controllers/api/invitation.js",
    "groupTitle": "invitation"
  },
  {
    "type": "delete",
    "url": "/invitation/:id",
    "title": "Delete a specific invitation",
    "version": "1.0.0",
    "name": "DeleteInvitation",
    "group": "invitation",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Invitation to delete.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"msg\":\"Invitation Successfully Deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "examples": [
        {
          "title": "Header-Request:",
          "content": "{\n  \"Authorization\": \"Bearer 2af428236a809a023e68ec543a61b9366da7b56f\",\n}",
          "type": "json"
        },
        {
          "title": "Header-Response:",
          "content": "{\n  \"Content-Type\": \"application/json; charset=utf-8\",\n  \"status\": \"200 OK\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-404:",
          "content": "{\n \"message\": \"The resource specified don't exist.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"The access token was not found.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"The access token provided has expired.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"Malformed auth header.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"Only one method may be used to authenticate at a time (Auth header, GET or POST).\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../../source/controllers/api/invitation.js",
    "groupTitle": "invitation"
  },
  {
    "type": "get",
    "url": "/invitation/:id",
    "title": "Gets a specific invitation",
    "version": "1.0.0",
    "name": "GetInvitation",
    "group": "invitation",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Invitation to look for.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n\n{\n  \"_id\": \"55abff4227121c1016cd6b6c\",\n  \"id_group\": \"34567dfghjk63292\",\n  \"sender_user\": \"559786baa361ca280ffa15f0\",\n  \"invited_user\": \"01011010101077h\",\n  \"create_date\": \"2015-07-19T19:49:22.298Z\",\n  \"__v\": 0,\n  \"status\": \"En espera\"\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "examples": [
        {
          "title": "Header-Request:",
          "content": "{\n  \"Authorization\": \"Bearer 2af428236a809a023e68ec543a61b9366da7b56f\",\n}",
          "type": "json"
        },
        {
          "title": "Header-Response:",
          "content": "{\n  \"Content-Type\": \"application/json; charset=utf-8\",\n  \"status\": \"200 OK\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-404:",
          "content": "{\n \"message\": \"The resource specified don't exist.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"The access token was not found.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"The access token provided has expired.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"Malformed auth header.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"Only one method may be used to authenticate at a time (Auth header, GET or POST).\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../../source/controllers/api/invitation.js",
    "groupTitle": "invitation"
  },
  {
    "type": "get",
    "url": "/invitation/",
    "title": "Return a list of invitations",
    "version": "1.0.0",
    "name": "GetInvitations",
    "group": "invitation",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n  {\n     \"_id\": \"55abff4227121c1016cd6b6c\",\n     \"id_group\": \"34567dfghjk63292\",\n     \"sender_user\": \"559786baa361ca280ffa15f0\",\n     \"invited_user\": \"01011010101077h\",\n     \"create_date\": \"2015-07-19T19:49:22.298Z\",\n     \"__v\": 0,\n     \"status\": \"En espera\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "header": {
      "examples": [
        {
          "title": "Header-Request:",
          "content": "{\n  \"Authorization\": \"Bearer 2af428236a809a023e68ec543a61b9366da7b56f\",\n}",
          "type": "json"
        },
        {
          "title": "Header-Response:",
          "content": "{\n  \"Content-Type\": \"application/json; charset=utf-8\",\n  \"status\": \"200 OK\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-404:",
          "content": "{\n \"message\": \"The resource specified don't exist.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"The access token was not found.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"The access token provided has expired.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"Malformed auth header.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"Only one method may be used to authenticate at a time (Auth header, GET or POST).\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../../source/controllers/api/invitation.js",
    "groupTitle": "invitation"
  },
  {
    "type": "get",
    "url": "/invitation/",
    "title": "Gets invitations of one user",
    "version": "1.0.0",
    "name": "GetUserInvitations",
    "group": "invitation",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id_user",
            "description": "<p>Id from user in session.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n\n{\n  \"_id\": \"55abff4227121c1016cd6b6c\",\n  \"id_group\": \"34567dfghjk63292\",\n  \"sender_user\": \"559786baa361ca280ffa15f0\",\n  \"invited_user\": \"01011010101077h\",\n  \"create_date\": \"2015-07-19T19:49:22.298Z\",\n  \"__v\": 0,\n  \"status\": \"En espera\"\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "examples": [
        {
          "title": "Header-Request:",
          "content": "{\n  \"Authorization\": \"Bearer 2af428236a809a023e68ec543a61b9366da7b56f\",\n}",
          "type": "json"
        },
        {
          "title": "Header-Response:",
          "content": "{\n  \"Content-Type\": \"application/json; charset=utf-8\",\n  \"status\": \"200 OK\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-404:",
          "content": "{\n \"message\": \"The resource specified don't exist.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"The access token was not found.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"The access token provided has expired.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"Malformed auth header.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"Only one method may be used to authenticate at a time (Auth header, GET or POST).\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../../source/controllers/api/invitation.js",
    "groupTitle": "invitation"
  },
  {
    "type": "post",
    "url": "/post/",
    "title": "Creates a post",
    "version": "1.0.0",
    "name": "CreatePost",
    "group": "post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "content",
            "description": "<p>Content of the post.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "user_creator",
            "description": "<p>User who writes the post.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n   \"_id\": \"55978ea34e9fbbc40c6ddb7a\",\n   \"content\": \"Hola chicos, recuerden que mañana hay examen de Hilario\",\n   \"user_creator\": \"345678fghjkty\",\n   \"create_date\": \"2015-07-04T07:40:09.247Z\",\n   \"__v\": 0,\n   \"answers\": [],\n   \"status\": true\n }",
          "type": "json"
        }
      ]
    },
    "header": {
      "examples": [
        {
          "title": "Header-Request:",
          "content": "{\n  \"Authorization\": \"Bearer 2af428236a809a023e68ec543a61b9366da7b56f\",\n}",
          "type": "json"
        },
        {
          "title": "Header-Response:",
          "content": "{\n  \"Content-Type\": \"application/json; charset=utf-8\",\n  \"status\": \"201 Created\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-404:",
          "content": "{\n \"message\": \"The resource specified don't exist.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"The access token was not found.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"The access token provided has expired.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"Malformed auth header.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"Only one method may be used to authenticate at a time (Auth header, GET or POST).\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../../source/controllers/api/post.js",
    "groupTitle": "post"
  },
  {
    "type": "delete",
    "url": "/post/:id",
    "title": "Delete a specific Post",
    "version": "1.0.0",
    "name": "DeletePost",
    "group": "post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Post to delete.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"msg\":\"Post Successfully Deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "examples": [
        {
          "title": "Header-Request:",
          "content": "{\n  \"Authorization\": \"Bearer 2af428236a809a023e68ec543a61b9366da7b56f\",\n}",
          "type": "json"
        },
        {
          "title": "Header-Response:",
          "content": "{\n  \"Content-Type\": \"application/json; charset=utf-8\",\n  \"status\": \"200 OK\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-404:",
          "content": "{\n \"message\": \"The resource specified don't exist.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"The access token was not found.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"The access token provided has expired.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"Malformed auth header.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"Only one method may be used to authenticate at a time (Auth header, GET or POST).\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../../source/controllers/api/post.js",
    "groupTitle": "post"
  },
  {
    "type": "get",
    "url": "/postGroup/:idGroup",
    "title": "Gets all Posts from a Group",
    "version": "1.0.0",
    "name": "GetGroupPosts",
    "group": "post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Group from you want to reach the posts.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  \n{\n  \"_id\": \"55978ea34e9fbbc40c6ddb7a\",\n  \"content\": \"Hola chicos, recuerden que mañana hay examen de Hilario\",\n  \"user_creator\": \"345678fghjkty\",\n  \"create_date\": \"2015-07-04T07:40:09.247Z\",\n  \"__v\": 0,\n  \"answers\": [],\n  \"status\": true\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "examples": [
        {
          "title": "Header-Request:",
          "content": "{\n  \"Authorization\": \"Bearer 2af428236a809a023e68ec543a61b9366da7b56f\",\n}",
          "type": "json"
        },
        {
          "title": "Header-Response:",
          "content": "{\n  \"Content-Type\": \"application/json; charset=utf-8\",\n  \"status\": \"200 OK\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-404:",
          "content": "{\n \"message\": \"The resource specified don't exist.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"The access token was not found.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"The access token provided has expired.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"Malformed auth header.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"Only one method may be used to authenticate at a time (Auth header, GET or POST).\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../../source/controllers/api/post.js",
    "groupTitle": "post"
  },
  {
    "type": "get",
    "url": "/post/:id",
    "title": "Gets a specific post",
    "version": "1.0.0",
    "name": "GetPost",
    "group": "post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Post to look for.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  \n{\n  \"_id\": \"55978ea34e9fbbc40c6ddb7a\",\n  \"content\": \"Hola chicos, recuerden que mañana hay examen de Hilario\",\n  \"user_creator\": \"345678fghjkty\",\n  \"create_date\": \"2015-07-04T07:40:09.247Z\",\n  \"__v\": 0,\n  \"answers\": [],\n  \"status\": true\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "examples": [
        {
          "title": "Header-Request:",
          "content": "{\n  \"Authorization\": \"Bearer 2af428236a809a023e68ec543a61b9366da7b56f\",\n}",
          "type": "json"
        },
        {
          "title": "Header-Response:",
          "content": "{\n  \"Content-Type\": \"application/json; charset=utf-8\",\n  \"status\": \"200 OK\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-404:",
          "content": "{\n \"message\": \"The resource specified don't exist.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"The access token was not found.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"The access token provided has expired.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"Malformed auth header.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"Only one method may be used to authenticate at a time (Auth header, GET or POST).\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../../source/controllers/api/post.js",
    "groupTitle": "post"
  },
  {
    "type": "get",
    "url": "/post/",
    "title": "Return a list of posts",
    "version": "1.0.0",
    "name": "GetPosts",
    "group": "post",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n  {\n    \"_id\": \"55978ea34e9fbbc40c6ddb7a\",\n    \"content\": \"Hola chicos, recuerden que mañana hay examen de Hilario\",\n    \"user_creator\": \"345678fghjkty\",\n    \"create_date\": \"2015-07-04T07:40:09.247Z\",\n    \"__v\": 0,\n    \"answers\": [],\n    \"status\": true\n  }\n]",
          "type": "json"
        }
      ]
    },
    "header": {
      "examples": [
        {
          "title": "Header-Request:",
          "content": "{\n  \"Authorization\": \"Bearer 2af428236a809a023e68ec543a61b9366da7b56f\",\n}",
          "type": "json"
        },
        {
          "title": "Header-Response:",
          "content": "{\n  \"Content-Type\": \"application/json; charset=utf-8\",\n  \"status\": \"200 OK\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-404:",
          "content": "{\n \"message\": \"The resource specified don't exist.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"The access token was not found.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"The access token provided has expired.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"Malformed auth header.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"Only one method may be used to authenticate at a time (Auth header, GET or POST).\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../../source/controllers/api/post.js",
    "groupTitle": "post"
  },
  {
    "type": "put",
    "url": "/post/",
    "title": "Updates a post",
    "version": "1.0.0",
    "name": "UpdatePosts",
    "group": "post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the post to update.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "content",
            "description": "<p>Content of the post.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "status",
            "description": "<p>Status from the post.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n   \"_id\": \"55978ea34e9fbbc40c6ddb7a\",\n   \"content\": \"Hola chicos, recuerden que mañana hay examen de Hilario\",\n   \"user_creator\": \"345678fghjkty\",\n   \"create_date\": \"2015-07-04T07:40:09.247Z\",\n   \"__v\": 0,\n   \"answers\": [],\n   \"status\": true\n }",
          "type": "json"
        }
      ]
    },
    "header": {
      "examples": [
        {
          "title": "Header-Request:",
          "content": "{\n  \"Authorization\": \"Bearer 2af428236a809a023e68ec543a61b9366da7b56f\",\n}",
          "type": "json"
        },
        {
          "title": "Header-Response:",
          "content": "{\n  \"Content-Type\": \"application/json; charset=utf-8\",\n  \"status\": \"201 Created\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-404:",
          "content": "{\n \"message\": \"The resource specified don't exist.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"The access token was not found.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"The access token provided has expired.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"Malformed auth header.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"Only one method may be used to authenticate at a time (Auth header, GET or POST).\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../../source/controllers/api/post.js",
    "groupTitle": "post"
  },
  {
    "type": "post",
    "url": "/user/",
    "title": "Creates a user",
    "version": "1.0.0",
    "name": "CreateUsers",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id_social_network",
            "description": "<p>Id generated by the user's social network.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>Email address to log in, it is used as a username.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "password",
            "description": "<p>Password to log into the app.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Real name from the user.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "last_name",
            "description": "<p>Lastname(s) from the user.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>number</p> ",
            "optional": false,
            "field": "age",
            "description": "<p>Age from the user.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "sex",
            "description": "<p>Sex from the user.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "phone",
            "description": "<p>Telephone number from the user.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "state",
            "description": "<p>State where the user lives.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "city",
            "description": "<p>City where the user lives.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "url_image",
            "description": "<p>Url of the profile picture from the user.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"_id\": \"559784231b993bfe0e8667b7\",\n    \"id_social_network\": \"56789abcdefgrtyui\",\n    \"email\": \"angel@mail.com\",\n    \"password\": \"123abcd\",\n    \"name\": \"Angel David\",\n    \"last_name\": \"Lagunas\",\n    \"age\": 21,\n    \"sex\": \"Masculino\",\n    \"phone\": \"777123456\",\n    \"state\": \"Morelos\",\n    \"city\": \"Temixco\",\n    \"date_registry\": \"2015-07-04T06:53:11.132Z\",\n    \"url_image\": \"http://lorempixel.com/g/400/200/\",\n    \"__v\": 1,\n    \"groups_created\": [\n  {\n    \"status\": true,\n    \"members\": [],\n    \"administrators\": [],\n    \"post\": [],\n    \"image\": [],\n    \"file\": [],\n    \"_id\": \"559784231b993bfe0e8667b8\",\n    \"privileges\": \"personal\",\n    \"date_creation\": \"2015-07-04T06:53:11.132Z\",\n     \"description\": \"My personal folder\",\n     \"name\": \"my g-cloud\",\n     \"__v\": 0\n   }\n ],\n \"groups\": [],\n \"status\": true\n},",
          "type": "json"
        }
      ]
    },
    "header": {
      "examples": [
        {
          "title": "Header-Request:",
          "content": "{\n  \"Authorization\": \"Bearer 2af428236a809a023e68ec543a61b9366da7b56f\",\n}",
          "type": "json"
        },
        {
          "title": "Header-Response:",
          "content": "{\n  \"Content-Type\": \"application/json; charset=utf-8\",\n  \"status\": \"201 Created\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-404:",
          "content": "{\n \"message\": \"The resource specified don't exist.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"The access token was not found.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"The access token provided has expired.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"Malformed auth header.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"Only one method may be used to authenticate at a time (Auth header, GET or POST).\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../../source/controllers/api/user.js",
    "groupTitle": "user"
  },
  {
    "type": "delete",
    "url": "/user/:id",
    "title": "Delete a specific user",
    "version": "1.0.0",
    "name": "DeleteUser",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>User to delete.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"msg\":\"User Successfully Deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "examples": [
        {
          "title": "Header-Request:",
          "content": "{\n  \"Authorization\": \"Bearer 2af428236a809a023e68ec543a61b9366da7b56f\",\n}",
          "type": "json"
        },
        {
          "title": "Header-Response:",
          "content": "{\n  \"Content-Type\": \"application/json; charset=utf-8\",\n  \"status\": \"200 OK\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-404:",
          "content": "{\n \"message\": \"The resource specified don't exist.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"The access token was not found.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"The access token provided has expired.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"Malformed auth header.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"Only one method may be used to authenticate at a time (Auth header, GET or POST).\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../../source/controllers/api/user.js",
    "groupTitle": "user"
  },
  {
    "type": "get",
    "url": "/user/:id",
    "title": "Gets a specific user",
    "version": "1.0.0",
    "name": "GetUser",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>User to look for.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   \n[\n    {\n      \"_id\": \"559784231b993bfe0e8667b7\",\n      \"id_social_network\": \"56789abcdefgrtyui\",\n      \"email\": \"angel@mail.com\",\n      \"password\": \"123abcd\",\n      \"name\": \"Angel David\",\n      \"last_name\": \"Lagunas\",\n      \"age\": 21,\n      \"sex\": \"Masculino\",\n      \"phone\": \"777123456\",\n      \"state\": \"Morelos\",\n      \"city\": \"Temixco\",\n      \"date_registry\": \"2015-07-04T06:53:11.132Z\",\n      \"url_image\": \"http://lorempixel.com/g/400/200/\",\n      \"__v\": 1,\n      \"groups_created\": [\n        {\n          \"status\": true,\n          \"members\": [],\n          \"administrators\": [],\n          \"post\": [],\n          \"image\": [],\n          \"file\": [],\n          \"_id\": \"559784231b993bfe0e8667b8\",\n          \"privileges\": \"personal\",\n          \"date_creation\": \"2015-07-04T06:53:11.132Z\",\n          \"description\": \"My personal folder\",\n          \"name\": \"my g-cloud\",\n          \"__v\": 0\n        }\n      ],\n      \"groups\": [],\n      \"status\": true\n    },",
          "type": "json"
        }
      ]
    },
    "header": {
      "examples": [
        {
          "title": "Header-Request:",
          "content": "{\n  \"Authorization\": \"Bearer 2af428236a809a023e68ec543a61b9366da7b56f\",\n}",
          "type": "json"
        },
        {
          "title": "Header-Response:",
          "content": "{\n  \"Content-Type\": \"application/json; charset=utf-8\",\n  \"status\": \"200 OK\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-404:",
          "content": "{\n \"message\": \"The resource specified don't exist.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"The access token was not found.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"The access token provided has expired.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"Malformed auth header.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"Only one method may be used to authenticate at a time (Auth header, GET or POST).\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../../source/controllers/api/user.js",
    "groupTitle": "user"
  },
  {
    "type": "get",
    "url": "/user/",
    "title": "Return a list of users",
    "version": "1.0.0",
    "name": "GetUsers",
    "group": "user",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n[\n    {\n      \"_id\": \"559784231b993bfe0e8667b7\",\n      \"id_social_network\": \"56789abcdefgrtyui\",\n      \"email\": \"angel@mail.com\",\n      \"password\": \"123abcd\",\n      \"name\": \"Angel David\",\n      \"last_name\": \"Lagunas\",\n      \"age\": 21,\n      \"sex\": \"Masculino\",\n      \"phone\": \"777123456\",\n      \"state\": \"Morelos\",\n      \"city\": \"Temixco\",\n      \"date_registry\": \"2015-07-04T06:53:11.132Z\",\n      \"url_image\": \"http://lorempixel.com/g/400/200/\",\n      \"__v\": 1,\n      \"groups_created\": [\n        {\n          \"status\": true,\n          \"members\": [],\n          \"administrators\": [],\n          \"post\": [],\n          \"image\": [],\n          \"file\": [],\n          \"_id\": \"559784231b993bfe0e8667b8\",\n          \"privileges\": \"personal\",\n          \"date_creation\": \"2015-07-04T06:53:11.132Z\",\n          \"description\": \"My personal folder\",\n          \"name\": \"my g-cloud\",\n          \"__v\": 0\n        }\n      ],\n      \"groups\": [],\n      \"status\": true\n    },\n    {\n      \"_id\": \"559786baa361ca280ffa15f0\",\n      \"id_social_network\": \"56789abcdefgrtyui\",\n      \"email\": \"angel@mail.com.mx\",\n      \"password\": \"123abcd\",\n      \"name\": \"Angel David\",\n      \"last_name\": \"Lagunas\",\n    \"age\": 21,\n    \"sex\": \"Masculino\",\n    \"phone\": \"777123456\",\n    \"state\": \"Morelos\",\n    \"city\": \"Temixco\",\n    \"date_registry\": \"2015-07-04T07:04:54.592Z\",\n    \"url_image\": \"http://lorempixel.com/g/400/200/\",\n    \"__v\": 1,\n    \"groups_created\": [\n        {\n          \"status\": true,\n          \"members\": [],\n          \"administrators\": [\n            \"559786baa361ca280ffa15f0\"\n          ],\n          \"post\": [],\n          \"image\": [],\n          \"file\": [],\n          \"_id\": \"559786bba361ca280ffa15f1\",\n          \"privileges\": \"personal\",\n          \"date_creation\": \"2015-07-04T07:04:54.592Z\",\n          \"description\": \"My personal folder\",\n          \"name\": \"my g-cloud\",\n          \"__v\": 0\n        }\n      ],\n      \"groups\": [],\n      \"status\": true\n    }\n ]",
          "type": "json"
        }
      ]
    },
    "header": {
      "examples": [
        {
          "title": "Header-Request:",
          "content": "{\n  \"Authorization\": \"Bearer 2af428236a809a023e68ec543a61b9366da7b56f\",\n}",
          "type": "json"
        },
        {
          "title": "Header-Response:",
          "content": "{\n  \"Content-Type\": \"application/json; charset=utf-8\",\n  \"status\": \"200 OK\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-404:",
          "content": "{\n \"message\": \"The resource specified don't exist.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"The access token was not found.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"The access token provided has expired.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"Malformed auth header.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"Only one method may be used to authenticate at a time (Auth header, GET or POST).\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../../source/controllers/api/user.js",
    "groupTitle": "user"
  },
  {
    "type": "put",
    "url": "/user/:id",
    "title": "Updates a user",
    "version": "1.0.0",
    "name": "UpdateUser",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Id of User to update.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id_social_network",
            "description": "<p>Id generated by the user's social network.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>Email address to log in, it is used as a username.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "password",
            "description": "<p>Password to log into the app.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Real name from the user.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "last_name",
            "description": "<p>Lastname(s) from the user.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>number</p> ",
            "optional": false,
            "field": "age",
            "description": "<p>Age from the user.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "sex",
            "description": "<p>Sex from the user.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "phone",
            "description": "<p>Telephone number from the user.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "state",
            "description": "<p>State where the user lives.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "city",
            "description": "<p>City where the user lives.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the user Boolean.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "url_image",
            "description": "<p>Url of the profile picture from the user.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"_id\": \"559784231b993bfe0e8667b7\",\n    \"id_social_network\": \"56789abcdefgrtyui\",\n    \"email\": \"angel@mail.com\",\n    \"password\": \"123abcd\",\n    \"name\": \"Angel David\",\n    \"last_name\": \"Lagunas\",\n    \"age\": 21,\n    \"sex\": \"Masculino\",\n    \"phone\": \"777123456\",\n    \"state\": \"Morelos\",\n    \"city\": \"Temixco\",\n    \"date_registry\": \"2015-07-04T06:53:11.132Z\",\n    \"url_image\": \"http://lorempixel.com/g/400/200/\",\n    \"__v\": 1,\n    \"groups_created\": [\n  {\n    \"status\": true,\n    \"members\": [],\n    \"administrators\": [],\n    \"post\": [],\n    \"image\": [],\n    \"file\": [],\n    \"_id\": \"559784231b993bfe0e8667b8\",\n    \"privileges\": \"personal\",\n    \"date_creation\": \"2015-07-04T06:53:11.132Z\",\n     \"description\": \"My personal folder\",\n     \"name\": \"my g-cloud\",\n     \"__v\": 0\n   }\n ],\n \"groups\": [],\n \"status\": true\n},",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-400:",
          "content": "{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        },
        {
          "title": "Error-404:",
          "content": "{\n \"message\": \"The resource specified don't exist.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"The access token was not found.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"The access token provided has expired.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"Malformed auth header.\",\n}",
          "type": "json"
        },
        {
          "title": "Error-500:",
          "content": "{\n \"OAuth2Error\": \"Only one method may be used to authenticate at a time (Auth header, GET or POST).\",\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "examples": [
        {
          "title": "Header-Request:",
          "content": "{\n  \"Authorization\": \"Bearer 2af428236a809a023e68ec543a61b9366da7b56f\",\n}",
          "type": "json"
        },
        {
          "title": "Header-Response:",
          "content": "{\n  \"Content-Type\": \"application/json; charset=utf-8\",\n  \"status\": \"201 Created\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../../source/controllers/api/user.js",
    "groupTitle": "user"
  }
] });