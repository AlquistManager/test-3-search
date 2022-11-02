# Test-3-search

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
# test-3-search

## Curl server calls

# upload the file
curl --header "Content-Type: multipart/form-data" --header "Accept: */*" --header "Accept-Encoding: gzip" -F "file=@/Users/jansedivy/angular/kuka/KSS_86_SI_en.pdf" https://manual-search-develop.alquist.ai/upload/kuka

# get page
curl --header "Content-Type: application/json" --request get  https://manual-search-develop.alquist.ai/download/kuka/482.pdf

# is the server busy
curl --header "Content-Type: application/json" --request get  https://manual-search-develop.alquist.ai/index
return ?????

# retrievel
curl --header "Content-Type: application/json" --request POST --data '{"query": "system", "index": "kuka"}' https://manual-search-develop.alquist.ai/retrieve

{
   "predictions":[
      {
         "__pydantic_initialised__":true,
         "doc_name":"kuka_robot",
         "name":"127.pdf",
         "score":0.5217637314167598
      },
      {
         "__pydantic_initialised__":true,
         "doc_name":"kuka_robot",
         "name":"1.pdf",
         "score":0.5216265308394367
      },
      {
         "__pydantic_initialised__":true,
         "doc_name":"kuka_robot",
         "name":"643.pdf",
         "score":0.5210318107407346
      },
      {
         "__pydantic_initialised__":true,
         "doc_name":"kuka_robot",
         "name":"476.pdf",
         "score":0.5202915134340861
      },
      {
         "__pydantic_initialised__":true,
         "doc_name":"kuka_robot",
         "name":"627.pdf",
         "score":0.5202915134340861
      }
   ]
}
