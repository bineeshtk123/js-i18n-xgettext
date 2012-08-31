#!/usr/bin/env python

import SimpleHTTPServer, BaseHTTPServer

try:
    BaseHTTPServer.test(SimpleHTTPServer.SimpleHTTPRequestHandler, 
                        BaseHTTPServer.HTTPServer)
except KeyboardInterrupt:
    print '^C received, bye bye!'
