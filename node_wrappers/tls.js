/**
 * @name node.tls
 * @namespace
 * Use `require('tls')` to access this module.
 *
 * The `tls` module uses OpenSSL to provide Transport Layer Security and&#47;or
 * Secure Socket Layer: encrypted stream communication.
 *
 * TLS&#47;SSL is a public&#47;private key infrastructure. Each client and each
 * server must have a private key. A private key is created like this
 * <pre class="code prettyprint lang-js">
 *     openssl genrsa -out ryans-key.pem 1024
 * </pre>
 * All severs and some clients need to have a certificate. Certificates are public
 * keys signed by a Certificate Authority or self-signed. The first step to
 * getting a certificate is to create a "Certificate Signing Request" (CSR)
 * file. This is done with:
 * <pre class="code prettyprint lang-js">
 *     openssl req -new -key ryans-key.pem -out ryans-csr.pem
 * </pre>
 * To create a self-signed certificate with the CSR, do this:
 * <pre class="code prettyprint lang-js">
 *     openssl x509 -req -in ryans-csr.pem -signkey ryans-key.pem -out ryans-cert.pem
 * </pre>
 * Alternatively you can send the CSR to a Certificate Authority for signing.
 *
 * (TODO: docs on creating a CA, for now interested users should just look at
 * `test&#47;fixtures&#47;keys&#47;Makefile` in the Node source code)
 */

goog.provide("node.tls");

/**
 * @param {*} credentials
 * @param {*} isServer
 * @param {*} requestCert
 * @param {*} rejectUnauthorized
 * @return {*}
 */
node.tls.prototype.createSecurePair = function(credentials, isServer, requestCert, rejectUnauthorized) {
  return node.tls.core_.createSecurePair(credentials, isServer, requestCert, rejectUnauthorized);
};

/**
 * @param {*} options
 * @param {*} listener
 * @return {*}
 */
node.tls.prototype.createServer = function(options, listener) {
  return node.tls.core_.createServer(options, listener);
};

/**
 * Creates a new client connection to the given `port` and `host`. (If `host`
 * defaults to `localhost`.) `options` should be an object which specifies
 *
 *   - `key`: A string or `Buffer` containing the private key of the server in
 *     PEM format. (Required)
 *
 *   - `cert`: A string or `Buffer` containing the certificate key of the server in
 *     PEM format.
 *
 *   - `ca`: An array of strings or `Buffer`s of trusted certificates. If this is
 *     omitted several well known "root" CAs will be used, like VeriSign.
 *     These are used to authorize connections.
 *
 * `tls.connect()` returns a cleartext `CryptoStream` object.
 *
 * After the TLS&#47;SSL handshake the `callback` is called. The `callback` will be
 * called no matter if the server's certificate was authorized or not. It is up
 * to the user to test `s.authorized` to see if the server certificate was
 * signed by one of the specified CAs. If `s.authorized === false` then the error
 * can be found in `s.authorizationError`.
 * @param {*} port /* host
 * @param {*} options
 * @param {*} cb */
 * @return {*}
 */
node.tls.prototype.connect = function(port /* host, options, cb */) {
  return node.tls.core_.connect(port /* host, options, cb */);
};


/**
 * @private
 * @type {*}
 */
node.tls.core_ = require("tls");