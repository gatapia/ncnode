/**
 * @name node.tls
 * @namespace
 * Use <code class="code prettyprint lang-js">require('tls')</code> to access this module.
 *
 * The <code class="code prettyprint lang-js">tls</code> module uses OpenSSL to provide Transport Layer Security and&#47;or
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
 * <code class="code prettyprint lang-js">test&#47;fixtures&#47;keys&#47;Makefile</code> in the Node source code)
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
 * Creates a new client connection to the given <code class="code prettyprint lang-js">port</code> and <code class="code prettyprint lang-js">host</code>. (If <code class="code prettyprint lang-js">host</code>
 * defaults to <code class="code prettyprint lang-js">localhost</code>.) <code class="code prettyprint lang-js">options</code> should be an object which specifies
 *
 *   - <code class="code prettyprint lang-js">key</code>: A string or <code class="code prettyprint lang-js">Buffer</code> containing the private key of the server in
 *     PEM format. (Required)
 *
 *   - <code class="code prettyprint lang-js">cert</code>: A string or <code class="code prettyprint lang-js">Buffer</code> containing the certificate key of the server in
 *     PEM format.
 *
 *   - <code class="code prettyprint lang-js">ca</code>: An array of strings or <code class="code prettyprint lang-js">Buffer</code>s of trusted certificates. If this is
 *     omitted several well known "root" CAs will be used, like VeriSign.
 *     These are used to authorize connections.
 *
 * <code class="code prettyprint lang-js">tls.connect()</code> returns a cleartext <code class="code prettyprint lang-js">CryptoStream</code> object.
 *
 * After the TLS&#47;SSL handshake the <code class="code prettyprint lang-js">callback</code> is called. The <code class="code prettyprint lang-js">callback</code> will be
 * called no matter if the server's certificate was authorized or not. It is up
 * to the user to test <code class="code prettyprint lang-js">s.authorized</code> to see if the server certificate was
 * signed by one of the specified CAs. If <code class="code prettyprint lang-js">s.authorized === false</code> then the error
 * can be found in <code class="code prettyprint lang-js">s.authorizationError</code>.
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