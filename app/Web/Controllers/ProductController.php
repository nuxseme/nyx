<?php

namespace App\Web\Controllers;


use Illuminate\Routing\Controller;
use App\Models\Product;
use Illuminate\Support\Facades\Config;

class ProductController extends Controller
{
    public function index($serial)
    {
        return view('index')->with('serial',$serial);
    }

    public function info($serial)
    {
        $product = (new Product())->where('serial',$serial)->first();
        return response()->json([
            'product_id' => $product->id,
            'title' => $product->title,
            'model' => env('APP_URL').'/img/modes/'.$product->type.'.png',
            'type' => $product->type,
            'unit' => Config::get('constants.mode.'.$product->type),
            'serial' => $product->serial,
        ]);

    }
}
