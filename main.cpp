#include <napi.h>

Napi::Object Init(Napi::Env env, Napi::Object exports) {
  exports.Set("key","hello world");
  return exports;
}

NODE_API_MODULE(testaddon, Init)