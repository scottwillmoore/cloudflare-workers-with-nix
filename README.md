# Cloudflare Workers with Nix

1. Install NixOS\*
2. Ensure `git` and `direnv` are installed

\* You could use the Nix package manager on your OS of choice, however this may not replicate the problems encountered. My exact NixOS configuration can be found at configuration can be found at [scottwillmoore/nix-configuration](https://github.com/scottwillmoore/nix-configuration) with commit [`c3c64ed`](https://github.com/scottwillmoore/nix-configuration/tree/c3c64ed0cdafa34a7a8156ac70c1a34c884e064e).

3. Clone this repository
4. `npm install`
5. `npm start`
6. Request `http://127.0.0.1:8787/`



## Certificate or JSG Issues

A temporary fix for [cloudflare/workers-sdk](https://github.com/cloudflare/workers-sdk) issues [#3264](https://github.com/cloudflare/workers-sdk/issues/3264) and [#3289](https://github.com/cloudflare/workers-sdk/issues/3289) is to run the following before starting wrangler, or add it to your `.bashrc` (only needs to be run once per shell session):

```bash
export SSL_CERT_FILE=/etc/ssl/certs/ca-certificates.crt
```

Or add this to your home-manager configuration:

```nix
{
  home.sessionVariables = {
    SSL_CERT_FILE="/etc/ssl/certs/ca-certificates.crt";
  };
}
```

### [#3264](https://github.com/cloudflare/workers-sdk/issues/3264)
```
workerd/util/symbolizer.c++:99: warning: Not symbolizing stack traces because $LLVM_SYMBOLIZER is not set. To symbolize stack traces, set $LLVM_SYMBOLIZER to the location of the llvm-symbolizer binary. When running tests under bazel, use `--test_env=LLVM_SYMBOLIZER=<path>`.

workerd/jsg/util.c++:275: error: e = kj/compat/tls.c++:215: failed: TLS peer's certificate is not trusted; reason = unable to get local issuer certificate
```

### [#3289](https://github.com/cloudflare/workers-sdk/issues/3289)
```
workerd/util/symbolizer.c++:99: warning: Not symbolizing stack traces because $LLVM_SYMBOLIZER is not set. To symbolize stack traces, set $LLVM_SYMBOLIZER to the location of the llvm-symbolizer binary. When running tests under bazel, use `--test_env=LLVM_SYMBOLIZER=<path>`.

workerd/jsg/jsg.c++:133: error: took recursive isolate lock; kj::getStackTrace() = ...
```
