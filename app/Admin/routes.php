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

    Route::redirect('/', '/admin/product');
    $router->resource('product', 'ProductController');
    $router->resource('report', 'ReportController');
    $router->resource('subject', 'SubjectController');
});

Route::group([
    'prefix'     => config('admin.route.api.prefix'),
    'namespace'  => config('admin.route.api.namespace'),
    'middleware' => config('admin.route.api.middleware'),
], function (Router $router) {
    $router->get('product/unit','ProductController@unit');
});
