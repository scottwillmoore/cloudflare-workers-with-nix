# Cloudflare Workers with Nix

1. Install NixOS\*
2. Ensure `git` and `direnv` are installed

\* You could use the Nix package manager on your OS of choice, however this may not replicate the problems encountered. My exact NixOS configuration can be found at configuration can be found at [scottwillmoore/nix-configuration](https://github.com/scottwillmoore/nix-configuration) with commit [`c3c64ed`](https://github.com/scottwillmoore/nix-configuration/tree/c3c64ed0cdafa34a7a8156ac70c1a34c884e064e).

## [cloudflare/workers-sdk#3264](https://github.com/cloudflare/workers-sdk/issues/3264)

3. Clone this repository
4. `npm install`
5. `npm start`
6. Request `http://127.0.0.1:8787/`

```
workerd/util/symbolizer.c++:99: warning: Not symbolizing stack traces because $LLVM_SYMBOLIZER is not set. To symbolize stack traces, set $LLVM_SYMBOLIZER to the location of the llvm-symbolizer binary. When running tests under bazel, use `--test_env=LLVM_SYMBOLIZER=<path>`.

workerd/jsg/util.c++:275: error: e = kj/compat/tls.c++:215: failed: TLS peer's certificate is not trusted; reason = unable to get local issuer certificate
```

A temporary fix is to `export SSL_CERT_FILE=/etc/ssl/certs/ca-certificates.crt`.

## [cloudflare/workers-sdk#3289](https://github.com/cloudflare/workers-sdk/issues/3289)

3. Install NixOS\*
4. Clone this repository
5. `export SSL_CERT_FILE=/etc/ssl/certs/ca-certificates.crt` (Temporary fix for #3264)
6. `npm install`
7. `npm start`
8. Request `http://127.0.0.1:8787/`

```
workerd/util/symbolizer.c++:99: warning: Not symbolizing stack traces because $LLVM_SYMBOLIZER is not set. To symbolize stack traces, set $LLVM_SYMBOLIZER to the location of the llvm-symbolizer binary. When running tests under bazel, use `--test_env=LLVM_SYMBOLIZER=<path>`.

workerd/jsg/jsg.c++:133: error: took recursive isolate lock; kj::getStackTrace() = ...
```
