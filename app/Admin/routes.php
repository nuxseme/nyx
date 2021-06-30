<?php

use Illuminate\Routing\Router;
use Illuminate\Support\Facades\Route;
use Dcat\Admin\Admin;

Admin::routes();

Route::group([
    'prefix'     => config('admin.route.prefix'),
    'namespace'  => config('admin.route.namespace'),
    'middleware' => config('admin.route.middleware'),
], function (Router $router) {

    $router->get('/', 'HomeController@index');
    $router->resource('product', 'ProductController');
    $router->resource('explain', 'ExplainController');
    $router->get('report/product/{product_id}/explain/{explain_id}', 'ReportController@info');
    $router->get('show/{product_id}', 'ShowController@info');

});
