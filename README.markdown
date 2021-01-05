# drhinternet/interview-chat-box-challenge-public

To start a simple web server on port 8000:

```
python -m SimpleHTTPServer 8000
```

If you only have python3, this can be started by running:

```
python3 -m http.server 8000
```

This web server is needed because CORS prevents the application from accessing the chat
server when served via `file://`.
