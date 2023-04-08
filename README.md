Webpack,parcel,wheat- bundler packages ur app so that it can be shipped to production

Create react app uses webpack
# Parcel does
- dev build
- Local server
- HMR-Hot Module replacement
- Parcel uses a file watching algorithm return in c++
- Parcel is also caching things  for faster builds(.- parcel-cache)
- Image optimization
- Minification
- Building
- Compress
- Uses consistent hashing
- Code splitting
- Differenctial bundling to support of older browsers
- Error handling
- Diagnostic
- Can help to make our app https
- Tree shake - remove unused code
- different dev and prod modules

npx parcel index.html 

- npx will execute the package

https://parceljs.org/

browserlist - to make our app to support different browsers
