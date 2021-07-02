<?php

use Illuminate\Routing\Router;
use Illuminate\Support\Facades\Route;
use Dcat\Admin\Admin;

Route::group([
    'prefix'     => config('admin.route.prefix'),
    'namespace'  => config('admin.route.namespace'),
    'middleware' => config('admin.route.middleware'),
], function (Router $router) {

    $router->get('/product/{serial}', 'ProductController@index');
    $router->get('/report', 'ReportController@index');
    $router->get('/product/info/{serial}', 'ProductController@info');
    $router->post('/report', 'ReportController@info');
    $router->get('/report/{serial}', 'ReportController@info');

});
