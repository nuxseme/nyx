<?php

namespace App\Web\Controllers;


use Illuminate\Routing\Controller;
use App\Models\Product;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    public function index($serial)
    {
        $product = (new Product())->where('serial',$serial)->first();
        $view ='product.'.$product->model_type;
        $view = view()->exists($view) ? $view : 'product';
        return view($view)->with('serial',$serial);
    }


    public function info($serial)
    {
        $product = (new Product())->where('serial',$serial)->first();

        return response()->json([
            'product_id' => $product->id,
            'title' => $product->title,
            'model' => Storage::disk(config('admin.upload.disk'))->url('images/未命名文件.jpeg'),
            'type' => [1,2],
            'serial' => $product->serial,
        ]);

    }
}
