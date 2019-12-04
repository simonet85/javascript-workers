## Project overview

A small webpage realized in a school context. It uses Javascript web workers to call the lorem bacon api and render data on the client-side.

![alt text](./readme_picture.png)

## Install backend

Create MAMP's host named js-worker.local running php 7.3.8

Then, in Terminal, from base directory  <br>
* cd back
* composer install
* php bin/console doctrine:database:create
* php bin/console make:migration
* php bin/console doctrine:migrations:migrate
* php bin/console doctrine:fixtures:load

## How to make it work

Create your local server by using `php -S 127.0.0.1:8080` <br/>
Open `localhost:8080/front/index.html` to access the program